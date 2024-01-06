import { ClientSession } from "mongoose";
import { ICustomization, IPaginator } from "../../types";
import { Customization } from '../models';
import Pagionation from "./Pagination";

class CustomizationService {
    private model = Customization;

    private _id: string;

    private name: string;

    private type: string;

    private partnerId: string;

    constructor(_id = '', partnerId = '', name = '', type = '') {
        this._id = _id;
        this.name = name;
        this.type = type;
        this.partnerId = partnerId;
    }

    public async create(params: Partial<ICustomization>, session?: ClientSession) {
        try {
            const cus = new this.model({ ...params });
            await cus.save({ ...(session && { session } ) })
            return cus;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne(session?: ClientSession) {
        const cus = await this.model
            .findOne({
                ...(this._id && { _id: this._id }),
                ...(this.partnerId && { partnerId: this.partnerId }),
                ...(this.type && { game: this.type }),
                ...(this.name && { name: this.name }),
            }, {}, { ...(session && { session }) })
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
                ...(this.type && { game: this.type }),
                ...(this.name && { name: this.name }),
            })
            .catch((e: any) => { throw new Error(e) });

        return cus;
    }

    public async updateOne(params: Partial<ICustomization>, session?: ClientSession) {
        const cus = await this.model
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true, ...(session && { session }) }
            );

        return cus;
    }

    public async deleteOne(session?: ClientSession) {
        const cus = await this.model
            .deleteOne(
                { _id: this._id },
                { ...(session  && { session }) }
            );

        return cus;
    }
}

export default CustomizationService;
