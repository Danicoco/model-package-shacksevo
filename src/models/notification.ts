
import { Schema, model } from 'mongoose';
import { INotification } from '../../types';


const NotificationSchema: Schema = new Schema<INotification>({
    type: {
        type: "String",
    },
    meta: {
        type: "Map"
    }
}, {
    collection: 'Notifications',
    versionKey: false
});

NotificationSchema.set('timestamps', true);

export default model<INotification>('Notifications', NotificationSchema);
