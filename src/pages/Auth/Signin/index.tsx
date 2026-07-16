import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import FieldSet from "@/components/FieldSet";
import { useLocalConfig } from "@/context";

const SigninPage = () => {
  const navigate = useNavigate();
  const { languageValue } = useLocalConfig();
  return (
    <main className="flex flex-1 h-screen items-center justify-center">
      <form>
        <FieldSet legend={languageValue.login}>
          <Input id="email" type="email" label={languageValue.email} />

          <Input
            id="password"
            type="password"
            label={languageValue.password}
          />

          <Button type="submit">{languageValue.login}</Button>

          <div className="flex justify-between text-sm">
            <Button
              typeButton="text"
              onClick={() => navigate("/auth/recovery-account")}
            >
              {languageValue.forgot_password}
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
  );
};

export default SigninPage;
