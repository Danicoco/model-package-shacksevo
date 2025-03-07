import { ClientSession, FilterQuery, QueryOptions } from "mongoose";
import { IGameRound, IPaginator } from "../../types";
import { GameRound } from "../models";
import { AnyBulkWriteOperation } from "mongodb";

class GameRoundService {
  _id = "";
  eventId = "";
  gameOdd = "";
  createdAt = "";
  updatedAt = "";
  eventTypes = [];
  eventRanges = [];
  partnerName = "";
  algorithmUsed = "";
  partnerId = "";
  numberOfBetPlaced = 0;
  year: string;
  crashRoundId = "";

  constructor(_id = "", partnerId = "", year = "", crashRoundId = "") {
    this.partnerId = partnerId;
    this._id = _id;
    this.year = year;
    this.crashRoundId = crashRoundId;
  }

  public async create(params: Partial<IGameRound>) {
    try {
      const round = new GameRound({ ...params });
      await round.save();
      return round;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async bulkCreate(params: Partial<IGameRound>[]) {
    const rounds = await GameRound.insertMany(params).catch((e: any) => {
      throw new Error(e);
    });
    return rounds;
  }

  public async findOne(filter: FilterQuery<IGameRound>, options: QueryOptions) {
    const round = await GameRound.findOne(filter, {}, { lean: true, ...options })
      .catch((e: any) => {
        throw new Error(e);
      });
    return round;
  }

  public async findOneCrashRound() {
    const round = await GameRound.findOne()
      .where("crashRoundId")
      .equals(this.crashRoundId)
      .catch((e: any) => {
        throw new Error(e);
      });
    return round;
  }

  public async findAll(limit: number) {
    const rounds = await GameRound.find()
      .where(this.partnerId && "partnerId")
      .equals(this.partnerId && this.partnerId)
      .limit(limit)
      .catch((e: any) => {
        throw new Error(e);
      });
    return rounds;
  }

  public async findAllByCondition({ sort, limit, condition }: IPaginator) {
    const rounds = await GameRound.find(condition)
      .sort(sort)
      .limit(limit)
      .catch((e: any) => {
        throw new Error(e);
      });
    return rounds;
  }

  public async findAllAdmin() {
    const rounds = await GameRound.find()
      .sort("-createdAt")
      .catch((e: any) => {
        throw new Error(e);
      });
    return rounds;
  }

  public async findByYear() {
    const rounds = await GameRound.find()
      .where("partnerId")
      .equals(this.partnerId)
      .where("season")
      .equals(Number(this.year))
      .catch((e: any) => {
        throw new Error(e);
      });
    return rounds;
  }

  public async updateOne(params: Partial<IGameRound>) {
    const round = await GameRound.findOneAndUpdate(
      { _id: this._id },
      { ...params },
      { new: true }
    );
    return round;
  }

  public async update(
    filter: Partial<IGameRound>,
    params: Partial<IGameRound>
  ) {
    const round = await GameRound.findOneAndUpdate(
      filter,
      { ...params },
      { new: true }
    ).lean();

    return round;
  }

  public async bulkWrite(
    writes: AnyBulkWriteOperation<IGameRound>[],
    session?: ClientSession
  ) {
    return GameRound.bulkWrite(writes , { session, ordered: false });
  }

  public async updateOneCrashRound(params: Partial<IGameRound>) {
    const round = await GameRound.findOneAndUpdate(
      { crashRoundId: this.crashRoundId },
      { ...params },
      { new: true }
    );
    return round;
  }

  public async last() {
    const round = await GameRound.find().sort({ _id: -1 }).limit(1);
    return round;
  }

  public async findOneFirst() {
    const round = await GameRound.findOne()
      .where("partnerId")
      .equals(this.partnerId)
      .catch((e: any) => {
        throw new Error(e);
      });
    return round;
  }

  public async findByIsPlayed(params: boolean) {
    const round = await GameRound.findOne()
      .where("partnerId")
      .equals(this.partnerId)
      .where("isPlayed")
      .equals(params)
      .catch((e: any) => {
        throw new Error(e);
      });
    return round;
  }

  public async deleteAll() {
    await GameRound.deleteOne({ _id: this._id }).catch((e: any) => {
      throw new Error(e);
    });
    return true;
  }

  public async deleteByPartnerId() {
    await GameRound.deleteMany({ partnerId: this.partnerId }).catch(
      (e: any) => {
        throw new Error(e);
      }
    );
    return true;
  }
}

export default GameRoundService;
