import * as React from "react";
import NextApp from "next/app";
import { CacheProvider, Global, css } from "@emotion/core";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import Page from "../components/Page";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider value={cache}>
        <ThemeProvider>
          <CSSReset />
          <Global
            styles={css`
              ::selection {
                background-color: #16bdca;
                color: #fefefe;
              }
              html {
                scroll-behavior: smooth;
              }
            `}
          ></Global>
          <ColorModeProvider value="light">
            <DefaultSeo {...SEO} />
            <Page>
              <Component {...pageProps} />
            </Page>
          </ColorModeProvider>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}
