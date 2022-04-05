import { IErrorMessages } from '../../types';
declare class ErrorService implements IErrorMessages {
    _id: string;
    message: string;
    code: number;
    errorPosition: string;
    createdAt: string;
    updatedAt: string;
    constructor(_id?: string);
    create(params: Partial<IErrorMessages>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
}
export default ErrorService;
//# sourceMappingURL=ErrorService.d.ts.map