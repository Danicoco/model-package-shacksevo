"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var LogSchema = new mongoose_1.Schema({
    type: {
        type: "String",
    },
    meta: {
        type: "Map"
    }
}, {
    collection: 'Logs',
    versionKey: false
});
LogSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Logs', LogSchema);
//# sourceMappingURL=log.js.map