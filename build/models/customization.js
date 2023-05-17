"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CustomizationSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    value: {
        type: mongoose_1.Schema.Types.Mixed
    },
    type: {
        type: String,
    },
    partnerId: {
        type: String,
    },
    game: {
        type: String,
    },
}, {
    collection: 'customizations',
    versionKey: false
});
CustomizationSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Customization', CustomizationSchema);
//# sourceMappingURL=customization.js.map