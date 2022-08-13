import { Schema, model } from 'mongoose';
import { IChat } from '../../types';

const ChatSchema: Schema = new Schema<IChat>({
    message: {
        type: String
    },
    userId: {
        type: String
    },
    username: {
        type: String
    },
}, {
    collection: 'chats',
    versionKey: false
});

ChatSchema.set('timestamps', true);

export default model<IChat>('Chats', ChatSchema);
