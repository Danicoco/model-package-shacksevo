"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var IRTPRtpSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)('IRTPRtps', IRTPRtpSchema);
//# sourceMappingURL=rtp.js.map