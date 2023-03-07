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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var Pagination_1 = __importDefault(require("./Pagination"));
var EveryMatrixService = /** @class */ (function () {
    function EveryMatrixService(id, userId, username, partnerId) {
        if (id === void 0) { id = ""; }
        if (userId === void 0) { userId = ""; }
        if (username === void 0) { username = ""; }
        if (partnerId === void 0) { partnerId = ""; }
        this.model = models_1.EveryMatrix;
        this.id = id;
        this.userId = userId;
        this.username = username;
        this.partnerId = partnerId;
    }
    EveryMatrixService.prototype.create = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var everyMatrix;
            return __generator(this, function (_a) {
                try {
                    everyMatrix = new this.model(__assign({}, params)).save();
                    return [2 /*return*/, everyMatrix];
                }
                catch (error) {
                    throw new Error(error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    EveryMatrixService.prototype.findOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var everyMatrix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.findOne(__assign(__assign(__assign(__assign({}, (this.id && { _id: this.id })), (this.partnerId && { partnerId: this.partnerId })), (this.userId && { userId: this.userId })), (this.username && { userId: this.username }))).catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        everyMatrix = _a.sent();
                        return [2 /*return*/, everyMatrix];
                }
            });
        });
    };
    EveryMatrixService.prototype.findAll = function (limit) {
        return __awaiter(this, void 0, void 0, function () {
            var everyMatrix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.find()
                            .sort("-createdAt")
                            .where("partnerId")
                            .equals(this.partnerId)
                            .limit(limit)
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        everyMatrix = _a.sent();
                        return [2 /*return*/, everyMatrix];
                }
            });
        });
    };
    EveryMatrixService.prototype.findAllGeneric = function (userId, username) {
        if (userId === void 0) { userId = ""; }
        if (username === void 0) { username = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var bets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.find(__assign(__assign(__assign({}, (userId && { userId: userId })), (username && { username: username })), (this.partnerId && { partnerId: this.partnerId })))
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
    EveryMatrixService.prototype.findAllByAdmin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var everyMatrix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.find()
                            .sort("-createdAt")
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        everyMatrix = _a.sent();
                        return [2 /*return*/, everyMatrix];
                }
            });
        });
    };
    EveryMatrixService.prototype.findAllPaginated = function (_a) {
        var sort = _a.sort, limit = _a.limit, page = _a.page, condition = _a.condition;
        return __awaiter(this, void 0, void 0, function () {
            var count, everyMatrix;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.count(condition).catch(function (e) {
                            throw e;
                        })];
                    case 1:
                        count = _b.sent();
                        return [4 /*yield*/, models_1.EveryMatrix.find(__assign({}, (condition && condition)))
                                .sort(sort)
                                .limit(limit)
                                .skip(limit * (page - 1))
                                .catch(function (e) {
                                throw e;
                            })];
                    case 2:
                        everyMatrix = _b.sent();
                        return [2 /*return*/, {
                                data: everyMatrix,
                                pagination: Pagination_1.default.builder(everyMatrix, count, { page: page, limit: limit }),
                            }];
                }
            });
        });
    };
    EveryMatrixService.prototype.count = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            var docs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.countDocuments(__assign({}, (condition && condition))).catch(function (e) {
                            throw e;
                        })];
                    case 1:
                        docs = _a.sent();
                        return [2 /*return*/, docs];
                }
            });
        });
    };
    EveryMatrixService.prototype.findByType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var everyMatrix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.find()
                            .where("gameType")
                            .equals(type)
                            .sort("-createdAt")
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        everyMatrix = _a.sent();
                        return [2 /*return*/, everyMatrix];
                }
            });
        });
    };
    EveryMatrixService.prototype.deleteOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var everyMatrix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.findOneAndDelete()
                            .where(this.id ? "_id" : "partnerId")
                            .equals(this.id ? this.id : this.partnerId)
                            .catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        everyMatrix = _a.sent();
                        return [2 /*return*/, everyMatrix];
                }
            });
        });
    };
    EveryMatrixService.prototype.updateOne = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var everyMatrix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.findOneAndUpdate({ _id: this.id }, __assign({}, params), { new: true }).catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        everyMatrix = _a.sent();
                        return [2 /*return*/, everyMatrix];
                }
            });
        });
    };
    EveryMatrixService.prototype.updateAll = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var everyMatrix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EveryMatrix.updateMany({ gameRoundId: this.partnerId }, __assign({}, params), { new: true }).catch(function (e) {
                            throw new Error(e.message);
                        })];
                    case 1:
                        everyMatrix = _a.sent();
                        return [2 /*return*/, everyMatrix];
                }
            });
        });
    };
    return EveryMatrixService;
}());
exports.default = EveryMatrixService;
//# sourceMappingURL=EveryMatrix.js.map