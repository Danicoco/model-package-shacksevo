import { Notification } from '../models';
import { IPaginator, INotification } from '../../types';
import Pagionation from './Pagination';

class NotificationService {
    private _id: string;
    private email: string;

    constructor(_id = "", email = "") {
        this._id = _id;
        this.email = email;
    }

    public async create(params: Partial<INotification>) {
        try {
            const data = new Notification({ ...params });
            await data.save();
            return data
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async findOne() {
        const data = await Notification
            .findOne()
            .where(this._id ? '_id': 'email')
            .equals(this._id ? this._id : this.email)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return data
    }

    public async findAll() {
        const results = await Notification
            .find()
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return results;
    }

    public async findAllActive() {
        const data = await Notification
            .find()
            .where('isActive')
            .equals(true)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return data;
    }

    public async deleteOne() {
        const data = await Notification
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
        const spins = await Notification
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
        const docs = await Notification
          .countDocuments({
            ...(condition && condition),
          })
          .catch((e) => {
            throw e;
          });
        return docs;
      }

    public async updateOne(params: Partial<INotification>) {
        const data = await Notification
            .updateOne({ _id: this._id }, { ...params }, { new: true })
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return data;
    }
}

export default NotificationService;
