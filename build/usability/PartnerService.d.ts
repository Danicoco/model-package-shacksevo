import { IPartner } from '../../types';
declare class PartnerService {
    private _id;
    private email;
    constructor(_id?: string, email?: string);
    create(params: Partial<IPartner>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    findAllActive(): Promise<any>;
    deleteOne(): Promise<any>;
    updateOne(params: Partial<IPartner>): Promise<any>;
}
export default PartnerService;
//# sourceMappingURL=PartnerService.d.ts.map