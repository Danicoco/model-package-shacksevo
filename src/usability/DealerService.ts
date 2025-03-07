import { ClientSession } from "mongoose";
import { IDealer, IPaginator } from "../../types";
import { Dealer } from "../models";
import Pagionation from "./Pagination";

class DealerService {
  private model = Dealer;

  private finderOptions: Partial<IDealer>;

  private composeFinder(params: Partial<IDealer>) {
    const isValidValue = (value: string) => value !== "" && value !== undefined;

    Object.entries(params).forEach(([key, value]) => {
      if (!isValidValue(value as string)) {
        // @ts-ignore
        delete params[key];
      }
    });

    return params;
  }

  constructor(finderOptions: Partial<IDealer>) {
    this.finderOptions = this.composeFinder(finderOptions);
  }

  public async create(
    params: IDealer,
    session?: ClientSession
  ): Promise<IDealer> {
    const data = await new this.model(params).save({
      ...(session && { session }),
    });
    return data;
  }

  public async bulkCreate(
    params: Array<IDealer>,
    session?: ClientSession
  ): Promise<IDealer[]> {
    const data = await this.model.insertMany(params, {
      ...(session && { session }),
    });
    return data;
  }

  public async update(
    param: Partial<IDealer>,
    session?: ClientSession
  ): Promise<IDealer> {
    const data = await this.model
      .findOneAndUpdate(this.finderOptions, param, {
        new: true,
        ...(session && { session }),
      })
      .lean();

    if (!data) throw new Error("Error updating record");

    return data;
  }

  public async updateMany(param: Partial<IDealer>, session?: ClientSession) {
    const data = await this.model
      .updateMany(this.finderOptions, param, {
        new: true,
        ...(session && { session }),
      })
      .lean();

    return data;
  }

  public async bulkWrite(param: any[], session?: ClientSession) {
    const data = await this.model.bulkWrite(param, { session });
    return data;
  }

  public async findOne(session?: ClientSession): Promise<IDealer | null> {
    const data = await this.model
      .findOne(
        { ...this.finderOptions },
        {},
        { sort: { createdAt: -1 }, ...(session && { session }) }
      )
      .lean();

    return data;
  }

  public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
    const count = await this.count(condition).catch((e) => {
      throw e;
    });
    const Dealers = await Dealer.find({
      ...(condition && condition),
    })
      .sort(sort)
      .limit(limit)
      .skip(limit * (page - 1))
      .catch((e) => {
        throw e;
      });

    return {
      data: Dealers,
      pagination: Pagionation.builder(Dealers, count, { page, limit }),
    };
  }

  public async count(condition?: any) {
    const docs = await Dealer.countDocuments({
      ...(condition && condition),
    }).catch((e) => {
      throw e;
    });
    return docs;
  }
}

export default DealerService;
