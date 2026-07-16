import type { HttpError } from "./types";

let logoutHandler: () => void | undefined;

export const setLogoutHandler = (fn: () => void) => {
  logoutHandler = fn;
};

export const authInterceptor = (e: HttpError) => {
  const { status } = e;

  switch (status) {
    case 401:
      //TODO: Adicionar notificação ao usuário
      console.warn("Unauthorized");
      logoutHandler?.();
      break;

    default:
      break;
  }
};
