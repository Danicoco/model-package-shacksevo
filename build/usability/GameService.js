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
class GameService {
    constructor(_id = "", name = "") {
        this._id = "";
        this.name = "";
        this.accessUrl = "";
        this.demoUrl = "";
        this.documentationUrl = "";
        this.integrationCount = 0;
        this.createdAt = "";
        this.updatedAt = "";
        this.name = name;
        this._id = _id;
    }
    createGame(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newGame = new models_1.Game(Object.assign({}, params));
                newGame.save();
                return newGame;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield models_1.Game
                .findOne()
                .where(this._id ? '_id' : 'name')
                .equals(this._id ? this._id : this.name)
                .catch((e) => {
                throw new Error(e);
            });
            return game;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield models_1.Game
                .find()
                .catch((e) => { throw new Error(e); });
            return games;
        });
    }
    updateOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield models_1.Game
                .findOneAndUpdate({ _id: this._id }, Object.assign({}, params), { new: true });
            return game;
        });
    }
    deleteOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield models_1.Game.deleteOne({ _id: this._id });
            return game;
        });
    }
}
exports.default = GameService;
//# sourceMappingURL=GameService.js.map