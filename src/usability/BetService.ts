import { BetPlaced } from "../models";
import { IBetPlaced } from "../../types";

class BetPlacedService {
  private partnerId: string | null;
  private _id: string | null;

  constructor(_id: string | null, partnerId: string | null) {
    this._id = _id;
    this.partnerId = partnerId;
  }

  public async create(params: Partial<IBetPlaced>) {
    try {
      const betPlaced = new BetPlaced({ ...params });
      await betPlaced.save();
      return betPlaced;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async findOne() {
    const betPlaced = await BetPlaced.findOne()
      .where(this._id ? "_id" : "partnerId")
      .equals(this._id ? this._id : this.partnerId)
      .catch((e: any) => {
        throw new Error(e.message);
      });
    return betPlaced;
  }

  public async findAll(limit: number) {
    const betPlaceds = await BetPlaced
      .find()
      .where('partnerId')
      .equals(this.partnerId)
      .limit(limit)
      .catch((e: any) => {
      throw new Error(e.message);
    });
    return betPlaceds;
  }

  public async findAllGeneric(userId = '', username = '', gameRoundId = '', type = '') {
    const bets = await BetPlaced.find({
      ...(userId && { userId }),
      ...(username && { username }),
      ...(type && { gameType: type }),
      ...(gameRoundId && { gameRoundId }),
      ...(this.partnerId  && { partnerId: this.partnerId }),
    }).catch(e => { throw new Error(e.message) });


    return bets;
  }

  public async findAllByAdmin() {
    const betPlaceds = await BetPlaced.find().catch((e: any) => {
      throw new Error(e.message);
    });
    return betPlaceds;
  }

  public async findByType(type: string) {
    const bets = await BetPlaced.find()
      .where("gameType")
      .equals(type)
      .catch((e: any) => {
        throw new Error(e.message);
      });
    return bets;
  }

  public async singleByType(params: Partial<IBetPlaced>) {
    const betPlaced = await BetPlaced.findOne()
      .where("gameType")
      .equals(params.gameType)
      .where('userId')
      .equals(params.userId)
      .where('partnerId')
      .equals(this.partnerId)
      .where('username')
      .equals(params.username)
      .catch((e: any) => {
        throw new Error(e.message);
      });
    return betPlaced;
  }

  public async findAllUserBets(params: Partial<IBetPlaced>) {
    const bets = await BetPlaced.find()
      .where('userId')
      .equals(params.userId)
      .where('gameType')
      .equals(params.gameType)
      .catch((e: any) => {
        throw new Error(e.message);
      }
    );
    return bets;
  }

  public async deleteOne() {
    const betPlaced = await BetPlaced.findOneAndDelete()
      .where(this._id ? "_id" : "partnerId")
      .equals(this._id ? this._id : this.partnerId)
      .catch((e: any) => {
        throw new Error(e.message);
      });

    return betPlaced;
  }

  public async updateOne(params: Partial<IBetPlaced>) {
    const betPlaced = await BetPlaced.findOneAndUpdate(
      { _id: this._id },
      { ...params },
      { new: true }
    ).catch((e: any) => {
      throw new Error(e.message);
    });

    return betPlaced;
  }

  public async updateAll(params: Partial<IBetPlaced>) {
    const betPlaced = await BetPlaced.updateMany(
      { gameRoundId: this.partnerId },
      { ...params },
      { new: true })
      .catch((e) => {
        throw new Error(e.message);
      });

    return betPlaced;
  }
}

export default BetPlacedService;
