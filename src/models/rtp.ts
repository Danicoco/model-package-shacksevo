
import { Schema, model } from 'mongoose';
import { IRTP } from '../../types';


const IRTPRtpSchema: Schema = new Schema<IRTP>({
   value: {
    type: String,
    required: true,
   },
   gameType: {
    type: String,
    required: true,
   },
   partnerId: {
    type: String,
    required: true,
   },
}, {
    collection: 'rtps',
    versionKey: false
});

IRTPRtpSchema.set('timestamps', true);

export default model<IRTP>('IRTPRtps', IRTPRtpSchema);
