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
class APIService {
    constructor(_id, partnerId) {
        this._id = _id;
        this.partnerId = partnerId;
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const api = new models_1.API(Object.assign({}, params));
                yield api.save();
                return api;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    findOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const api = yield models_1.API
                .findOne()
                .where(this._id ? '_id' : 'partnerId')
                .equals(this._id ? this._id : this.partnerId)
                .catch((e) => {
                throw new Error(e.message);
            });
            return api;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const apis = yield models_1.API
                .find()
                .catch((e) => {
                throw new Error(e.message);
            });
            return apis;
        });
    }
    deleteOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const api = yield models_1.API
                .findOneAndDelete()
                .where(this._id ? "_id" : "partnerId")
                .equals(this._id ? this._id : this.partnerId)
                .catch((e) => {
                throw new Error(e.message);
            });
            return api;
        });
    }
}
exports.default = APIService;
//# sourceMappingURL=ApiService.js.map