"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class GameRoundService {
    constructor(_id = '', partnerId = '') {
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
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const round = new models_1.GameRound(Object.assign({}, params));
                yield round.save();
                return round;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const round = yield models_1.GameRound
                .findOne()
                .where('_id')
                .equals(this._id)
                .catch((e) => { throw new Error(e); });
            return round;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const rounds = yield models_1.GameRound
                .find()
                .where(this.partnerId && "partnerId")
                .equals(this.partnerId && this.partnerId)
                .catch((e) => { throw new Error(e); });
            return rounds;
        });
    }
    updateOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const round = yield models_1.GameRound
                .findOneAndUpdate({ _id: this._id }, Object.assign({}, params), { new: true });
            return round;
        });
    }
    last() {
        return __awaiter(this, void 0, void 0, function* () {
            const round = yield models_1.GameRound
                .findOne({
                $query: {},
                $orderby: { $natural: -1 }
            });
            return round;
        });
    }
}
exports.default = GameRoundService;
//# sourceMappingURL=GameRound.js.map