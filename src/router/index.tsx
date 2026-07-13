import { useRoutes } from "react-router-dom";
import AuthRouter from "./auth.router";

const AppRoutes = () => {
  const routes = useRoutes([AuthRouter()]);

  return <>{routes}</>;
};

export default AppRoutes;
