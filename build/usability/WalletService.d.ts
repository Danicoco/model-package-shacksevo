/// <reference types="mongoose" />
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
    create(params: Partial<IWallet>): Promise<import("mongoose").Document<unknown, any, import("..").Wallet> & import("..").Wallet & {
        _id: string;
    }>;
    updateOne(params: Partial<IWallet>): Promise<(import("mongoose").Document<unknown, any, import("..").Wallet> & import("..").Wallet & {
        _id: string;
    }) | null>;
}
export default WalletService;
//# sourceMappingURL=WalletService.d.ts.map