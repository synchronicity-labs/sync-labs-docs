import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import { FaUser, FaKey } from "react-icons/fa";
import { externalLinks } from "@/utils/external-links";
import { internalLinks } from "@/utils/internal-links";

export default function IntroductionCards() {
  return (
    <CardsGrid>
      <Card
        title="Create an account"
        description="Start synchronizing lips with unprecedented precision by signing up!"
        href={externalLinks.webapp_signup}
        icon={<FaUser size={26} />}
      />
      <Card
        title="Get an API key"
        description="Seamlessly integrate our Video Processing API for precise lip-syncing by getting your API key."
        href={internalLinks.authentication}
        icon={<FaKey size={26} />}
      />
    </CardsGrid>
  );
}
