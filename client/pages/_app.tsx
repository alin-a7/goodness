import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";
import { Provider } from "react-redux";

import "@/styles/globals.scss";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
