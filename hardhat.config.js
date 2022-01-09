require("@nomiclabs/hardhat-waffle");
const config = require("../config/mywave.conf");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: config.rinkeby.ALCHEMY_API_URL,
      accounts: [config.rinkeby.PRIVATE_RINKEBY_ACCOUNT_KEY],
    },
  },
};