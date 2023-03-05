import Pagionation from "./Pagination";
import SpinRecord from "../models/spinRecord";
import { IPaginator, ISpinContructor, ISpinRecord } from "../../types";

class SpinRecordService {
  private model = SpinRecord;

  private id: string;

  private userId: string;

  private partnerId: string;

  constructor({ id = "", userId = "", partnerId = "" }: ISpinContructor = {}) {
    this.id = id;
    this.userId = userId;
    this.partnerId = partnerId;
  }

  private finder() {
    return {
      ...(this.id && { _id: this.id }),
      ...(this.userId && { userId: this.userId }),
      ...(this.partnerId && { partnerId: this.partnerId }),
    };
  }

  public async create(params: Partial<ISpinRecord>) {
    const spin = new this.model(params).save().catch((e) => {
      throw new Error(e);
    });
    return spin;
  }

  public async findOne() {
    const spin = await this.model.findOne(this.finder()).catch((e) => {
      throw new Error(e);
    });
    return spin;
  }

  public async findAll() {
    const spins = await this.model
      .find({
        ...(this.userId && { userId: this.userId }),
        ...(this.partnerId && { partnerId: this.partnerId }),
      })
      .catch((e) => {
        throw new Error(e);
      });
    return spins;
  }

  public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
    const count = await this.count(condition).catch((e) => {
      throw e;
    });
    const spins = await this.model
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
      data: spins,
      pagination: Pagionation.builder(spins, count, { page, limit }),
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

  public async updateOne(params: Partial<ISpinRecord>) {
    const record = await this.model
      .findOneAndUpdate({ _id: this.id }, { ...params }, { new: true })
      .catch((e) => {
        throw new Error(e);
      });
    return record;
  }
}

export default SpinRecordService;
