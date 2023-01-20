import Image from "next/image";
import * as React from "react";

import card from "../../public/card.png";

function HomeIcon({ fill = "#6C7281", ...rest }) {
  return (
    <Image src={card} width={"30px"} height={"30px"} className="mt-[2px] opacity-70"/>
  );
}

export default HomeIcon;
