interface DefaultAttributes {
    _id: string;
    createdAt: string;
    updatedAt: string;
}
interface IWallet extends DefaultAttributes {
    userId?: string;
    amount: string;
    lastTransactionDate: string;
}
declare class WalletService {
    private userId;
    constructor(userId?: string);
    create(params: Partial<IWallet>): Promise<any>;
    updateOne(params: Partial<IWallet>): Promise<any>;
}
export default WalletService;
//# sourceMappingURL=WalletService.d.ts.map