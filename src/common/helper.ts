import { startOfDay } from "date-fns";
import { IBetPlaced } from "../../types";
import DashboardService from "../usability/DashboardService";

const DASHBOARD_TYPE = {
  REVENUE: "revenue",
  CASHOUT: "cashout",
  COUNT: "count",
  GAMEWON: "game-won",
  GAMELOST: "game-lost",
};

export const recordSummaryValue = async (payload: IBetPlaced) => {
  const sidebetAmount =
    payload.selectedEventType[0]?.sidebet?.amount ||
    payload.selectedEventType[0]?.sideBet?.amount ||
    0;
  const date = startOfDay(new Date());
  const base = {
    date,
    gameType: payload.gameType,
    partnerId: String(payload.partnerId),
  };
  Object.values(DASHBOARD_TYPE).forEach(async (type) => {
    const dashboard = await new DashboardService(base).findOne();
    if (type === DASHBOARD_TYPE.CASHOUT && payload.cashoutAmount) {
      if (dashboard) {
        await new DashboardService(base).updateOne({
          value: dashboard.value + Number(payload.cashoutAmount),
        });
      } else {
        await new DashboardService(base).create({
          ...base,
          value: payload.cashoutAmount,
          type: DASHBOARD_TYPE.CASHOUT,
        });
      }
    }

    if (type === DASHBOARD_TYPE.COUNT) {
      if (dashboard) {
        await new DashboardService(base).updateOne({
          value: dashboard.value + 1,
        });
      } else {
        await new DashboardService(base).create({
          ...base,
          value: 1,
          type: DASHBOARD_TYPE.COUNT,
        });
      }
    }

    if (type === DASHBOARD_TYPE.GAMELOST) {
      if (dashboard) {
        await new DashboardService(base).updateOne({
          value:
            payload.result === "lost" ? dashboard.value + 1 : dashboard.value,
        });
      } else {
        await new DashboardService(base).create({
          ...base,
          value: 1,
          type: DASHBOARD_TYPE.GAMELOST,
        });
      }
    }

    if (type === DASHBOARD_TYPE.GAMEWON && payload.result === "won") {
      if (dashboard) {
        await new DashboardService(base).updateOne({
          value:
            payload.result === "won" ? dashboard.value + 1 : dashboard.value,
        });
      } else {
        await new DashboardService(base).create({
          ...base,
          value: 1,
          type: DASHBOARD_TYPE.GAMEWON,
        });
      }
    }

    if (type === DASHBOARD_TYPE.REVENUE) {
      if (dashboard) {
        await new DashboardService(base).updateOne({
          value: dashboard.value + Number(payload.amountPlaced),
          sidebetValue: dashboard.sidebetValue + Number(sidebetAmount),
        });
      } else {
        await new DashboardService(base).create({
          ...base,
          value: payload.amountPlaced,
          sidebetValue: sidebetAmount,
          type: DASHBOARD_TYPE.REVENUE,
        });
      }
    }
  });
};
