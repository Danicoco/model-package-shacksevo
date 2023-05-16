import { ICustomization, IPaginator } from "../../types";
import { Customization } from '../models';
import Pagionation from "./Pagination";

class CustomizationService {
    private model = Customization;

    private _id: string;

    private name: string;

    private game: string;

    private partnerId: string;

    constructor(_id = '', partnerId = '', name = '', game = '') {
        this._id = _id;
        this.name = name;
        this.game = game;
        this.partnerId = partnerId;
    }

    public async create(params: Partial<ICustomization>) {
        try {
            const cus = await this.model.create({ ...params });
            return cus;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const cus = await this.model
            .findOne({
                ...(this._id && { _id: this._id }),
                ...(this.partnerId && { partnerId: this.partnerId }),
                ...(this.game && { game: this.game }),
                ...(this.name && { name: this.name }),
            })
            .catch((e: any) => { throw new Error(e) });

        return cus;
    }

    public async count(condition?: any) {
        const docs = await Customization.countDocuments({
            ...(condition && condition)
        }).catch(e => { throw e; });
        return docs;
    }

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch(e => { throw e; });
        const cus = await this.model
        .find({
            ...(condition && condition)
        })
        .sort(sort)
        .limit(limit)
        .skip(limit * (page - 1))
        .catch((e) => {
          throw e;
        });

        return {
            data: cus,
            pagination: Pagionation.builder(cus, count, { page, limit }),
        }
    }

    public async findAll() {
        const cus = await this.model
            .find({
                ...(this._id && { _id: this._id }),
                ...(this.partnerId && { partnerId: this.partnerId }),
                ...(this.game && { game: this.game }),
                ...(this.name && { name: this.name }),
            })
            .catch((e: any) => { throw new Error(e) });

        return cus;
    }

    public async updateOne(params: Partial<ICustomization>) {
        const cus = await this.model
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true }
            );

        return cus;
    }
}

export default CustomizationService;
