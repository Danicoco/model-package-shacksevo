import { Schema, model } from 'mongoose';
import { IErrorMessages } from '../../types';


const ErrorMessagesSchema: Schema = new Schema<IErrorMessages>({
    message: String,
    code: Number,
    errorPosition: String,
}, {
    collection: 'errors',
    versionKey: false
});

ErrorMessagesSchema.set('timestamps', true);

export default model<IErrorMessages>('ErrorMessagess', ErrorMessagesSchema);
