import { Wallet } from '../models';

interface DefaultAttributes {
    _id: string;
    createdAt: string;
    updatedAt: string;
  }

interface IWallet extends DefaultAttributes {
    userId?: string,
    amount: string;
    lastTransactionDate: string;
  }


class WalletService {
    private userId = "";

    constructor(userId = '') {
        this.userId = userId;
    }

    public async create(params: Partial<IWallet>) {
        try {
            const wallet = new Wallet({ ...params });
            await wallet.save();
            return wallet;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async updateOne(params: Partial<IWallet>) {
        const wallet = await Wallet
            .findOneAndUpdate(
                { userId: this.userId },
                { ...params },
                { new: true }
            );
        return wallet;
    }
}

export default WalletService;