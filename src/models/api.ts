import { Schema, Types, model } from 'mongoose';
import { IAPI } from '../../types';

const APISchema: Schema = new Schema<IAPI>({
    publicKey: {
        type: String,
        required: true,
    },
    secretKey: {
        type: String,
        required: true,
    },
    hashedKey: {
        type: String,
    },
    partnerId: {
        type: Types.ObjectId,
    },
    associatedGames: {
        type: Number
    },
    numOfTimesGenerated: {
        type: Number
    }
}, {
    collection: 'apis',
    versionKey: false
});

APISchema.set('timestamps', true);

export default model <IAPI> ('APIs', APISchema);
