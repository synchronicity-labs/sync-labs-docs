import Image from "next/image";

import logo from "@/assets/sync_stack_white.png";
import SlackLogo from "@/assets/SlackLogo";

export default {
  logo: <Image src={logo} alt="Sync Labs logo" width="120" />,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  chat: {
    link: "https://syncbetatesters.slack.com/join/shared_invite/zt-23592cxxg-sTjaMTkk2DO5yUcixzRWZg#/shared-invite/email",
    icon: SlackLogo,
  },
  docsRepositoryBase:
    "https://github.com/synchronicity-labs/sync-labs-docs/blob/main",
  footer: {
    text: <Image src={logo} alt="Sync Labs logo" width="120" />,
  },
};
