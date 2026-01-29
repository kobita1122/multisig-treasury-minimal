# Multi-Sig Treasury Minimal

A streamlined, production-ready Multi-Signature Wallet. This repository provides a clear implementation of a 'M-of-N' signature scheme, where a predefined number of owners must approve a transaction before it can be executed.

## Features
- **Flat Structure:** All files reside in the root for easy navigation.
- **Secure:** Built with Solidity 0.8.20 standards.
- **Gas Efficient:** Minimalist logic to reduce deployment and execution costs.

## Quick Start
1. Deploy the `MultiSigWallet.sol` contract with an array of owner addresses and the required number of confirmations.
2. Use `submitTransaction` to propose a spend.
3. Other owners use `confirmTransaction` to sign off.
4. Once the threshold is met, anyone can call `executeTransaction`.
