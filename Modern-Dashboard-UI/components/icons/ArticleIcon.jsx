import Image from "next/image";
import * as React from "react";
import transaction from "../../public/transaction.png";

function ArticleIcon({ fill = "#6C7281", ...rest }) {
  return (
   <Image src={transaction}  width={"30px"} height={"30px"} className="mt-[2px] opacity-70"/>
  );
}

export default ArticleIcon;
