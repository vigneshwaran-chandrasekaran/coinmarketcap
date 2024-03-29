import { ThemeProvider, DefaultTheme } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "antd/dist/antd.css";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import GlobalStyle from "@/components/globalstyles";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { theme } from "@/styles/theme";
import { wrapper } from "@/store/index";

config.autoAddCss = false;

function ErrorFallback() {
  return <div>Something went wrong</div>;
}

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default wrapper.withRedux(MyApp);

// import '../styles/globals.css'

// function ErrorFallback() {
//   return <div>Something went wrong</div>;
// }

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
