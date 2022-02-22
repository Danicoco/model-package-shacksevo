import { ErrorMessage } from '../models';
import { IErrorMessages } from '../../types';

class ErrorService implements IErrorMessages {
    _id = "";

    message = "";

    code = 0;

    errorPosition = "";

    createdAt = "";

    updatedAt = "";

    constructor (_id = "") {
        this._id = _id;
    }

    public async create(params: Partial<IErrorMessages>) {
        try {
            const error = new ErrorMessage({ ...params });
            await error.save();
            return error;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const error = await ErrorMessage
            .findOne()
            .where('_id')
            .equals(this._id)
            .catch((e: any) => { throw new Error(e) });
        return error;
    }

    public async findAll() {
        const errors = await ErrorMessage
            .find()
            .catch((e: any) => { throw new Error(e) });
        return errors;

    }

}

export default ErrorService;