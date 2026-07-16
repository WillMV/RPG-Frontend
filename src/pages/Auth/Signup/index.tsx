import Button from "@/components/Button";
import FieldSet from "@/components/FieldSet";
import Input from "@/components/Input";
import { useLocalConfig } from "@/context";

import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const { languageValue } = useLocalConfig();

  return (
    <main className="flex flex-1 h-screen items-center justify-center">
      <form>
        <FieldSet legend={languageValue.create_account}>
          <Input id="email" type="email" label={languageValue.email} />

          <Input id="password" type="password" label={languageValue.password} />

          <Input
            id="confirmPassword"
            type="password"
            label={languageValue.confirm_password}
          />

          <Button type="submit">{languageValue.create_account}</Button>

          <div className="flex justify-between text-sm">
            <Button
              typeButton="text"
              onClick={() => navigate("/auth/recovery-account")}
            >
              {languageValue.forgot_password}
            </Button>
            <Button typeButton="text" onClick={() => navigate("/auth/login")}>
              {languageValue.login}
            </Button>
          </div>
        </FieldSet>
      </form>
    </main>
  );
};

export default SignupPage;
