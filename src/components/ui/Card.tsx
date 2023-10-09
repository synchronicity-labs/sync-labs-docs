import { FC, ReactNode, useState } from "react";

import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}

const Card: FC<Props> = ({ title, description, href, icon }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={href}>
      <div
        className="flex rounded-md border border-white/10 hover:border-white/30 hover:text-white transition ease-linear "
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={`flex flex-col w-full p-4 gap-4 rounded-md transition ease-linear ${
            isHovering && "bg-white/5"
          }`}
        >
          <div className="flex align-center gap-4">
            <div
              className={`transition ease-linear ${
                isHovering ? "text-white" : "text-white/40"
              }`}
            >
              {icon}
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h3>
          </div>
          <p style={{ fontSize: "15px" }}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
