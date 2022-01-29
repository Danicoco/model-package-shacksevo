
import { Schema, Types, model } from 'mongoose';
import { Wallet } from '../types';


const WalletSchema: Schema = new Schema<Wallet>({
    userId: {
        type: Types.ObjectId,
        ref: 'users',
    },
    amount: {
        type: String, // convert to number for any operation
        required: true,
    },
    lastTransactionDate: {
        type: String
    }
}, {
    collection: 'wallets',
    versionKey: false
});

WalletSchema.set('timestamps', true);

export default model<Wallet>('Wallets', WalletSchema);
