import WS from "../websocket/websocket";

export default class RequestHandler {

    static init(timeout) {
        WS.addListener('message', this._onMessage);
        this._requests = new Map();
        this._timeout = timeout;
        return this;
    }

    static _onMessage = (msg) => {
        msg = JSON.parse(msg.data) // ??
        //console.log("Request-handler received: ", msg);

        if (msg.code === WS.Codes.GET_RESPONSE) {
            const resolve = this._requests.get(msg.corid);
            if (resolve) resolve(msg);
        }
    }

    static send(data, field, options = {}) {
        const id = options.id || this._genId();
        const timeout = options.timeout || this._timeout;

        const request = {
            id: id,
            code: WS.Codes.GET,
            field: field,
            timestamp: +new Date(),
            ...data
        };

        const result = new Promise((resolve, reject) => {
            this._requests.set(id, resolve);

            setTimeout(() => {
                resolve({ code: 408, reason: "timeout", id: id });
            }, timeout);
        })

        WS.sendPacked(request);

        return result;
    }

    static _genId() {
        const num = Math.floor(Math.random() * Date.now());
        return num.toString();
    }
}