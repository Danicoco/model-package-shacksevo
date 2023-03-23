"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
    },
    otp: String,
    gameType: {
        type: String,
    },
    username: String,
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        ref: "partners",
    },
    partnerName: {
        type: String,
    },
    partnerUserId: {
        type: String,
    },
    lastPlayed: String,
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    collection: "users",
    versionKey: false,
});
UserSchema.set("timestamps", true);
exports.default = (0, mongoose_1.model)("Users", UserSchema);
//# sourceMappingURL=user.js.map