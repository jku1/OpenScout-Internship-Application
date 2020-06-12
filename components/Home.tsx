import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/core';

import { Header } from './Header';
import { getAllPublicOnePagerData } from '../data/dataService';
import { OnePagerPublicData } from '../model/model';
import { OnePager } from './OnePager';
import { OnePagerData } from '../model/model';
import { Progress } from "@chakra-ui/core";
import { ONE_PAGERS_PUBLIC_DATA_ARRAY } from '../data/onepagers';
import { OnePagerVideo } from './OnePagerVideo';
import { Image } from "@chakra-ui/core";

/** Renders the home component. */
export const Home = () => {
  const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState(
    []
  );

  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      setOnePagers(result);
    });
  }, []);

  return (
    <Box>
      <Head>
        <title>One Pager Alpha</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <Box d='flex' justifyContent='center'>
        <Box>
          <Heading as='h1' size='xl'>
            OnePager 
          </Heading>

          <Heading as='h2' size='md'>
            View active OnePagers
          </Heading>
          <Divider width="100%" />
        </Box>
      </Box>

      <Flex flexWrap="wrap" justify="space-evenly" align="center" flexDirection='row' >
        <OnePagerLinks onePagers={onePagers} />
      </Flex>
    </Box>
  );
};

type OnePagerLinksProps = {
  onePagers: OnePagerPublicData[];
};

const OnePagerLinks = ({ onePagers, }: OnePagerLinksProps) => {
  
  return (
    <>  
      {onePagers.map((onePagerData: OnePagerPublicData) => (
      // Note for the image, it would be replaced by the companies image if they prefer to have one
       <Box maxW="sm" borderWidth="10px" rounded="lg" overflow="hidden">
        
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA3VLOE32JiFyx7gPXDOiIVE7AKVGO61Elalfsp3hp8IKWB_nI&usqp=CAU" />
       
        <Box p="1">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            </Box>
        </Box>

        <Box>
          <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}>
            <a>{onePagerData.companyName}</a>
          </Link>
        </Box>

        <Box>
          {onePagerData.briefDescription}
        </Box>

        <Box>
         <b>
           Contact Information: 
         </b>
          email/phone number
        </Box>
      
      </Box>
    </Box>
      ))}
    </>
  );
};

