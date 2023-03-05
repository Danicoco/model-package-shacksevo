import { Partner } from '../models';
import { IPaginator, IPartner } from '../../types';
import Pagionation from './Pagination';

class PartnerService {
    private _id: string;
    private email: string;

    constructor(_id = "", email = "") {
        this._id = _id;
        this.email = email;
    }

    public async create(params: Partial<IPartner>) {
        try {
            const partner = new Partner({ ...params });
            await partner.save();
            return this.getPartner(partner);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async findOne() {
        const partner = await Partner
            .findOne()
            .where(this._id ? '_id': 'email')
            .equals(this._id ? this._id : this.email)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner ? this.getPartner(partner) : partner;
    }

    public async findAll() {
        const partner = await Partner
            .find()
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async findAllActive() {
        const partner = await Partner
            .find()
            .where('isActive')
            .equals(true)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async deleteOne() {
        const partner = await Partner
            .deleteOne()
            .where('_id')
            .equals(this._id)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch((e) => {
          throw e;
        });
        const spins = await Partner
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
        const docs = await Partner
          .countDocuments({
            ...(condition && condition),
          })
          .catch((e) => {
            throw e;
          });
        return docs;
      }

    public async updateOne(params: Partial<IPartner>) {
        const partner = await Partner
            .updateOne({ _id: this._id }, { ...params }, { new: true })
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async getPartner(p: IPartner) {
        const removeFields = ['hashedId', 'updatedAt'];
        removeFields.map((rf: string) => {
            // @ts-ignore
            delete p[rf];
        });
        return p;
    }
}

export default PartnerService;
