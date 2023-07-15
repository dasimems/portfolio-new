import { Favicon } from "@/assets/images";
import { siteName } from "@/utils/general";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  textHidden,
  imageHidden,
  imageSize,
  textClassName,
  className
}) => {
  if (!imageSize) {
    imageSize = 50;
  }

  return (
    <Link
      aria-label="Dasimems"
      href="/"
      className={`inline-flex items-center text-black text-xs gap-2 font-bold uppercase ${className}`}
    >
      {!imageHidden &&
        <Image
          src={Favicon}
          alt=""
          className="border-2 border-slate-200 rounded-full"
          priority
          width={imageSize ? imageSize : 50}
        />}

      {/* {!imageHidden && <p className="rounded-full text-slate-200 items-center justify-center bg-primary-dark-800 inline-flex" style={{
                width: `${imageSize}px`,
                height: `${imageSize}px`,
                fontSize: `${imageSize * 0.6}px`
            }}>D</p>} */}

      {!textHidden &&
        <p className={textClassName}>
          {siteName}
        </p>}
    </Link>
  );
};

export default Logo;
