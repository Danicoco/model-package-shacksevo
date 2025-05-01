import { Schema, model } from 'mongoose';
import { IDashboard } from '../../types';

const DashboardSchema: Schema = new Schema<IDashboard>({
    value: {
        type: Number,
        required: true,
    },
    sidebetValue: {
        type: Number,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    gameType: {
        type: String,
    },
    partnerId: {
        type: String,
    },
}, {
    collection: 'dashboard-record',
    versionKey: false
});

DashboardSchema.set('timestamps', true);
DashboardSchema.index({ gameType: 1, type: 1, date: 1  });

export default model<IDashboard>('Dashboard', DashboardSchema);
