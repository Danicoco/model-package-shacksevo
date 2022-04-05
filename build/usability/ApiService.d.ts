import { IAPI } from '../../types';
declare class APIService {
    private partnerId;
    private publicKey;
    constructor(partnerId?: string, publicKey?: string);
    create(params: Partial<IAPI>): Promise<any>;
    findOne(): Promise<any>;
    findWithPublicKey(): Promise<any>;
    findAll(): Promise<any>;
    deleteOne(): Promise<any>;
}
export default APIService;
//# sourceMappingURL=ApiService.d.ts.map