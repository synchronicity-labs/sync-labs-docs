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
        description="Get started with our HTTP endpoints."
        href={externalLinks.api_playground}
        icon={<FaCode size={26} />}
      />
      <Card
        title="Playground"
        description="Start generating premium content straight from your browser."
        href={externalLinks.webapp_playground}
        icon={<HiSparkles size={26} />}
      />
    </CardsGrid>
  );
}
