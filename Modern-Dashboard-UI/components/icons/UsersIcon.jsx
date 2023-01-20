import Image from "next/image";
import * as React from "react";
import setting from "../../public/setting.png";

function UsersIcon({ stroke = "#6C7281", ...rest }) {
  return (
    <Image src={setting}  width={"30px"} height={"30px"} className="mt-[2px] opacity-70"/>
  );
}

export default UsersIcon;
