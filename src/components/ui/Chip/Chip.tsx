import type { ComponentProps } from "react";
import clsx from "clsx";
import s from "./Chip.module.css";

export function Chip({ className, ...rest }: ComponentProps<"span">) {
  return <span className={clsx(s.chip, className)} data-slot="chip" {...rest} />;
}
