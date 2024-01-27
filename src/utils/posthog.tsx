import { useEffect } from "react";
import posthog from "posthog-js";
import { useRouter } from "next/router";

export const Posthog: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => posthog.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://p.synclabs.so",
      capture_pageview: false, // Manual pageview capture
    });
  }, []);

  // Explicitly return null since this component does not render anything
  return null;
};
