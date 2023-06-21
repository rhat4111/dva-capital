import FundService from "./fund-service";

const services = {
  funds: FundService
};

export default {
  get: name => services[name]
};
