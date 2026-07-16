import Button from "@/components/Button";
import FieldSet from "@/components/FieldSet";
import Input from "@/components/Input";
import { colorTransition } from "@/styles";
import { useLocalConfig } from "@/context";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const RecoveryAccountPage = () => {
  const navigate = useNavigate();
  const { languageValue } = useLocalConfig();
  return (
    <div className="relative">
      <div className={clsx("flex flex-col h-screen", colorTransition)}>
        <main className="flex flex-1 items-center justify-center">
          <form>
            <FieldSet legend={languageValue.recovery_account}>
              <Input
                id="email"
                type="email"
                label={languageValue.recovery_account_email}
              />
              <p
                className={clsx(
                  "text-[12px] text-gray-600 dark:text-gray-400",
                  colorTransition,
                )}
              >
                {languageValue.recovery_account_email_sent}
              </p>
              <Button type="submit">
                {languageValue.send_recovery_email}
              </Button>

              <div className="flex justify-between text-sm">
                <Button
                  typeButton="text"
                  onClick={() => navigate("/auth/login")}
                >
                  {languageValue.remenbered_password}
                </Button>
                <Button
                  typeButton="text"
                  onClick={() => navigate("/auth/create-account")}
                >
                  {languageValue.create_account}
                </Button>
              </div>
            </FieldSet>
          </form>
        </main>
      </div>
    </div>
  );
};

export default RecoveryAccountPage;
