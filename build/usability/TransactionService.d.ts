/// <reference types="mongoose" />
import { ITransaction } from '../../types';
declare class TransactionService {
    private userId;
    private _id;
    constructor(_id: string | null, userId: string | null);
    create(params: Partial<ITransaction>): Promise<import("mongoose").Document<unknown, any, ITransaction> & ITransaction & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, ITransaction> & ITransaction & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, ITransaction> & ITransaction & {
        _id: string;
    })[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, any, ITransaction> & ITransaction & {
        _id: string;
    }) | null>;
}
export default TransactionService;
//# sourceMappingURL=TransactionService.d.ts.map