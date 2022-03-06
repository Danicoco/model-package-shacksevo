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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var GameRoundService = /** @class */ (function () {
    function GameRoundService(_id, partnerId, year) {
        if (_id === void 0) { _id = ''; }
        if (partnerId === void 0) { partnerId = ''; }
        if (year === void 0) { year = ''; }
        this._id = "";
        this.eventId = "";
        this.gameOdd = "";
        this.createdAt = "";
        this.updatedAt = "";
        this.eventTypes = [];
        this.eventRanges = [];
        this.partnerName = "";
        this.algorithmUsed = "";
        this.partnerId = "";
        this.numberOfBetPlaced = 0;
        this.partnerId = partnerId;
        this._id = _id;
        this.year = year;
    }
    GameRoundService.prototype.create = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var round, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        round = new models_1.GameRound(__assign({}, params));
                        return [4 /*yield*/, round.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, round];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GameRoundService.prototype.findOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var round;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound
                            .findOne()
                            .where('_id')
                            .equals(this._id)
                            .catch(function (e) { throw new Error(e); })];
                    case 1:
                        round = _a.sent();
                        return [2 /*return*/, round];
                }
            });
        });
    };
    GameRoundService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rounds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound
                            .find()
                            .where(this.partnerId && "partnerId")
                            .equals(this.partnerId && this.partnerId)
                            .catch(function (e) { throw new Error(e); })];
                    case 1:
                        rounds = _a.sent();
                        return [2 /*return*/, rounds];
                }
            });
        });
    };
    GameRoundService.prototype.findAllAdmin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rounds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound
                            .find()
                            .catch(function (e) { throw new Error(e); })];
                    case 1:
                        rounds = _a.sent();
                        return [2 /*return*/, rounds];
                }
            });
        });
    };
    GameRoundService.prototype.findByYear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rounds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound
                            .find()
                            .where('partnerId')
                            .equals(this.partnerId)
                            .where('season')
                            .equals(Number(this.year))
                            .catch(function (e) { throw new Error(e); })];
                    case 1:
                        rounds = _a.sent();
                        return [2 /*return*/, rounds];
                }
            });
        });
    };
    GameRoundService.prototype.updateOne = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var round;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound
                            .findOneAndUpdate({ _id: this._id }, __assign({}, params), { new: true })];
                    case 1:
                        round = _a.sent();
                        return [2 /*return*/, round];
                }
            });
        });
    };
    GameRoundService.prototype.last = function () {
        return __awaiter(this, void 0, void 0, function () {
            var round;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound.find().sort({ _id: -1 }).limit(1)];
                    case 1:
                        round = _a.sent();
                        return [2 /*return*/, round];
                }
            });
        });
    };
    GameRoundService.prototype.findOneFirst = function () {
        return __awaiter(this, void 0, void 0, function () {
            var round;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound
                            .findOne()
                            .where('partnerId')
                            .equals(this.partnerId)
                            .catch(function (e) { throw new Error(e); })];
                    case 1:
                        round = _a.sent();
                        return [2 /*return*/, round];
                }
            });
        });
    };
    GameRoundService.prototype.findByIsPlayed = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var round;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound
                            .findOne()
                            .where('partnerId')
                            .equals(this.partnerId)
                            .where('isPlayed')
                            .equals(params)
                            .catch(function (e) { throw new Error(e); })];
                    case 1:
                        round = _a.sent();
                        return [2 /*return*/, round];
                }
            });
        });
    };
    GameRoundService.prototype.deleteAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.GameRound.deleteOne({ _id: this._id }).catch(function (e) { throw new Error(e); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return GameRoundService;
}());
exports.default = GameRoundService;
//# sourceMappingURL=GameRound.js.map