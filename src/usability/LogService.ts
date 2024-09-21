import { Log } from '../models';
import { IPaginator, ILog } from '../../types';
import Pagionation from './Pagination';

class LogService {
    private _id: string;
    private email: string;

    constructor(_id = "", email = "") {
        this._id = _id;
        this.email = email;
    }

    public async create(params: Partial<ILog>) {
        try {
            const data = new Log({ ...params });
            await data.save();
            return data
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async findOne() {
        const data = await Log
            .findOne()
            .where(this._id ? '_id': 'email')
            .equals(this._id ? this._id : this.email)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return data
    }

    public async findAll() {
        const results = await Log
            .find()
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return results;
    }

    public async findAllActive() {
        const data = await Log
            .find()
            .where('isActive')
            .equals(true)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return data;
    }

    public async deleteOne() {
        const data = await Log
            .deleteOne()
            .where('_id')
            .equals(this._id)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return data;
    }

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch((e) => {
          throw e;
        });
        const spins = await Log
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
        const docs = await Log
          .countDocuments({
            ...(condition && condition),
          })
          .catch((e) => {
            throw e;
          });
        return docs;
      }

    public async updateOne(params: Partial<ILog>) {
        const data = await Log
            .updateOne({ _id: this._id }, { ...params }, { new: true })
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return data;
    }
}

export default LogService;
