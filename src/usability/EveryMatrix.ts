import { EveryMatrix } from "../models";
import { IEveryMatrix, IPaginator } from "../../types";
import Pagionation from "./Pagination";

class EveryMatrixService {
  private model = EveryMatrix;
  private id: string;
  private userId: string;
  private username: string;
  private partnerId: string;

  constructor(id = "", userId = "", username = "", partnerId = "") {
    this.id = id;
    this.userId = userId;
    this.username = username;
    this.partnerId = partnerId;
  }

  public async create(params: Partial<IEveryMatrix>) {
    try {
      const everyMatrix = new this.model({ ...params }).save();
      return everyMatrix;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async findOne() {
    const everyMatrix = await EveryMatrix.findOne({
        ...(this.id && { _id: this.id }),
        ...(this.partnerId && { partnerId: this.partnerId }),
        ...(this.userId && { userId: this.userId }),
        ...(this.username && { userId: this.username }),
    }).catch((e: any) => {
        throw new Error(e.message);
      });
    return everyMatrix;
  }

  public async findAll(limit: number) {
    const everyMatrix = await EveryMatrix.find()
      .sort("-createdAt")
      .where("partnerId")
      .equals(this.partnerId)
      .limit(limit)
      .catch((e: any) => {
        throw new Error(e.message);
      });

    return everyMatrix;
  }

  public async findAllGeneric(
    userId = "",
    username = "",
  ) {
    const bets = await EveryMatrix.find({
      ...(userId && { userId }),
      ...(username && { username }),
      ...(this.partnerId && { partnerId: this.partnerId }),
    })
      .sort("-createdAt")
      .catch((e) => {
        throw new Error(e.message);
      });

    return bets;
  }

  public async findAllByAdmin() {
    const everyMatrix = await EveryMatrix.find()
      .sort("-createdAt")
      .catch((e: any) => {
        throw new Error(e.message);
      });
    return everyMatrix;
  }

  public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
    const count = await this.count(condition).catch((e) => {
      throw e;
    });
    const everyMatrix = await EveryMatrix.find({
      ...(condition && condition),
    })
      .sort(sort)
      .limit(limit)
      .skip(limit * (page - 1))
      .catch((e) => {
        throw e;
      });

    return {
      data: everyMatrix,
      pagination: Pagionation.builder(everyMatrix, count, { page, limit }),
    };
  }

  public async count(condition?: any) {
    const docs = await EveryMatrix.countDocuments({
      ...(condition && condition),
    }).catch((e) => {
      throw e;
    });
    return docs;
  }

  public async findByType(type: string) {
    const everyMatrix = await EveryMatrix.find()
      .where("gameType")
      .equals(type)
      .sort("-createdAt")
      .catch((e: any) => {
        throw new Error(e.message);
      });
    return everyMatrix;
  }

  public async deleteOne() {
    const everyMatrix = await EveryMatrix.findOneAndDelete()
      .where(this.id ? "_id" : "partnerId")
      .equals(this.id ? this.id : this.partnerId)
      .catch((e: any) => {
        throw new Error(e.message);
      });

    return everyMatrix;
  }

  public async updateOne(params: Partial<IEveryMatrix>) {
    const everyMatrix = await EveryMatrix.findOneAndUpdate(
      { _id: this.id },
      { ...params },
      { new: true }
    ).catch((e: any) => {
      throw new Error(e.message);
    });

    return everyMatrix;
  }

  public async updateAll(params: Partial<IEveryMatrix>) {
    const everyMatrix = await EveryMatrix.updateMany(
      { gameRoundId: this.partnerId },
      { ...params },
      { new: true }
    ).catch((e) => {
      throw new Error(e.message);
    });

    return everyMatrix;
  }
}

export default EveryMatrixService;
