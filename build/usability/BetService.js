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
var models_1 = require("../models");
var Pagination_1 = __importDefault(require("./Pagination"));
var BetPlacedService = /** @class */ (function () {
    function BetPlacedService(_id, partnerId) {
        this._id = _id;
        this.partnerId = partnerId;
    }
    BetPlacedService.prototype.create = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaced, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        betPlaced = new models_1.BetPlaced(__assign({}, params));
                        return [4 /*yield*/, betPlaced.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, betPlaced];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BetPlacedService.prototype.findOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaced;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.findOne()
                            .where(this._id ? "_id" : "partnerId")
                            .equals(this._id ? this._id : this.partnerId)
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        betPlaced = _a.sent();
                        return [2 /*return*/, betPlaced];
                }
            });
        });
    };
    BetPlacedService.prototype.findAll = function (limit) {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaceds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.find()
                            .sort("-createdAt")
                            .where("partnerId")
                            .equals(this.partnerId)
                            .limit(limit)
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        betPlaceds = _a.sent();
                        return [2 /*return*/, betPlaceds];
                }
            });
        });
    };
    BetPlacedService.prototype.findAllGeneric = function (userId, username, gameRoundId, type) {
        if (userId === void 0) { userId = ""; }
        if (username === void 0) { username = ""; }
        if (gameRoundId === void 0) { gameRoundId = ""; }
        if (type === void 0) { type = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var bets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.find(__assign(__assign(__assign(__assign(__assign({}, (userId && { userId: userId })), (username && { username: username })), (type && { gameType: type })), (gameRoundId && { gameRoundId: gameRoundId })), (this.partnerId && { partnerId: this.partnerId })))
                            .sort("-createdAt")
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        bets = _a.sent();
                        return [2 /*return*/, bets];
                }
            });
        });
    };
    BetPlacedService.prototype.findAllByAdmin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaceds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.find()
                            .sort("-createdAt")
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        betPlaceds = _a.sent();
                        return [2 /*return*/, betPlaceds];
                }
            });
        });
    };
    BetPlacedService.prototype.findAllPaginated = function (_a) {
        var sort = _a.sort, limit = _a.limit, page = _a.page, condition = _a.condition;
        return __awaiter(this, void 0, void 0, function () {
            var count, bets;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.count(condition).catch(function (e) {
                            throw e;
                        })];
                    case 1:
                        count = _b.sent();
                        return [4 /*yield*/, models_1.BetPlaced.find(__assign({}, (condition && condition)))
                                .sort(sort)
                                .limit(limit)
                                .skip(limit * (page - 1))
                                .catch(function (e) {
                                throw e;
                            })];
                    case 2:
                        bets = _b.sent();
                        return [2 /*return*/, {
                                data: bets,
                                pagination: Pagination_1.default.builder(bets, count, { page: page, limit: limit }),
                            }];
                }
            });
        });
    };
    BetPlacedService.prototype.count = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            var docs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.countDocuments(__assign({}, (condition && condition))).catch(function (e) {
                            throw e;
                        })];
                    case 1:
                        docs = _a.sent();
                        return [2 /*return*/, docs];
                }
            });
        });
    };
    BetPlacedService.prototype.findByType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var bets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.find()
                            .where("gameType")
                            .equals(type)
                            .sort("-createdAt")
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        bets = _a.sent();
                        return [2 /*return*/, bets];
                }
            });
        });
    };
    BetPlacedService.prototype.singleByType = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaced;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.findOne()
                            .where("gameType")
                            .equals(params.gameType)
                            .where("userId")
                            .equals(params.userId)
                            .where("partnerId")
                            .equals(this.partnerId)
                            .where("username")
                            .equals(params.username)
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        betPlaced = _a.sent();
                        return [2 /*return*/, betPlaced];
                }
            });
        });
    };
    BetPlacedService.prototype.findAllUserBets = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var bets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.find()
                            .where("userId")
                            .sort("-createdAt")
                            .equals(params.userId)
                            .where("gameType")
                            .equals(params.gameType)
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        bets = _a.sent();
                        return [2 /*return*/, bets];
                }
            });
        });
    };
    BetPlacedService.prototype.deleteOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaced;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.findOneAndDelete()
                            .where(this._id ? "_id" : "partnerId")
                            .equals(this._id ? this._id : this.partnerId)
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        betPlaced = _a.sent();
                        return [2 /*return*/, betPlaced];
                }
            });
        });
    };
    BetPlacedService.prototype.deleteMany = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaced;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.deleteMany(__assign(__assign(__assign({}, (condition && condition)), (this._id && { _id: this._id })), (this.partnerId && { partnerId: this.partnerId })))
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        betPlaced = _a.sent();
                        return [2 /*return*/, betPlaced];
                }
            });
        });
    };
    BetPlacedService.prototype.updateOne = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaced;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.findOneAndUpdate({ _id: this._id }, __assign({}, params), { new: true }).catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        betPlaced = _a.sent();
                        return [2 /*return*/, betPlaced];
                }
            });
        });
    };
    BetPlacedService.prototype.updateAll = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betPlaced;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.BetPlaced.updateMany({ gameRoundId: this.partnerId }, __assign({}, params), { new: true }).catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        betPlaced = _a.sent();
                        return [2 /*return*/, betPlaced];
                }
            });
        });
    };
    return BetPlacedService;
}());
exports.default = BetPlacedService;
//# sourceMappingURL=BetService.js.map