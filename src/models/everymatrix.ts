import { Schema, Types, model } from 'mongoose';
import { IEveryMatrix } from '../../types';

const EveryMatrixSchema: Schema = new Schema<IEveryMatrix>({
    partnerId: {
        type: Types.ObjectId,
    },
    token: {
        type: String
    },
    gameId: {
        type: String
    },
    isFun: {
        type: Boolean
    },
    balance: {
        type: Number
    },
    currency: {
        type: String
    },
    username: {
        type: String
    },
    userId: {
        type: String
    },
    meta: {
        type: Object
    },
}, {
    collection: 'everyMatrix',
    versionKey: false
});

EveryMatrixSchema.set('timestamps', true);

export default model <IEveryMatrix> ('EveryMatrix', EveryMatrixSchema);
