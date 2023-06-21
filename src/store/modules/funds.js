import { set, get } from "@/utils/vuex";
import ServiceFactory from "@/services/api/service-factory";
import dayjs from "dayjs";

const FundService = ServiceFactory.get("funds");

const getDefaultState = () => ({
  funds: [],
  fund: null,
  loadingFunds: false,
  loadingFund: false,
  preloadedFundData: null,
  errorOnFundsLoad: false,
  errorOnFundLoad: false
});

const state = () => getDefaultState();

const getters = {
  funds: get("funds"),
  fund: get("fund"),
  loadingFunds: get("loadingFunds"),
  loadingFund: get("loadingFund"),
  preloadedFundData: get("preloadedFundData"),
  errorOnFundsLoad: get("errorOnFundsLoad"),
  errorOnFundLoad: get("errorOnFundLoad")
};

const actions = {
  fundById({ commit, state }, fundId) {
    let fundData = state.funds.find(fund => fund.id === parseInt(fundId));
    commit("SET_PRELOADED_FUND_DATA", fundData);
  },
  async fetchFunds({ commit }) {
    commit("LOADING_FUNDS", true);
    commit("SET_ERROR_ON_FUNDS_LOAD", false);
    try {
      const response = await FundService.getFunds();
      const fundsData = response.data.funds.map(fund => {
        let commissionValue;
        let taxBenefit = "Sin beneficio";
        let series;
        if (fund.fundId !== 9725) {
          series = fund.series.find(s => s.name === "A");
        } else {
          series = fund.series.find(s => s.name === "C");
        }
        commissionValue = series ? series.maximumCharge : "";

        let variableCharge = series.variableCharge;
        let variableChargeText = series.variableChargeText;

        if (series.tributaryBenefits && series.tributaryBenefits.find(t => t.name === "107 LIR")) {
          taxBenefit = "107 LIR";
        }
        let investmentHorizon = fund.investmentHorizon;
        return {
          id: fund.fundId,
          fundName: fund.name,
          description: fund.description,
          descriptionShort: fund.shortDescription,
          creationDate: fund.creationDate,
          investmentType: fund.incomeType,
          investmentSector: fund.investmentSector,
          commissionValue,
          currency: fund.currency,
          idealTerm: investmentHorizon,
          type: "Fondo de Inversión Rescatable",
          taxBenefit,
          color: fund.hexColor,
          variableCharge,
          variableChargeText,
          agf: "Ameris Capital AGF",
          team: "DVA Capital"
        };
      });
      commit("SET_FUNDS", fundsData);
    } catch (err) {
      console.error(err);
      commit("SET_ERROR_ON_FUNDS_LOAD", true);
    }
    commit("LOADING_FUNDS", false);
  },
  async fetchFund({ commit }, fundId) {
    commit("LOADING_FUND", true);
    commit("SET_ERROR_ON_FUND_LOAD", false);
    try {
      let report_date;
      console.log(dayjs().month());
      // if current month is january, we will remove one day for the bank holiday.
      if (dayjs().month() === 0)
        report_date = dayjs()
          .subtract(1, "month")
          .endOf("month")
          .subtract(1, "day")
          .format("YYYY-MM-DD");
      else
        report_date = dayjs()
          .subtract(1, "month")
          .endOf("month")
          .format("YYYY-MM-DD");

      let response = null;
      if (parseInt(fundId, 10) !== 9994) response = await FundService.getFund(fundId, report_date);
      else response = await FundService.fundWithoutPortfolio(fundId);
      const fundDetail = response.data.funds.map(fund => {
        let commissionValue;
        let taxBenefit = "Sin beneficio";
        let series = fund.series.find(s => s.name === "A");
        commissionValue = series ? series.maximumCharge : "";
        if (series.tributaryBenefits && series.tributaryBenefits.find(t => t.name === "107 LIR")) {
          taxBenefit = "107 LIR";
        }
        return {
          id: fund.fundId,
          fundName: fund.name,
          description: fund.description,
          descriptionShort: fund.shortDescription,
          investmentType: fund.incomeType,
          investmentSector: fund.investmentSector,
          commissionValue,
          currency: fund.currency,
          idealTerm: fund.investmentHorizon,
          type: "Fondo de Inversión Rescatable",
          taxBenefit,
          color: fund.hexColor,
          creationDate: fund.creationDate,
          portfolio: fund.portfolio,
          agf: "Ameris Capital AGF",
          team: "DVA Capital",
          series: fund.series
        };
      });
      commit("SET_FUND", fundDetail[0]);
    } catch (err) {
      console.error(err);
      commit("SET_ERROR_ON_FUND_LOAD", true);
    }
    commit("LOADING_FUND", false);
  }
};

const mutations = {
  LOADING_FUNDS: set("loadingFunds"),
  LOADING_FUND: set("loadingFund"),
  SET_FUNDS: set("funds"),
  SET_FUND: set("fund"),
  SET_PRELOADED_FUND_DATA: set("preloadedFundData"),
  SET_ERROR_ON_FUNDS_LOAD: set("errorOnFundsLoad"),
  SET_ERROR_ON_FUND_LOAD: set("errorOnFundLoad"),
  RESET_FUNDS_STATE: state => Object.assign(state, getDefaultState())
};

export default {
  state,
  getters,
  actions,
  mutations
};
