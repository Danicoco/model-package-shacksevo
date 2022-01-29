"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const databaseConnection = (url) => {
    (0, mongoose_1.connect)(url);
};
exports.default = databaseConnection;
//# sourceMappingURL=database.js.map