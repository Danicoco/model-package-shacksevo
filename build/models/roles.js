"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RoleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    addedBy: {
        type: String,
    },
    permissionId: {
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