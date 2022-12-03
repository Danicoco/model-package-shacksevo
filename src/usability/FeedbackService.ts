import { Feedback } from '../models';
import Pagionation from "./Pagination";
import { IFeedback, IPaginator } from "../../types";

class FeedbackService {
    private _id: string;
    private type: string;
    private title: string;

    constructor(_id = '', type = '', title = '') {
        this._id = _id;
        this.type = type;
        this.title = title;
    }

    public async create(params: Partial<IFeedback>) {
        try {
            const feed= await new Feedback({ ...params }).save();
            return feed;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const feed= await Feedback
            .findOne({
                ...(this._id && { _id: this._id }),
                ...(this.type && { type: this.type }),
                ...(this.title && { title: this.title }),
            })
            .catch((e: any) => { throw new Error(e) });
        return feed;
    }

    public async findAll() {
        const feedbacks = await Feedback
            .find({
                ...(this._id && { _id: this._id }),
                ...(this.title && { title: this.title }),
                ...(this.type && { type: this.type }),
    })
            .catch((e: any) => { throw new Error(e) });
        return feedbacks;
    }

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch(e => { throw e; });
        const Feedbacks = await Feedback
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
            data: Feedbacks,
            pagination: Pagionation.builder(Feedbacks, count, { page, limit }),
        }
    }

    public async count(condition?: any) {
        const docs = await Feedback.countDocuments({
            ...(condition && condition)
        }).catch(e => { throw e; });
        return docs;
    }

    public async updateOne(params: Partial<IFeedback>) {
        const feed= await Feedback
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true }
            );
        return feed;
    }
}

export default FeedbackService;
