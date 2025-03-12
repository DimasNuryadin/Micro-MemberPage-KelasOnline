import "@/styles/globals.css";
import "../../styles/style.css"
import ReduxProvider from "../store/provider";

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
