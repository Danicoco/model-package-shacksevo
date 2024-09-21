"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var NotificationSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)('Notifications', NotificationSchema);
//# sourceMappingURL=notification.js.map