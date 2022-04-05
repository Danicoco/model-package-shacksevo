import { IBetPlaced } from "../../types";
declare class BetPlacedService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IBetPlaced>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    findByType(type: string): Promise<any>;
    singleByType(params: Partial<IBetPlaced>): Promise<any>;
    deleteOne(): Promise<any>;
    updateOne(params: Partial<IBetPlaced>): Promise<any>;
}
export default BetPlacedService;
//# sourceMappingURL=BetService.d.ts.map