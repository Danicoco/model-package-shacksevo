import { Schema, model } from 'mongoose';
import { IFeedback } from '../../types';

const FeedbackSchema: Schema = new Schema<IFeedback>({
   title: {
    type: String,
    trim: true,
   },
   type: String,
   message: String,
}, {
    collection: 'feedbacks',
    versionKey: false
});

FeedbackSchema.set('timestamps', true);

export default model<IFeedback>('Feedback', FeedbackSchema);
