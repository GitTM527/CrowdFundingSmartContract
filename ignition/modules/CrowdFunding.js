const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CrowdFundingModule", (m) => {

  const lock = m.contract("CrowdFunding");

  return { CrowdFunding };
});
