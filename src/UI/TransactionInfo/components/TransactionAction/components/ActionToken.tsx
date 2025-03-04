import React from 'react';

import { TokenArgumentType } from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { getTransactionActionNftText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
import { getTransactionActionTokenText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionTokenText';
import { TransactionActionBlock } from './TransactionActionBlock/index';

export const ActionToken = ({
  token,
  noValue,
  showLastNonZeroDecimal
}: {
  token: TokenArgumentType;
  noValue?: boolean;
  showLastNonZeroDecimal?: boolean;
}) => {
  if (
    [
      NftEnumType.MetaESDT.toString(),
      NftEnumType.SemiFungibleESDT,
      NftEnumType.NonFungibleESDT
    ].includes(token.type)
  ) {
    switch (token.type) {
      case NftEnumType.SemiFungibleESDT: {
        const props = getTransactionActionNftText({
          token,
          showLastNonZeroDecimal
        });
        return (
          <div>
            <span>SFT quantity</span>
            <TransactionActionBlock.Nft {...props} badgeText={null} />
            <span>of collection</span>
            <TransactionActionBlock.Collection token={token} />
          </div>
        );
      }

      case NftEnumType.NonFungibleESDT: {
        const props = getTransactionActionNftText({
          token,
          noValue,
          showLastNonZeroDecimal
        });

        return (
          <div>
            <span>NFT</span>
            <TransactionActionBlock.Nft {...props} badgeText={null} />
            <span>of collection</span>
            <TransactionActionBlock.Collection token={token} />
          </div>
        );
      }

      case NftEnumType.MetaESDT: {
        const props = getTransactionActionNftText({
          token,
          noValue,
          showLastNonZeroDecimal
        });

        return <TransactionActionBlock.Nft {...props} badgeText={null} />;
      }

      default:
        return null;
    }
  } else {
    const props = getTransactionActionTokenText({
      token,
      noValue,
      showLastNonZeroDecimal
    });
    return (
      <TransactionActionBlock.Token {...props} showLastNonZeroDecimal={true} />
    );
  }
};
