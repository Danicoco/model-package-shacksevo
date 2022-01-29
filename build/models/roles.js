"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    addedBy: {
        type: String,
    },
    permission: {
        type: mongoose_1.Types.ObjectId,
        ref: 'permissions',
    },
    adminId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'admins',
    }
}, {
    collection: 'roles',
    versionKey: false
});
RoleSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Roles', RoleSchema);
//# sourceMappingURL=roles.js.map