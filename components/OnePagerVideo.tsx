import React from 'react';
import { Heading, Box } from '@chakra-ui/core';
import { Divider } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';
import { getAllPublicOnePagerData } from '../data/dataService';
import Head from 'next/head';

type OnePagerVideoProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

const Diveder50 = () => <Divider width='34%' />;

export const OnePagerVideo = ({
  onePagerData,
  isLoading,
}: OnePagerVideoProps) => {
  // If there is no pitch video, this aspect will not show on the website
  if (onePagerData.pitchVideoLink != null) {
    return (
      <Box>
      <ContentCard title='Pitch Video' isLoading={isLoading}>
        <Heading as='h2' size='md' marginRight='10px'>
          <a href={onePagerData.pitchVideoLink} target='_blank'>
            Link to Pitch Video
          </a>
       </Heading>
       
      </ContentCard>
      <Diveder50 />

      </Box>
   )
  } 
   else {
      return null;
    }
};