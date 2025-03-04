# Change Log

All notable changes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- [Fix Trim Component on Safari on iOS 16](https://github.com/ElrondNetwork/dapp-core/pull/435)

## [[2.1.0-rc3](https://github.com/ElrondNetwork/dapp-core/pull/433)] - 2022-09-26

- [Added logic to extract transaction value for staking operations](https://github.com/ElrondNetwork/dapp-core/pull/432)
- [Fixed `UsdValue` intelisense](https://github.com/ElrondNetwork/dapp-core/pull/431)
- [Delegate redirecting after signing to `TreansactionSender`](https://github.com/ElrondNetwork/dapp-core/pull/430)

## [[2.1.0-rc2](https://github.com/ElrondNetwork/dapp-core/pull/428)] - 2022-09-22

- [Added interfaces for `getTransactionValue`](https://github.com/ElrondNetwork/dapp-core/pull/427)

## [[2.1.0-rc1](https://github.com/ElrondNetwork/dapp-core/pull/424)] - 2022-09-21

- [Added documentation about registering a websocket listener](https://github.com/ElrondNetwork/dapp-core/pull/423)
- [Updated @elrondnetwork/erdjs-wallet-connect-provider to 2.1.0-beta.1 with @walletconnect 2.0.0-rc.3](https://github.com/ElrondNetwork/dapp-core/pull/422)
- [Added option for showing equal sign in front of computed USD value by `getUsdValue` function](https://github.com/ElrondNetwork/dapp-core/pull/421)
- [Fixed fetching transaction count and smart contract results count from accounts endpoint](https://github.com/ElrondNetwork/dapp-core/pull/420)
- [Added extra actions names](https://github.com/ElrondNetwork/dapp-core/pull/419)
- [Added transaction interpreter functions and UI components (rc1)](https://github.com/ElrondNetwork/dapp-core/pull/418)

## [[2.0.4](https://github.com/ElrondNetwork/dapp-core/pull/416)] - 2022-09-12

- [Fixed navigating after pressing Cancel on sign modal](https://github.com/ElrondNetwork/dapp-core/pull/415)
- [Added hook allowing to check for dapp modal visibility](https://github.com/ElrondNetwork/dapp-core/pull/416)

## [[2.0.3](https://github.com/ElrondNetwork/dapp-core/pull/414)] - 2022-09-09

- [Added second login attempt error](https://github.com/ElrondNetwork/dapp-core/pull/408)
- [Fixed `AuthenticatedRoutesWrapper` not detecting pattern routes](https://github.com/ElrondNetwork/dapp-core/pull/409)
- [Fixed invalidating signed transactions after sign flow was canceled](https://github.com/ElrondNetwork/dapp-core/pull/413)

## [2.0.2] - 2022-09-01

- [Changed saving account information by using address namespacing](https://github.com/ElrondNetwork/dapp-core/pull/402)
- [Added ledger login default zero index selection on address table](https://github.com/ElrondNetwork/dapp-core/pull/403)
- [Changed internal file imports](https://github.com/ElrondNetwork/dapp-core/pull/404)
- [Fixed setting and rehydrating redux account information](https://github.com/ElrondNetwork/dapp-core/pull/406)
