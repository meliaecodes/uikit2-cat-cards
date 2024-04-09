import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Box, Heading, Image, Inline, Stack, Tab, Tabs, TabPanel, TabList, Text, xcss } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {

  const cardData = [{
    name: "Persephone",
    imgurUrl: "pzpMdhI.png",
    imgurDescription: "Persephone sitting in a flowerbed",
    breed: "Domestic Short Hair",
    age: "2 Years",
    adoptionFee: 200
  },{
    name: "Walter",
    imgurUrl: "1bCyWtV.png",
    imgurDescription: "Walter, a ginger cat wears a burgundy bow tie",
    breed: "Domestic Short Hair",
    age: "4 Years",
    adoptionFee: 200
  },{
    name: "Pickle",
    imgurUrl: "5of4ryw.png",
    imgurDescription: "Pickle is a smol tiny floof, wrapped in a pink blanket",
    breed: "Domestic Short Hair",
    age: "3 months",
    adoptionFee: 250
  }
]

  const cardStyle = xcss({
    backgroundColor: 'elevation.surface',
    margin: 'space.200',
    width: '25%',
    padding: 'space.200',
    boxShadow: 'elevation.shadow.overflow',
    borderColor: 'color.border',
    borderWidth: 'border.width',
    borderStyle: 'solid',
    borderRadius: 'border.radius',
    ':hover': {
      backgroundColor: 'elevation.surface.hovered',
      width: '30%'
    },  });

  const priceStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtler',
    width: '90%',
    marginBottom: 'space.200',
    borderRadius: 'border.radius'
  });

  function Card(pet) {
    return (
      <>
        <Box xcss={cardStyle}>
          <Stack alignInline="center" space="space.200" >
            <Heading as="h2">{pet.name}</Heading>
            <Image src={"https://i.imgur.com/"+ pet.imgurUrl} size="large" alt={pet.imgurDescription}></Image>
            <Box>
              <Stack alignInline="center" space="space.0" >
                <Box><Text>{pet.breed}</Text></Box>
                <Box><Text>{pet.age}</Text></Box>
              </Stack>
            </Box>
            <Box xcss={priceStyle}>
              <Stack alignInline="center" space="space.0">
                <Box><Text>Adoption fee</Text></Box>
                <Box><Text>${pet.adoptionFee}</Text></Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </>
    )
  }

  function CardGroup(pets) {
    return (
      <>
        <Box>
          <Inline alignInline="center">
            {pets.map(pet => (Card(pet)))}
          </Inline>
        </Box>
      </>
    )
  }

  return (
    <>
      <Heading as="h1">UI Kit 2 Layout Examples</Heading>
      <Tabs id="default">
        <TabList>
          <Tab>Card</Tab>
          <Tab>Card Group</Tab>
        </TabList>
        <TabPanel>
          <Box xcss={{width: '100%'}}>
            {Card(cardData[0])}
          </Box>
        </TabPanel>
        <TabPanel>
          <Box xcss={{width: '100%'}}>
            {CardGroup(cardData)}
          </Box>
        </TabPanel>
      </Tabs>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
