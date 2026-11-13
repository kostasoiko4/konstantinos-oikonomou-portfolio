import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import "./i18n";

// A single page; unknown URLs get public/404.html from Firebase Hosting with a real 404 status.
const App = () => (
  <HelmetProvider>
    <Index />
  </HelmetProvider>
);

export default App;
