import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import { FaCode, FaKey } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { externalLinks } from "@/utils/external-links";
import { internalLinks } from "@/utils/internal-links";

export default function QuickStartCards() {
  return (
    <CardsGrid>
      <Card
        title="RESTful API"
        description="Start Synchronizing Lips with Unprecedented Precision!"
        href={externalLinks.api_playground}
        icon={<FaCode size={26} />}
      />
      <Card
        title="Playground"
        description="Start generating premium content with AI by signing up for Leap."
        href={externalLinks.webapp_playground}
        icon={<HiSparkles size={26} />}
      />
    </CardsGrid>
  );
}
