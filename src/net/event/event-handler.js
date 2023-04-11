import WS from "../websocket/websocket";
import { useStore } from "../../store"

export default class EventHandler {

    static init() {
        WS.addListener('message', this._onMessage);
        return this;
    }

    static _onMessage = (msg) => {
        if(msg.code !== WS.Codes.EVENT) return;

        switch(msg.field){
            case 'energy-price': useStore.getState().setEnergyData(msg.data);
        }
    }
}