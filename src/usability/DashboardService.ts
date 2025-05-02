import { ClientSession, FilterQuery, QueryOptions } from "mongoose";
import { IBetPlaced, IDashboard, IPaginator } from "../../types";
import { Dashboard } from "../models";
import Pagionation from "./Pagination";
import { recordSummaryValue } from "../common/helper";

class DashboardService {
  private model = Dashboard;

  private finderOptions: Partial<IDashboard>;

  private composeFinder(params: Partial<IDashboard>) {
    const isValidValue = (value: string) => value !== "" && value !== undefined;

    Object.entries(params).forEach(([key, value]) => {
      if (!isValidValue(value as string)) {
        // @ts-ignore
        delete params[key];
      }
    });

    return params;
  }

  constructor(finderOptions: Partial<IDashboard> | FilterQuery<IDashboard>) {
    this.finderOptions = this.composeFinder(finderOptions);
  }

  public async create(params: Partial<IDashboard>, session?: ClientSession) {
    try {
      const cus = new this.model({ ...params });
      await cus.save({ ...(session && { session }) });
      return cus;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async findOne(options: QueryOptions = {}): Promise<IDashboard | null> {
    const data = await this.model.findOne(
      { ...this.finderOptions },
      {},
      { lean: true, sort: { createdAt: -1 }, ...options }
    );
    return data;
  }

  public async count() {
    const docs = await Dashboard.countDocuments({
      ...this.finderOptions,
    }).catch((e) => {
      throw e;
    });
    return docs;
  }

  public async findAllPaginated({ sort, limit, page }: IPaginator) {
    const count = await this.count().catch((e) => {
      throw e;
    });
    const cus = await this.model
      .find({
        ...this.finderOptions,
      })
      .sort(sort)
      .limit(limit)
      .skip(limit * (page - 1))
      .catch((e) => {
        throw e;
      });

    return {
      data: cus,
      pagination: Pagionation.builder(cus, count, { page, limit }),
    };
  }

  public async findAll() {
    const cus = await this.model
      .find(
        {
          ...this.finderOptions,
        },
        {},
        { lean: true }
      )
      .catch((e: any) => {
        throw new Error(e);
      });

    return cus;
  }

  public async updateOne(params: Partial<IDashboard>, session?: ClientSession) {
    const cus = await this.model.findOneAndUpdate(
      { ...this.finderOptions },
      { ...params },
      { new: true, ...(session && { session }) }
    );

    return cus;
  }

  public async deleteOne(session?: ClientSession) {
    const cus = await this.model.deleteOne(
      { ...this.finderOptions },
      { ...(session && { session }) }
    );

    return cus;
  }

  public async logChanges(changeEvent: any) {
    const payload = changeEvent.fullDocument as IBetPlaced;
    await recordSummaryValue(payload);
  }
}

export default DashboardService;
