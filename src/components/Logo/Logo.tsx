import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  withLink?: boolean;
  alt?: string;
};

export const Logo = ({
  width = 32,
  height = 32,
  withLink = true,
  alt = "React pet-project by Naumov Dmitriy",
}: LogoProps) => {
  const logo = (
    <Image
      src="/images/logo.svg"
      width={width}
      height={height}
      alt={alt}
    />
  );

  return withLink ? <Link href="/">{logo}</Link> : logo;
};
