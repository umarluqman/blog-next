/** @jsx jsx */
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import { jsx, css } from "@emotion/core";
import Card from "../../components/Card";

const Showcase = () => {
  const { colorMode } = useColorMode();

  const smallTextcolor = { light: "gray.700", dark: "gray.200" };
  const textColor = { light: "gray.700", dark: "gray.200" };
  const headingColor = { light: "black", dark: "white" };
  const showcaseColor = { light: "black", dark: "#16bdca" };
  return (
    <Flex direction="column" minHeight="100vh" w="100%" align="center" p={8}>
      <Box maxWidth={800} mb={12}>
        <Box w="full">
          <Heading
            fontSize="5xl"
            pb={6}
            letterSpacing="tight"
            color={headingColor[colorMode]}
          >
            {" "}
            Showcase
          </Heading>
          <Text mb={3} color={textColor[colorMode]} lineHeight="taller">
            Collection of my side projects outside of my professional career.
            Driven by curiosity, this is where I explored new stuff and built
            upon it.
          </Text>
          <Flex color="gray.700" align="baseline" color={textColor[colorMode]}>
            <Text>
              For professional experiences, check out my
              <a href="https://www.linkedin.com/in/umarluqman/">
                <Button
                  variant="ghost"
                  verticalAlign="unset"
                  rightIcon="external-link"
                  color={textColor[colorMode]}
                >
                  LinkedIn
                </Button>
              </a>
            </Text>
          </Flex>
          <Box h={8}></Box>

          <Grid
            templateColumns="repeat(auto-fit, minmax(200px, 360px))"
            gap={8}
          >
            <Card
              title={"Design to Code Series"}
              subtitle="Collection of user interfaces made up with ReactJS & 👩🏻‍🎤 Emotion (CSS-in-JS). Most of design elements are inspired by Refactoring UI book"
              pathname="/showcase"
            ></Card>
            <Card
              title={"Grid Image Gallery with Animation"}
              subtitle="Image gallery in a grid with a smooth hover transition."
              pathname="/showcase/grid-gallery"
            ></Card>
          </Grid>
          <Flex justify="center" my={10}>
            <Text mb={3} color={textColor[colorMode]} fontWeight={300}>
              This page is still in progress, more are coming.
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Showcase;
