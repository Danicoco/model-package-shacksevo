import { ITransaction } from '../../types';
declare class TransactionService {
    private userId;
    private _id;
    constructor(_id: string | null, userId: string | null);
    create(params: Partial<ITransaction>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    deleteOne(): Promise<any>;
}
export default TransactionService;
//# sourceMappingURL=TransactionService.d.ts.map