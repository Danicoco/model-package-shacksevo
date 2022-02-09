"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.Transaction = exports.Permission = exports.GameAccess = exports.GameRound = exports.Partner = exports.Wallet = exports.Role = exports.User = exports.Game = exports.APP = exports.API = exports.Admin = void 0;
var admin_1 = __importDefault(require("./admin"));
exports.Admin = admin_1.default;
var api_1 = __importDefault(require("./api"));
exports.API = api_1.default;
var app_1 = __importDefault(require("./app"));
exports.APP = app_1.default;
var game_1 = __importDefault(require("./game"));
exports.Game = game_1.default;
var user_1 = __importDefault(require("./user"));
exports.User = user_1.default;
var roles_1 = __importDefault(require("./roles"));
exports.Role = roles_1.default;
var wallet_1 = __importDefault(require("./wallet"));
exports.Wallet = wallet_1.default;
var partner_1 = __importDefault(require("./partner"));
exports.Partner = partner_1.default;
var error_1 = __importDefault(require("./error"));
exports.ErrorMessage = error_1.default;
var gameRound_1 = __importDefault(require("./gameRound"));
exports.GameRound = gameRound_1.default;
var gameAccess_1 = __importDefault(require("./gameAccess"));
exports.GameAccess = gameAccess_1.default;
var permission_1 = __importDefault(require("./permission"));
exports.Permission = permission_1.default;
var transaction_1 = __importDefault(require("./transaction"));
exports.Transaction = transaction_1.default;
//# sourceMappingURL=index.js.map