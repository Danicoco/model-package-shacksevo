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
class ErrorService {
    constructor(_id = "") {
        this._id = "";
        this.message = "";
        this.code = 0;
        this.errorPosition = "";
        this.createdAt = "";
        this.updatedAt = "";
        this._id = _id;
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const error = new models_1.ErrorMessage(Object.assign({}, params));
                yield error.save();
                return error;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findOne() {
        return __awaiter(this, void 0, void 0, function* () {
            const error = yield models_1.ErrorMessage
                .findOne()
                .where('_id')
                .equals(this._id)
                .catch((e) => { throw new Error(e); });
            return error;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield models_1.ErrorMessage
                .find()
                .catch((e) => { throw new Error(e); });
            return errors;
        });
    }
}
exports.default = ErrorService;
//# sourceMappingURL=ErrorService.js.map