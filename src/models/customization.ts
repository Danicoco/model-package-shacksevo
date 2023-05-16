import { Schema, model } from 'mongoose';
import { ICustomization } from '../../types';

const CustomizationSchema: Schema = new Schema<ICustomization>({
    name: {
        type: String
    },
    value: {
        type: String
    },
    type: {
        type: String,
    },
    partnerId: {
        type: String,
    },
    game: {
        type: String,
    },
}, {
    collection: 'customizations',
    versionKey: false
});

CustomizationSchema.set('timestamps', true);

export default model<ICustomization>('Customization', CustomizationSchema);
