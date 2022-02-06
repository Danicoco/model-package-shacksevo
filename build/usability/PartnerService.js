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
class PartnerService {
    constructor(_id) {
        this._id = _id;
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const partner = new models_1.Partner(Object.assign({}, params));
                yield partner.save();
                return partner;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    findOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield models_1.Partner
                .findOne()
                .where('_id')
                .equals(this._id)
                .catch((e) => {
                throw new Error(e.message);
            });
            return partner;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield models_1.Partner
                .find()
                .catch((e) => {
                throw new Error(e.message);
            });
            return partner;
        });
    }
    findAllActive() {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield models_1.Partner
                .find()
                .where('isActive')
                .equals(true)
                .catch((e) => {
                throw new Error(e.message);
            });
            return partner;
        });
    }
    deleteOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield models_1.Partner
                .deleteOne()
                .where('_id')
                .equals(this._id)
                .catch((e) => {
                throw new Error(e.message);
            });
            return partner;
        });
    }
    updateOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield models_1.Partner
                .updateOne({ _id: this._id }, Object.assign({}, params), { new: true })
                .catch((e) => {
                throw new Error(e.message);
            });
            return partner;
        });
    }
}
exports.default = PartnerService;
//# sourceMappingURL=PartnerService.js.map