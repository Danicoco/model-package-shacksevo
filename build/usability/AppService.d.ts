import { IApp } from '../../types';
declare class AppService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IApp>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    deleteOne(): Promise<any>;
}
export default AppService;
//# sourceMappingURL=AppService.d.ts.map