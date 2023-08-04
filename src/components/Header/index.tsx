import React from "react";
import { AvatarHeader, FlexHeader, StyleHeader } from "./styles";
import Avatar from "../../assets/avatar.png";
import Link from "next/link";
import LogoCopy from "../../assets/logo copy";

const Header = () => {
  return (
    <StyleHeader>
      <FlexHeader>
        <Link href="/">
          <LogoCopy width={190} height={62} />
        </Link>
        <Link href="/profile">
          <AvatarHeader src={Avatar} alt="Avatar" />
        </Link>
      </FlexHeader>
    </StyleHeader>
  );
};

export default Header;
