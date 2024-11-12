import { discountIcon } from "@/lib/svg_icons";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfferCard = ({ item, className, path }) => {
  return (
    <div
      className={
        "relative bg-white rounded-2xl flex justify-between items-center p-2 " +
        className
      }
    >
      <div className="flex flex-col gap-2 p-2">
        <div className="text-2xl text-[var(--lightblue)] font-bold ">
          {item.discount}Off{" "}
          <span className="text-sm text-gray-500 font-light ">on</span>
        </div>
        <div className="flex gap-1">
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="w-[24px] h-[24px] rounded-full overflow-hidden "
          />
          {item.title}
        </div>
        <Link
          href={`/${path}/shop/${item.shopId}`}
          className="text-sm text-[var(--main-pink)] flex items-center gap-1 "
        >
          Visit shop <ChevronRight size={14} />
        </Link>
      </div>
      <div>
        <Image src={item.image} alt={item.title} width={178} height={1} />
        <div className="absolute bottom-4 right-5 text-[0.5rem] font-bold text-[var(--lightblue)] flex items-center gap-[2px] rounded-3xl p-1 px-2 bg-[#172E46] ">
          {discountIcon} {item.discount}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
