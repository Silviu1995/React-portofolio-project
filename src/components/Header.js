import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Text, Box, HStack } from "@chakra-ui/react";
import useScrollListener from "../hooks/useScrollListener";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];



const Header = () => {
  
  const [boxTransformValue, setboxTransformValue] = useState('translateY(0)');
  const scroll = useScrollListener();
  // update classList of nav on scroll
  useEffect(() => {

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      setboxTransformValue('translateY(-200px)');
    } else {
      setboxTransformValue('translateY(0)');
    }
  }, [scroll.y, scroll.lastY]);


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };  


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={boxTransformValue}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack as="nav" spacing={5}>
              {socials.map((item, index) => (
                <a href={item.url} key={index} target="_blank">
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                </a>
              ) )}              
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Text fontSize="sm"><a href="#projects" onClick={handleClick('projects') }>Projects</a></Text>
              <Text fontSize="sm"><a href="#contactme" onClick={ handleClick('contactme') }>Contact Me</a></Text>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
