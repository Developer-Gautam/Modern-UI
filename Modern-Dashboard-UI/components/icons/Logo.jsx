import Image from "next/image";
import * as React from "react";
import A from "../../public/onlyABlueLogo.png"

function Logo({ fill = "#3B81F6"}) {
  return (
    <Image src={A} width={"46px"} height={"55px"}/>
  );
}

export default Logo;
