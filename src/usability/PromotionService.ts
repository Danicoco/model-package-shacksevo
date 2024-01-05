import { IPromotion } from "../../types";
import BaseRepository from "../common/BaseRepository";
import { Promotion } from "../models";

class PromotionService extends BaseRepository<IPromotion> {
  constructor(params: Partial<IPromotion>) {
    super(Promotion, params);
  }
}

export default PromotionService;
