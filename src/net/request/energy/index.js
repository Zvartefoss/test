import RequestHandler from "../request-handler";
import WS from "../../websocket/websocket";
import { dateToUnix } from "../../../utils/date"

export const getEnergyData = async () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const from = dateToUnix(now);
    const to = dateToUnix(tomorrow);

    const data = {
        code: WS.Codes.GET,
        field: 'energy-price',
        params: {
            from: from,
            to: to,
        },
    }

    return await RequestHandler.send(data, 'energy-price');
}