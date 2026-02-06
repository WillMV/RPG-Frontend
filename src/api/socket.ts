import { io } from "socket.io-client";

export const socket = io(
  import.meta.env.VITE_VERCEL_ENV === "preview"
    ? import.meta.env.VITE_VERCEL_BRANCH_URL.replace("rpg-git-", "").replace(
        "-willmvs-projects.vercel.app",
        "",
      )
    : import.meta.env.VITE_SOCKET_URL,
);
