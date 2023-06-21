import gql from "graphql-tag";
import GraphQLService from "@/services/api/graphql-service";

const allowedSeries = {
  9118: ["A", "C"],
  9395: ["A", "C"],
  9725: ["C"],
  9937: ["A"],
  9958: ["A"],
  9994: ["A", "X"],
  10074: ["A", "C"]
};

const selectedCurrency = {
  9118: "USD",
  9395: "CLP",
  9725: "USD",
  9937: "USD",
  9958: "USD",
  9994: "CLP",
  10074: "CLP"
};

export default {
  getFunds() {
    // add all the params when added to the graphql api
    // 9937	AMERIS DVA MEDTECH FUND FONDO DE INVERSIÓN
    // 9118	AMERIS DVA MULTIAXIS FONDO DE INVERSIÓN
    // 9395	AMERIS DVA ALL CAP CHILE FONDO DE INVERSIÓN
    // 9725	AMERIS DVA SILICON FUND FONDO DE INVERSIÓN
    // 9958 AMERIS DEUDA USA
    // 9994 AMERIS LIQUIDEZ
    const fundIds = [9118, 9395, 9725, 9937, 9958, 9994, 10074];
    return GraphQLService.graph.query({
      query: gql`
        query($fundIds: [Int!]) {
          funds(fundIds: $fundIds) {
            fundId
            investmentSector
            description
            shortDescription
            name
            creationDate
            investmentHorizon
            hexColor
            incomeType
            currency
            series {
              name
              symbol
              maximumCharge
              variableCharge
              variableChargeText
              tributaryBenefits {
                name
              }
            }
          }
        }
      `,
      variables: {
        fundIds
      }
    });
  },
  getFund(fundId, report_date) {
    const fundIds = [parseInt(fundId)];
    const dateFilter = {
      specific: report_date
    };
    return GraphQLService.graph.query({
      query: gql`
        query($fundIds: [Int!], $dateFilter: DateFilter) {
          funds(fundIds: $fundIds) {
            fundId
            investmentSector
            description
            shortDescription
            name
            creationDate
            investmentHorizon
            hexColor
            incomeType
            currency
            shortDescription
            series {
              name
              symbol
              usdSymbol
              segmentRequirements
              variableCharge
              variableChargeText
              maximumCharge
              tributaryBenefits {
                name
                description
              }
            }
            portfolio(currency: "USD", dateFilter: $dateFilter) {
              investmentsQuantity
              totalCashAmount
              totalAssetsCashAmount
              currency
              date
              fund {
                name
              }
              investments {
                symbol
                name
                country
                industry
                proportion
              }
              industryInvestments {
                name
                proportion
              }
              countryInvestments {
                name
                code
                proportion
              }
            }
          }
        }
      `,
      variables: {
        fundIds,
        dateFilter
      }
    });
  },

  fundWithoutPortfolio(fundId) {
    const fundIds = [parseInt(fundId)];
    return GraphQLService.graph.query({
      query: gql`
        query($fundIds: [Int!]) {
          funds(fundIds: $fundIds) {
            fundId
            investmentSector
            description
            shortDescription
            name
            creationDate
            investmentHorizon
            hexColor
            incomeType
            currency
            shortDescription
            series {
              name
              symbol
              usdSymbol
              segmentRequirements
              variableCharge
              variableChargeText
              maximumCharge
              tributaryBenefits {
                name
                description
              }
            }
          }
        }
      `,
      variables: {
        fundIds
      }
    });
  },
  getReturns(fundId, series, startDate, endDate) {
    let category = "INV";
    if (fundId === 9994) category = "MUT";
    const funds = series
      .filter(item => allowedSeries[fundId].includes(item))
      .map(item => {
        return {
          fund: fundId,
          series: item,
          category
        };
      });
    return GraphQLService.funds.query({
      query: gql`
        query getQuotas($funds: [QuotaInput]!, $dates: DateInput!, $currency: String!) {
          quotas(funds: $funds, dates: $dates, currency: $currency) {
            date
            category
            fundId
            series
            currency
            adjustedReturn
            fund {
              name
            }
          }
        }
      `,
      variables: {
        funds,
        dates: {
          startDate,
          endDate
        },
        currency: selectedCurrency[fundId]
      }
    });
  },
  getLongTerm(fundId, series, endDate) {
    let category = "INV";
    if (fundId === 9994) category = "MUT";
    const funds = series
      .filter(item => allowedSeries[fundId].includes(item))
      .map(item => {
        return {
          fund: fundId,
          series: item,
          category
        };
      });
    return GraphQLService.funds.query({
      query: gql`
        query getLongTermQuotas($funds: [QuotaInput]!, $endDate: Date!, $currency: String!) {
          longTermQuotas(funds: $funds, endDate: $endDate, currency: $currency) {
            date
            category
            fundId
            series
            currency
            adjustedReturn
            netEquity
            longTermPeriod
            fund {
              name
            }
          }
        }
      `,
      variables: {
        funds,
        endDate,
        currency: selectedCurrency[fundId]
      }
    });
  }
};
