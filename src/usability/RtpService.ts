import { Rtp } from "../models";
import { IRTP } from "../../types";

class RTPService {
    private model = Rtp;

    private id: string

    private gameType: string;

    private partnerId: string;

    constructor(id = '', gameType = '', partnerId = '') {
        this.id = id;
        this.gameType = gameType;
        this.partnerId = partnerId;
    }

    public async create(params: IRTP) {
        const rtp = await this.model.create(params).catch(e => { throw e; });
        await rtp.save();
        return rtp;
    }

    public async findOne() {
        const rtp = await this.model.findOne({
            ...(this.id && { _id: this.id }),
            ...(this.gameType && { gameType: this.gameType }),
            ...(this.partnerId && { partnerId: this.partnerId }),
        }).catch(e => { throw e });

        return rtp;
    }

    public async updateOne(params: Partial<IRTP>) {
        const rtp = await this.model.findOneAndUpdate(
            { _id: this.id },
            params,
            { new: true },
        ).catch(e => { throw e; });

        return rtp;
    }
}

export default RTPService;
