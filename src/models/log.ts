
import { Schema, model } from 'mongoose';
import { ILog } from '../../types';


const LogSchema: Schema = new Schema<ILog>({
    type: {
        type: "String",
    },
    meta: {
        type: "Map"
    }
}, {
    collection: 'Logs',
    versionKey: false
});

LogSchema.set('timestamps', true);

export default model<ILog>('Logs', LogSchema);
