import { IPaginator, IUser } from "../../types";
import { User } from "../models";
import Pagionation from "./Pagination";

class UserService {
  private _id = "";
  private partnerId = "";
  private partnerUserId = "";

  constructor(_id = "", partnerId = "", partnerUserId = "") {
    this.partnerId = partnerId;
    this._id = _id;
    this.partnerUserId = partnerUserId;
  }

  public async create(params: Partial<IUser>) {
    try {
      const user = new User({ ...params });
      await user.save();
      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async findOne() {
    const user = await User.findOne({
      ...(this._id && { _id: this._id }),
      ...(this.partnerUserId && { partnerUserId: this.partnerUserId }),
    }).catch((e: any) => {
      throw new Error(e);
    });
    return user;
  }

  public async findAll() {
    const users = await User.find()
      .where(this.partnerId && "partnerId")
      .equals(this.partnerId && this.partnerId)
      .catch((e: any) => {
        throw new Error(e);
      });
    return users;
  }

  public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
    const count = await this.count(condition).catch((e) => {
      throw e;
    });
    const spins = await User.find({
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
    const docs = await User.countDocuments({
      ...(condition && condition),
    }).catch((e) => {
      throw e;
    });
    return docs;
  }

  public async updateOne(params: Partial<IUser>) {
    const user = await User.findOneAndUpdate(
      {
        ...(this._id && { _id: this._id }),
        ...(this.partnerUserId && { partnerUserId: this.partnerUserId }),
        ...(this.partnerId && { partnerId: this.partnerId }),
      },
      { ...params },
      { new: true }
    );
    return user;
  }

  public async last() {
    const user = await User.find().sort({ _id: -1 }).limit(1);
    return user[0];
  }
}

export default UserService;
