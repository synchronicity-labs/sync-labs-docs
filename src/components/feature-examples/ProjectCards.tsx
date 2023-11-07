import Card from "../ui/Card";
import CardsGrid from "../ui/CardsGrid";
import { BsTranslate } from "react-icons/bs";
import { externalLinks } from "@/utils/external-links";

export default function ProjectCards() {
  return (
    <CardsGrid>
      <Card
        title="Translation AI"
        description="Translate any video to any language, with perfectly matched lip movements."
        href={externalLinks.translation_ai}
        icon={<BsTranslate size={26} />}
      />
    </CardsGrid>
  );
}
