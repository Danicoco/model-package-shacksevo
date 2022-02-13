import { Transaction } from '../models';
import { ITransaction} from '../../types';


class TransactionService {
    private userId: string | null;
    private _id: string | null;

    constructor(_id: string | null, userId: string | null) {
        this._id = _id;
        this.userId = userId;
    }

    public async create(params: Partial<ITransaction>) {
        try {
            const transaction = new Transaction({ ...params });
            await transaction.save();
            return transaction;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async findOne() {
        const transaction = await Transaction
            .findOne()
            .where(this._id ? '_id' : 'userId')
            .equals(this._id ? this._id : this.userId)
            .catch((e) => {
                throw new Error(e.message);
            });
        return transaction;
    }

    public async findAll() {
        const transactions = await Transaction
            .find()
            .catch((e) => {
                throw new Error(e.message)
            });
        return transactions;
    }
    
    public async deleteOne() {
        const transaction = await Transaction
            .findOneAndDelete()
            .where(this._id ? "_id": "userId")
            .equals(this._id ? this._id : this.userId)
            .catch((e) => {
                throw new Error(e.message);
            });

        return transaction;

    }
}

export default TransactionService;