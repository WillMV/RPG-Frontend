import { Navigate, Outlet, type RouteObject } from "react-router-dom";
import SigninPage from "../pages/Auth/Signin";
import SignupPage from "../pages/Auth/Signup";
import RecoveryAccountPage from "../pages/Auth/RecoveryAccount";
import { Header } from "@/components/Header";
import ThemeButton from "@/components/ThemeButton";

const AuthRouter: () => RouteObject = () => {
  const routes: RouteObject = {
    element: (
      <div>
        <Header className="justify-between gap-10">
          <h1>Pixel RPG</h1>
          <ThemeButton />
        </Header>
        <div>
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/auth/login" replace />,
      },
      {
        path: "/auth/login",
        element: <SigninPage />,
      },
      {
        path: "/auth/create-account",
        element: <SignupPage />,
      },
      {
        path: "/auth/recovery-account",
        element: <RecoveryAccountPage />,
      },
    ],
  };
  return routes;
};

export default AuthRouter;
