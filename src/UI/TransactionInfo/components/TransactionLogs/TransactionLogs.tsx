import React from 'react';
import {
  InterpretedTransactionType,
  ResultType
} from 'types/serverTransactions.types';
import { AddressDetailItem } from '../AddressDetailItem/AddressDetailitem';
import { DetailItem } from '../DetailItem';
import { EventsList } from '../EventsList/EventsList';
import { ScrDetailItem } from '../ScrDetailItem/ScrDetailItem';

const showResultsEvents = (result: ResultType) =>
  result?.logs?.events && result.logs.events?.length > 0;

const Results = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const showResults = transaction.results && transaction.results.length > 0;
  if (!showResults) {
    return null;
  }
  return (
    <div className='row'>
      {transaction.results?.map((result, resultIndex) => {
        if (!result.logs) {
          return null;
        }

        return (
          <div
            key={`tx-result-log-${resultIndex}`}
            className='col-12 border-bottom'
          >
            <ScrDetailItem result={result} />
            {result.logs.address !== undefined && (
              <AddressDetailItem address={result.logs.address} />
            )}
            {showResultsEvents(result) && (
              <DetailItem title='Events'>
                <EventsList events={result.logs.events} id={result.logs?.id} />
              </DetailItem>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const TransactionLogs = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const showEvents =
    transaction.logs?.events && transaction.logs?.events?.length > 0;

  return (
    <>
      {transaction.logs && (
        <>
          {' '}
          {transaction.logs.address != null && (
            <AddressDetailItem address={transaction.logs.address} />
          )}
          {showEvents && (
            <DetailItem title='Events'>
              <EventsList
                events={transaction.logs.events}
                id={transaction.logs?.id}
              />
            </DetailItem>
          )}
        </>
      )}
      <Results transaction={transaction} />
    </>
  );
};
