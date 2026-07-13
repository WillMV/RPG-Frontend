import AppRoutes from "./router";
import "./App.css";
import { Providers } from "./providers";
const App = () => {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};

export default App;
