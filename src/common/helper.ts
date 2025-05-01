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
    const dashboards = await new DashboardService(base).findAll();
    dashboards.forEach(async (dashboard) => {
      if (dashboard) {
        await Promise.all([
          dashboard.type === DASHBOARD_TYPE.REVENUE
            ? new DashboardService(base).updateOne({
                value: dashboard.value + Number(payload.amountPlaced),
                sidebetValue: dashboard.sidebetValue + Number(sidebetAmount),
              })
            : new DashboardService(base).create({
                ...base,
                value: payload.amountPlaced,
                sidebetValue: sidebetAmount,
                type: DASHBOARD_TYPE.REVENUE,
              }),
          dashboard.type === DASHBOARD_TYPE.CASHOUT
            ? new DashboardService(base).updateOne({
                value: dashboard.value + Number(payload.cashoutAmount),
              })
            : new DashboardService(base).create({
                ...base,
                value: payload.cashoutAmount,
                type: DASHBOARD_TYPE.CASHOUT,
              }),
          dashboard.type === DASHBOARD_TYPE.COUNT
            ? new DashboardService(base).updateOne({
                value: dashboard.value + 1,
              })
            : new DashboardService(base).create({ ...base, value: 1, type: DASHBOARD_TYPE.COUNT }),
          dashboard.type === DASHBOARD_TYPE.GAMELOST
            ? new DashboardService(base).updateOne({
                value:
                  payload.result === "lost"
                    ? dashboard.value + 1
                    : dashboard.value,
              })
            : new DashboardService(base).create({ ...base, value: 1, type: DASHBOARD_TYPE.GAMELOST }),
          dashboard.type === DASHBOARD_TYPE.GAMEWON
            ? new DashboardService(base).updateOne({
                value:
                  payload.result === "won"
                    ? dashboard.value + 1
                    : dashboard.value,
              })
            : new DashboardService(base).create({ ...base, value: 1, type: DASHBOARD_TYPE.GAMEWON }),
        ]);
      }
    });
}