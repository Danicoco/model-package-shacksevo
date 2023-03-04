import { ISpinRecord } from "../../types";
import SpinRecord from "../models/spinRecord";

class SpinRecordService {
  private _id: string;

  private userId: string;

  private partner: string;

  private model = SpinRecord;

  constructor({
    _id = "",
    userId = "",
    partner = "",
  }: {
    _id: string;
    userId: string;
    partner: string;
  }) {
    this._id = _id;
    this.userId = userId;
    this.partner = partner;
  }

  public async create(params: Partial<ISpinRecord>) {
    const data = new this.model(params);
    const record = await data.save().catch((e) => {
      throw new Error(e);
    });
    return record;
  }

  public async findById() {
    const record = await this.model.findById(this._id).catch((e) => {
      throw new Error(e);
    });
    return record;
  }

  public async findAll() {
    const records = await this.model
      .find({
        ...(this.userId && { userId: this.userId }),
        ...(this.partner && { partner: this.partner }),
      })
      .catch((e) => {
        throw new Error(e);
      });
    return records;
  }

  public async updateOne(params: Partial<ISpinRecord>) {
    const record = await this.model
      .findOneAndUpdate({ _id: this._id }, { ...params }, { new: true })
      .catch((e) => {
        throw new Error(e);
      });
    return record;
  }
}

export default SpinRecordService;
