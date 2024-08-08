// router
import Routes from "./router";
// provider
import { TitleProvider } from "./provider/TitleProvider";
// SEO
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <TitleProvider>
        <Routes />
      </TitleProvider>
    </HelmetProvider>
  );
}

export default App;
