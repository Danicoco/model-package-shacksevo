import { ClientSession, FilterQuery, QueryOptions } from "mongoose";
import { IAggregator, IPaginator } from "../../types";
import { Aggregator } from "../models";
import Pagionation from "./Pagination";

class AggregatorService {
  private model = Aggregator;

  private finderOptions: Partial<IAggregator>;

  private composeFinder(params: Partial<IAggregator>) {
    const isValidValue = (value: string) => value !== "" && value !== undefined;

    Object.entries(params).forEach(([key, value]) => {
      if (!isValidValue(value as string)) {
        // @ts-ignore
        delete params[key];
      }
    });

    return params;
  }

  constructor(finderOptions: Partial<IAggregator>) {
    this.finderOptions = this.composeFinder(finderOptions);
  }

  public async create(
    params: IAggregator,
    session?: ClientSession
  ): Promise<IAggregator> {
    const data = await new this.model(params).save({
      ...(session && { session }),
    });
    return data;
  }

  public async bulkCreate(
    params: Array<IAggregator>,
    session?: ClientSession
  ): Promise<IAggregator[]> {
    const data = await this.model.insertMany(params, {
      ...(session && { session }),
    });
    return data;
  }

  public async update(
    param: Partial<IAggregator>,
    session?: ClientSession
  ): Promise<IAggregator> {
    const data = await this.model
      .findOneAndUpdate(this.finderOptions, param, {
        new: true,
        ...(session && { session }),
      })
      .lean();

    if (!data) throw new Error("Error updating record");

    return data;
  }

  public async updateMany(param: Partial<IAggregator>, session?: ClientSession) {
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

  public async findOne(session?: ClientSession): Promise<IAggregator | null> {
    const data = await this.model
      .findOne(
        { ...this.finderOptions },
        {},
        { sort: { createdAt: -1 }, ...(session && { session }) }
      )
      .lean();

    return data;
  }

  public async findOneCustom(filter: FilterQuery<IAggregator>, options: QueryOptions) {
      const round = await this.model.findOne(filter, {}, { lean: true, ...options })
        .catch((e: any) => {
          throw new Error(e);
        });
      return round;
    }

  public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
    const count = await this.count(condition).catch((e) => {
      throw e;
    });
    const Aggregators = await Aggregator.find({
      ...(condition && condition),
    })
      .sort(sort)
      .limit(limit)
      .skip(limit * (page - 1))
      .catch((e) => {
        throw e;
      });

    return {
      data: Aggregators,
      pagination: Pagionation.builder(Aggregators, count, { page, limit }),
    };
  }

  public async count(condition?: any) {
    const docs = await Aggregator.countDocuments({
      ...(condition && condition),
    }).catch((e) => {
      throw e;
    });
    return docs;
  }
}

export default AggregatorService;
