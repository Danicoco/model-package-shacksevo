
import { Schema, Types, model } from 'mongoose';
import { ITransaction } from '../../types';


const TransactionSchema: Schema = new Schema<ITransaction>({
    userId: {
        type: Types.ObjectId,
        ref: 'users',
    },
    amount: {
        type: String, // convert to number for any operation
        required: true,
    },
    gameType: {
        type: String,
    },
    gameId: {
        type: Types.ObjectId,
        ref: 'games'
    },
    gameOutcome: {
        type: String,
    }
}, {
    collection: 'transactions',
    versionKey: false
});

TransactionSchema.set('timestamps', true);

export default model<ITransaction>('Transactions', TransactionSchema);
