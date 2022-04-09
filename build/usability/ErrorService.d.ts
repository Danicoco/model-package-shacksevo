/// <reference types="mongoose" />
import { IErrorMessages } from '../../types';
declare class ErrorService implements IErrorMessages {
    _id: string;
    message: string;
    code: number;
    errorPosition: string;
    createdAt: string;
    updatedAt: string;
    constructor(_id?: string);
    create(params: Partial<IErrorMessages>): Promise<import("mongoose").Document<unknown, any, IErrorMessages> & IErrorMessages & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IErrorMessages> & IErrorMessages & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IErrorMessages> & IErrorMessages & {
        _id: string;
    })[]>;
}
export default ErrorService;
//# sourceMappingURL=ErrorService.d.ts.map