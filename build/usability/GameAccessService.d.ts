import { IGameAccess } from '../../types';
declare class GameAccessService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IGameAccess>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    deleteOne(): Promise<any>;
}
export default GameAccessService;
//# sourceMappingURL=GameAccessService.d.ts.map