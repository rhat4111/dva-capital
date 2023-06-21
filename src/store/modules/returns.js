import { set, get } from "@/utils/vuex";
import ServiceFactory from "@/services/api/service-factory";

const moment = require("moment-timezone");
const FundService = ServiceFactory.get("funds");

const capitalizeName = name => {
  return name
    .toLowerCase()
    .split(" ")
    .map(word => {
      if (word === "dva") {
        return "DVA";
      }
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");
};

const formatName = name => {
  return capitalizeName(name)
    .replace(
      /Fondo De Inversión|Fondo De Inversion|Fondo Inversión|Fondo Inversion|Fondo de Inv./,
      "FI"
    )
    .replace(/Fondo Mutuo/, "FM");
};

const getDefaultState = () => ({
  returns: null,
  longTermReturns: null,
  loadingReturns: false,
  loadingLongTerm: false,
  errorOnReturnsLoad: false,
  errorOnLongTermLoad: false
});

const state = () => getDefaultState();

const getters = {
  returns: get("returns"),
  longTermReturns: get("longTermReturns"),
  loadingReturns: get("loadingReturns"),
  loadingLongTerm: get("loadingLongTerm"),
  errorOnReturnsLoad: get("errorOnReturnsLoad"),
  errorOnLongTermLoad: get("errorOnLongTermLoad")
};

const actions = {
  async fetchReturns({ commit, rootState }) {
    commit("LOADING_RETURNS", true);
    commit("SET_RETURNS", null);
    commit("SET_ERROR_ON_RETURNS_LOAD", false);
    try {
      const endDate = moment
        .tz(moment(), "America/Santiago")
        .subtract(1, "days")
        .format("YYYY-MM-DD");
      const returns = await FundService.getReturns(
        rootState.funds.fund.id,
        rootState.funds.fund.series.map(item => {
          return item.name;
        }),
        rootState.funds.fund.creationDate,
        endDate
      );
      const output = [];
      returns.data.quotas.forEach(item => {
        if (!item.currency) {
          return;
        }
        const exists = output.find(
          out =>
            out.fundId === item.fundId &&
            out.series === item.series &&
            out.category === item.category
        );
        if (exists) {
          exists.maximum = item.adjustedReturn;
          exists.data.push({
            x: `${item.date} CLT`,
            y: item.adjustedReturn
          });
        } else {
          output.push({
            fundId: item.fundId,
            series: item.series,
            category: item.category,
            maximum: item.adjustedReturn,
            name: `${formatName(item.fund.name)} - ${item.series}`,
            data: [
              {
                x: `${item.date} CLT`,
                y: item.adjustedReturn
              }
            ]
          });
        }
      });
      commit("SET_RETURNS", output);
    } catch (err) {
      console.log(err);
      commit("SET_ERROR_ON_RETURNS_LOAD", true);
    }
    commit("LOADING_RETURNS", false);
  },
  async fetchLongTerm({ commit, state, rootState }) {
    commit("LOADING_LONG_TERM", true);
    commit("SET_LONG_TERM", null);
    commit("SET_ERROR_ON_LONG_TERM_LOAD", false);
    try {
      const endDate = moment
        .tz(moment(), "America/Santiago")
        .subtract(1, "days")
        .format("YYYY-MM-DD");
      const returns = await FundService.getLongTerm(
        rootState.funds.fund.id,
        rootState.funds.fund.series.map(item => {
          return item.name;
        }),
        endDate
      );
      const output = [];
      returns.data.longTermQuotas.forEach(item => {
        if (!item.currency) {
          return;
        }
        const exists = output.find(
          out =>
            out.fundId === item.fundId &&
            out.series === item.series &&
            out.category === item.category
        );
        if (exists) {
          exists[item.longTermPeriod] = item.adjustedReturn;
        } else {
          const toPush = {
            fundId: item.fundId,
            series: item.series,
            category: item.category,
            name: `${formatName(item.fund.name)} - ${item.series}`,
            M1: null,
            M3: null,
            M6: null,
            Y1: null,
            Y2: null,
            Y3: null,
            Y5: null,
            Y7: null,
            Y10: null,
            maximum: null,
            0: null,
            equity: null
          };
          toPush[item.longTermPeriod] = item.adjustedReturn;
          output.push(toPush);
        }
      });
      output.forEach(item => {
        item.maximum = state.returns.find(
          search =>
            search.fundId === item.fundId &&
            search.series === item.series &&
            search.category === item.category
        ).maximum;
      });
      commit(
        "SET_LONG_TERM",
        output.sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    } catch (err) {
      console.log(err);
      commit("SET_ERROR_ON_LONG_TERM_LOAD", true);
    }
    commit("LOADING_LONG_TERM", false);
  }
};

const mutations = {
  LOADING_RETURNS: set("loadingReturns"),
  LOADING_LONG_TERM: set("loadingLongTerm"),
  SET_RETURNS: set("returns"),
  SET_LONG_TERM: set("longTermReturns"),
  SET_ERROR_ON_RETURNS_LOAD: set("errorOnReturnsLoad"),
  SET_ERROR_ON_LONG_TERM_LOAD: set("errorOnLongTermLoad")
};

export default {
  state,
  getters,
  actions,
  mutations
};
