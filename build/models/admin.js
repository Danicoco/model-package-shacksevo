"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var AdminSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: mongoose_1.Types.ObjectId,
        ref: 'roles'
    },
    isActive: {
        type: Boolean,
        default: false,
    },
}, {
    collection: 'admins',
    versionKey: false
});
AdminSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Admins', AdminSchema);
//# sourceMappingURL=admin.js.map