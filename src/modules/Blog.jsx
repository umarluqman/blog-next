/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import {
  Flex,
  Box,
  Text,
  Stack,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import PropTypes from "prop-types";

const Home = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };
  const textColor = { light: "black", dark: "white" };

  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor={bgColor[colorMode]}
      pb={80}
      width="full"
    >
      <Box maxWidth={700} w="full" as="main">
        <Stack spacing={3} p={8}>
          <Text color={textColor[colorMode]}>Work in progress 🚧</Text>
        </Stack>
      </Box>
    </Flex>
  );
};

Home.propTypes = {};

export default Home;
