"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordSummaryValue = void 0;
var date_fns_1 = require("date-fns");
var DashboardService_1 = __importDefault(require("../usability/DashboardService"));
var DASHBOARD_TYPE = {
    REVENUE: "revenue",
    CASHOUT: "cashout",
    COUNT: "count",
    GAMEWON: "game-won",
    GAMELOST: "game-lost",
};
var recordSummaryValue = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var sidebetAmount, date, base;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        sidebetAmount = ((_b = (_a = payload.selectedEventType[0]) === null || _a === void 0 ? void 0 : _a.sidebet) === null || _b === void 0 ? void 0 : _b.amount) ||
            ((_d = (_c = payload.selectedEventType[0]) === null || _c === void 0 ? void 0 : _c.sideBet) === null || _d === void 0 ? void 0 : _d.amount) ||
            0;
        date = (0, date_fns_1.startOfDay)(new Date());
        base = {
            date: date,
            gameType: payload.gameType,
            partnerId: String(payload.partnerId),
        };
        Object.values(DASHBOARD_TYPE).forEach(function (type) { return __awaiter(void 0, void 0, void 0, function () {
            var dashboard;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new DashboardService_1.default(base).findOne()];
                    case 1:
                        dashboard = _a.sent();
                        if (!(type === DASHBOARD_TYPE.CASHOUT)) return [3 /*break*/, 5];
                        if (!dashboard) return [3 /*break*/, 3];
                        return [4 /*yield*/, new DashboardService_1.default(base).updateOne({
                                value: dashboard.value + Number(payload.cashoutAmount),
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, new DashboardService_1.default(base).create(__assign(__assign({}, base), { value: payload.cashoutAmount, type: DASHBOARD_TYPE.CASHOUT }))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(type === DASHBOARD_TYPE.COUNT)) return [3 /*break*/, 9];
                        if (!dashboard) return [3 /*break*/, 7];
                        return [4 /*yield*/, new DashboardService_1.default(base).updateOne({
                                value: dashboard.value + 1,
                            })];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, new DashboardService_1.default(base).create(__assign(__assign({}, base), { value: 1, type: DASHBOARD_TYPE.COUNT }))];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        if (!(type === DASHBOARD_TYPE.GAMELOST)) return [3 /*break*/, 13];
                        if (!dashboard) return [3 /*break*/, 11];
                        return [4 /*yield*/, new DashboardService_1.default(base).updateOne({
                                value: payload.result === "lost" ? dashboard.value + 1 : dashboard.value,
                            })];
                    case 10:
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, new DashboardService_1.default(base).create(__assign(__assign({}, base), { value: 1, type: DASHBOARD_TYPE.GAMELOST }))];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13:
                        if (!(type === DASHBOARD_TYPE.GAMEWON)) return [3 /*break*/, 17];
                        if (!dashboard) return [3 /*break*/, 15];
                        return [4 /*yield*/, new DashboardService_1.default(base).updateOne({
                                value: payload.result === "won" ? dashboard.value + 1 : dashboard.value,
                            })];
                    case 14:
                        _a.sent();
                        return [3 /*break*/, 17];
                    case 15: return [4 /*yield*/, new DashboardService_1.default(base).create(__assign(__assign({}, base), { value: 1, type: DASHBOARD_TYPE.GAMEWON }))];
                    case 16:
                        _a.sent();
                        _a.label = 17;
                    case 17:
                        if (!(type === DASHBOARD_TYPE.REVENUE)) return [3 /*break*/, 21];
                        if (!dashboard) return [3 /*break*/, 19];
                        return [4 /*yield*/, new DashboardService_1.default(base).updateOne({
                                value: dashboard.value + Number(payload.amountPlaced),
                                sidebetValue: dashboard.sidebetValue + Number(sidebetAmount),
                            })];
                    case 18:
                        _a.sent();
                        return [3 /*break*/, 21];
                    case 19: return [4 /*yield*/, new DashboardService_1.default(base).create(__assign(__assign({}, base), { value: payload.amountPlaced, sidebetValue: sidebetAmount, type: DASHBOARD_TYPE.REVENUE }))];
                    case 20:
                        _a.sent();
                        _a.label = 21;
                    case 21: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.recordSummaryValue = recordSummaryValue;
//# sourceMappingURL=helper.js.map