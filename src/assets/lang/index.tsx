import * as ptbr from "./ptbr.json";
import * as enus from "./enus.json";

export interface LanguageDictionary {
  create_account: string;
  login: string;
  email: string;
  password: string;
  confirm_password: string;
  remember_me: string;
  forgot_password: string;
  remenbered_password: string;
  already_has_account: string;
  send_recovery_email: string;
  recovery_account: string;
  recovery_account_email_sent: string;
  recovery_account_email: string;
}

const lang = {
  "pt-BR": ptbr,
  "en-US": enus,
} as const satisfies Record<string, LanguageDictionary>;

export default lang;
