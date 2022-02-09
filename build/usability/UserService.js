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
class UserService {
    constructor(_id = '', partnerId = '') {
        this._id = "";
        this.partnerId = "";
        this.partnerId = partnerId;
        this._id = _id;
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new models_1.User(Object.assign({}, params));
                yield user.save();
                return user;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models_1.User
                .findOne()
                .where('_id')
                .equals(this._id)
                .catch((e) => { throw new Error(e); });
            return user;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield models_1.User
                .find()
                .where(this.partnerId && "partnerId")
                .equals(this.partnerId && this.partnerId)
                .catch((e) => { throw new Error(e); });
            return users;
        });
    }
    updateOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models_1.User
                .findOneAndUpdate({ _id: this._id }, Object.assign({}, params), { new: true });
            return user;
        });
    }
    last() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models_1.User.find().sort({ _id: -1 }).limit(1);
            return user[0];
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map