"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ChatSchema = new mongoose_1.Schema({
    message: {
        type: String
    },
    userId: {
        type: String
    },
}, {
    collection: 'chats',
    versionKey: false
});
ChatSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Chats', ChatSchema);
//# sourceMappingURL=chat.js.map