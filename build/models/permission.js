"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PermissionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    addAdmin: Boolean,
    getAdmin: Boolean,
    deleteAdmin: Boolean,
    updateAdmin: Boolean,
    addPartner: Boolean,
    getPartner: Boolean,
    deletePartner: Boolean,
    updatePartner: Boolean,
    addGame: Boolean,
    getGame: Boolean,
    deleteGame: Boolean,
    updateGame: Boolean,
}, {
    collection: "permissions",
    versionKey: false,
});
PermissionSchema.set("timestamps", true);
exports.default = (0, mongoose_1.model)("Permissions", PermissionSchema);
//# sourceMappingURL=permission.js.map