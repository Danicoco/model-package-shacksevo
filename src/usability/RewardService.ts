import { Reward } from "../models";
import { IPaginator, IReward } from "../../types";
import { ObjectId } from "mongoose";
import Pagionation from "./Pagination";

class RewardService {
  private model = Reward;

  private _id: string;
  private userId: string;
  private partnerId?: ObjectId;

  constructor(_id = "", partnerId?: ObjectId, userId = "") {
    this._id = _id;
    this.userId = userId;
    this.partnerId = partnerId;
  }

  private finder() {
    return {
      ...(this._id && { _id: this._id }),
      ...(this.userId && { userId: this.userId }),
      ...(this.partnerId && { partnerId: this.partnerId }),
    };
  }

  public async create(params: Partial<IReward>) {
    try {
      const reward = new this.model({ ...params });
      await reward.save();
      return reward;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async findOne() {
    const reward = await this.model.findOne(this.finder()).catch((e: any) => {
      throw new Error(e.message);
    });
    return reward;
  }

  public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
    const count = await this.count(condition).catch((e) => {
      throw e;
    });
    const bets = await this.model
      .find({
        ...(condition && condition),
      })
      .sort(sort)
      .limit(limit)
      .skip(limit * (page - 1))
      .catch((e) => {
        throw e;
      });

    return {
      data: bets,
      pagination: Pagionation.builder(bets, count, { page, limit }),
    };
  }

  public async count(condition?: any) {
    const docs = await this.model
      .countDocuments({
        ...(condition && condition),
      })
      .catch((e) => {
        throw e;
      });
    return docs;
  }

  public async deleteOne() {
    const reward = await this.model
      .findOneAndDelete(this.finder())
      .catch((e: any) => {
        throw new Error(e.message);
      });

    return reward;
  }

  public async setReward(_params: Partial<IReward>) {
    try {
      const reward = this.model.find();
      return reward;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async updateOne(params: Partial<IReward>) {
    try {
      const reward = this.model.findOneAndUpdate({
        _id: this._id,
      }, { ...params }, { new: true});
      return reward;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async getReward() {
    const reward = await this.model.find();

    return reward;
  }
}
export default RewardService;
