import clsx from "clsx";
import { colorTransition } from "@/styles";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";

const SigninPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div
        className={clsx(
          "flex flex-col h-screen bg-gray-200 dark:bg-gray-900",
          colorTransition,
        )}
      >
        <main className="flex flex-1 items-center justify-center">
          <form>
            <fieldset className="flex flex-col gap-4 w-full max-w-sm p-6 border rounded-[5px] border-gray-500">
              <legend
                className={clsx("px-2 dark:text-gray-300", colorTransition)}
              >
                Entrar
              </legend>

              <div className="flex flex-col gap-1">
                <label
                  className={clsx("dark:text-gray-300", colorTransition)}
                  htmlFor="email"
                >
                  E-mail
                </label>
                <Input id="email" type="email" />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  className={clsx("dark:text-gray-300", colorTransition)}
                  htmlFor="password"
                >
                  Senha
                </label>
                <Input id="password" type="password" />
              </div>

              <Button type="submit">Entrar</Button>

              <div className="flex justify-between text-sm">
                <Button
                  typeButton="text"
                  onClick={() => navigate("/auth/recovery-account")}
                >
                  Esqueci minha senha
                </Button>
                <Button
                  typeButton="text"
                  onClick={() => navigate("/auth/create-account")}
                >
                  Criar conta
                </Button>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    </div>
  );
};

export default SigninPage;
