import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface StatCardProps {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
}

const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  // using clsx we can modify the style of the card using dynamic properties
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        {/* stat icon */}
        <Image
          src={icon}
          width={32}
          height={32}
          alt={label}
          className="size-8 w-fit"
        />
        {/* stat count */}
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>
      {/*stat card label  */}
      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StatCard;
