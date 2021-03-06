"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ErrorMessagesSchema = new mongoose_1.Schema({
    message: String,
    code: Number,
    errorPosition: String,
}, {
    collection: 'errors',
    versionKey: false
});
ErrorMessagesSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('ErrorMessagess', ErrorMessagesSchema);
//# sourceMappingURL=error.js.map