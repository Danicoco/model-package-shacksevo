"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SpinRecordSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    cashoutAmount: Number,
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        ref: "partners",
        required: true,
    },
    outcome: {
        type: String,
        required: true,
    },
}, {
    collection: "spinRecords",
    versionKey: false,
});
SpinRecordSchema.set("timestamps", true);
exports.default = (0, mongoose_1.model)("SpinRecords", SpinRecordSchema);
//# sourceMappingURL=spinRecord.js.map