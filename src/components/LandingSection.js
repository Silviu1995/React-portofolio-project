import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Băcă!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack>
        <Avatar name="Pete" size="xl" src="https://i.pravatar.cc/150?img=7" />
        <Heading size="sm">{greeting}</Heading>
        <Heading pt={6}>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    
    </FullScreenSection>
  );
};

export default LandingSection;
