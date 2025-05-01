"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DashboardSchema = new mongoose_1.Schema({
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
DashboardSchema.index({ gameType: 1, type: 1, date: 1 });
exports.default = (0, mongoose_1.model)('Dashboard', DashboardSchema);
//# sourceMappingURL=dashboard.js.map