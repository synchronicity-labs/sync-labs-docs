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
        description="Start synchronizing lips with unprecedented precision!"
        href={externalLinks.webapp_signup}
        icon={<FaUser size={26} />}
      />
      <Card
        title="Get an API key"
        description="Start generating premium content with AI by signing up for Leap."
        href={internalLinks.authentication}
        icon={<FaKey size={26} />}
      />
    </CardsGrid>
  );
}
