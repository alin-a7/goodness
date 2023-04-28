import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";

import "@/styles/globals.scss";
import { Provider } from "react-redux";

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
