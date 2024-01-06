/** @format */

import { ClientSession, Model } from "mongoose"
import { IPaginator } from "../../types"
import Pagionation from "../usability/Pagination"

class BaseRepository<T> {
    protected model = Model

    private finderOptions: Partial<T>

    private composeFinder(params: Partial<T>) {
        const isValidValue = (value: string) =>
            value !== "" && value !== undefined

        Object.entries(params).forEach(([key, value]) => {
            if (!isValidValue(value as string)) {
                // @ts-ignore
                delete params[key]
            }
        })

        return params
    }

    constructor(model: Model<T>, finderOptions: Partial<T>) {
        this.model = model
        this.finderOptions = this.composeFinder(finderOptions)
    }

    public async create(params: T, session?: ClientSession): Promise<T> {
        const user = await new this.model(params).save({
            ...(session && { session }),
        })
        return user
    }

    public async bulkCreate(
        params: Array<T>,
        session?: ClientSession
    ): Promise<T[]> {
        const user = await this.model.insertMany(params, {
            ...(session && { session }),
        })
        return user
    }

    public async update(
        param: Partial<T>,
        session?: ClientSession
    ): Promise<T> {
        const user = await this.model.findOneAndUpdate(
            this.finderOptions,
            param,
            {
                new: true,
                ...(session && { session }),
            }
        )
        return user
    }

    public async updateMany(param: Partial<T>, session?: ClientSession) {
        const user = await this.model.updateMany(this.finderOptions, param, {
            new: true,
            ...(session && { session }),
        })
        return user
    }

    public async findOne(): Promise<T | null> {
        const user = await this.model.findOne(
            { ...this.finderOptions, isActive: true },
            {},
            { lean: true, sort: { createdAt: -1 } }
        )
        return user
    }

    public async deleteOne(session?: ClientSession): Promise<T | null> {
        const user = await this.model.findOneAndUpdate(
            this.finderOptions,
            { deletedAt: new Date().toISOString() },
            {
                ...(session && { session }),
            }
        )
        return user
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

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch((e) => {
          throw e;
        });
        const data: T[] = await this.model
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
          data,
          pagination: Pagionation.builder(data, count, { page, limit }),
        };
      }
}

export default BaseRepository
