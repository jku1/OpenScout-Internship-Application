import React from 'react';
import { Heading } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';
import { Progress } from "@chakra-ui/core";

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.
  const formatFinanceNumber = (financeNumber: number) => {
    if (typeof(financeNumber) != 'undefined') {
      return `$${financeNumber.toLocaleString()}`;
    };
  };
  // variable to determine how far the progress bar should go
  var prog = (onePagerData.fundsRaisedInStage/onePagerData.fundraisingStageGoal) * 100;
  
  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        Funding Stage: {onePagerData.fundraisingStage}
      </Heading>
      <SubHeading>
        Fundraising Details: {onePagerData.fundraisingDetails}
      </SubHeading>

      <Progress hasStripe isAnimated value={prog}/>

      <SubHeading>
        Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
      </SubHeading>
      <SubHeading>
        Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
      </SubHeading>
    </ContentCard>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
