"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var FeedbackSchema = new mongoose_1.Schema({
    title: {
        type: String,
        trim: true,
    },
    type: String,
    message: String,
}, {
    collection: 'feedbacks',
    versionKey: false
});
FeedbackSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Feedback', FeedbackSchema);
//# sourceMappingURL=feedback.js.map