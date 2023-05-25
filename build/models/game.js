"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var GameSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    accessUrl: {
        type: String,
        required: true,
    },
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'partners'
    },
    code: {
        type: String,
    },
    demoUrl: {
        type: String,
        required: true,
    },
    documentationUrl: {
        type: String,
    },
    assets: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    integrationCount: {
        type: Number,
        default: 0,
        required: true,
    }
}, {
    collection: 'games',
    versionKey: false
});
GameSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Games', GameSchema);
//# sourceMappingURL=game.js.map