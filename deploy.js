const hre = require("hardhat");

async function main() {
  const [deployer, owner2, owner3] = await hre.ethers.getSigners();
  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  
  // Deploying with 3 owners and a 2-signature requirement
  const wallet = await MultiSig.deploy([deployer.address, owner2.address, owner3.address], 2);

  console.log("MultiSig Wallet deployed to:", wallet.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
