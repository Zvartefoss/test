import { Platform } from "react-native";
import { retrieveToken } from "../../services/storage";
import CONFIG from '../../constants/config';

const STATE = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3,
};

export default class SpWebsocket {

    constructor() {
        if (SpWebsocket._instance) {
            return SpWebsocket._instance;
        }
        SpWebsocket._instance = this;
    }

    static Codes = {
        GET: 1,
        GET_RESPONSE: 2,
        EVENT: 3,
    }

    static init(url, timeout) {
        this._url = url;
        this._ws = null;
        this._timeout = timeout;
        this._retryInterval = 500;
        this._retryCount = 0;
        this._listeners = {
            "open": [],
            "close": [],
            "message": [],
        }
    };

    static open() {
        if (this.isClosing) {
            console.error(`Cannot open websocket while closing`);
        }

        this._connect();
    }

    static _connect = async () => {
        console.log("Websocket connecting... " + this._url);
        const token = await retrieveToken();
        if (!token) { console.warn("Websocket missing token, aborting attempt to open connection"); return }

        /*
        * set auth token in cookies if using web
        * custom headers are not supported in browser
        */
        if (Platform.OS == 'web') {
            console.log('web');
            document.cookie = `sp-token=${token}; path=/; domain=${CONFIG.server_url}`
            this._ws = new WebSocket(this._url);
        } else {
            this._ws = new WebSocket(this._url, '', {
                headers: {
                    'sp-token': token
                }
            });
        }

        this._ws.onopen = e => this._onOpen(e);
        this._ws.onmessage = e => this._onMessage(e);
        this._ws.onerror = e => this._onError(e);
        this._ws.onclose = e => this._onClose(e);
    }

    static sendPacked(data) {
        const msg = JSON.stringify(data);
        this.send(msg);
    }

    static send = (data) => {
        if (!this.isOpened) { console.error('Websocket is not open and unable send'); return null; }
        console.log("Sending: " + data);
        this._ws.send(data);
    }

    static cleanupWS() {
        this._ws = null;
        this._listeners = {};
    }

    static get isOpening() {
        return Boolean(this._ws && this._ws.readyState === STATE.CONNECTING);
    }

    static get isOpened() {
        return Boolean(this._ws && this._ws.readyState === STATE.OPEN);
    }

    static get isClosing() {
        return Boolean(this._ws && this._ws.readyState === STATE.CLOSING);
    }

    static get isClosed() {
        return Boolean(this._ws && this._ws.readyState === STATE.CLOSED);
    }

    static addListener(type, callback) {
        if (type !== 'open' && type !== 'close' && type !== 'message') { console.error("type does not equal 'open','close' or 'message'"); return; }
        this._listeners[type].push(callback);
    }

    static _onOpen(event) {
        this._retryCount = 0;
        this._listeners['open'].forEach(fn => fn(event));
    }

    static _onMessage(event) {
        this._listeners['message'].forEach(fn => fn(event));
    }

    static _onError(event) {
        // an error occurred
        console.log(event.message);
    };

    static _onClose(event) {
        // connection closed
        console.log(event.code, event.reason);
        this._listeners['close'].forEach(fn => fn(event));

        switch (event.code) {
            case 1006: {
                // Abnormal closure - retrying connection
                let timeout = this._retryInterval * Math.pow(2, this._retryCount);
                this._retryCount++;
                console.log(1006 + ": Attempting reconnect in " + timeout + "ms");
                setTimeout(() => {
                    if (!this.isOpening && !this.isOpened) this.open();
                }, timeout);
                break;
            }
            case 4403: {
                // Connection rejected - go to login
                break;
            }
            default: break;
        }
    };
}