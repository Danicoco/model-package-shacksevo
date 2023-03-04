import { IUser } from "../../types";
import { User } from "../models";

class UserService {
  private _id = "";
  private partnerId = "";

  constructor(_id = "", partnerId = "") {
    this.partnerId = partnerId;
    this._id = _id;
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
    const user = await User.findOne()
      .where("_id")
      .equals(this._id)
      .catch((e: any) => {
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

  public async updateOne(params: Partial<IUser>) {
    const user = await User.findOneAndUpdate(
      { _id: this._id },
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
