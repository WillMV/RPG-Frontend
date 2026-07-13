import { BrowserRouter } from "react-router-dom";
import * as hooksProvider from "../context";

const contexts = {
  ...hooksProvider,
};

const providers = Object.entries(contexts)
  .filter(([key]) => key.endsWith("Provider"))
  .map(([key, Provider]) => ({
    key,
    Provider: Provider as React.ComponentType<{ children: React.ReactNode }>,
  }));

const Store = ({ children }: { children: React.ReactNode }) =>
  providers.reduceRight(
    (acc, { key, Provider }) => <Provider key={key}>{acc}</Provider>,
    children,
  );

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Store>
      <BrowserRouter>{children}</BrowserRouter>
    </Store>
  );
};
