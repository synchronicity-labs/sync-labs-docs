import Image from "next/image";

import logo from "@/assets/sync_stack_white.png";
import SlackLogo from "@/assets/SlackLogo";

import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: <Image src={logo} alt="Sync Labs logo" width="120" />,
  project: {
    link: "https://github.com/synchronicity-labs",
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
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.tryleap.ai" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

    return (
      <>
        <link rel="icon" href="https://app.synclabs.so/favicon.ico" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Sync Labs"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "sync any video to any audio in any language — no training required."
          }
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}');`}
        </script>
      </>
    );
  },
};
