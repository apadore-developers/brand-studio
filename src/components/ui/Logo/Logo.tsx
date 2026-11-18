import type { ComponentProps } from "react";
import clsx from "clsx";
import { logoPaths, logoViewBox, letterAIndex } from "@/content/logo-paths";
import s from "./Logo.module.css";

type LogoProps = ComponentProps<"svg"> & {
  /** "pozitivni" = navy, "negativni" = white, "current" = currentColor */
  variant?: "pozitivni" | "negativni" | "current";
  /** Only the letter A (favicon mark). */
  mark?: boolean;
};

export function Logo({ variant = "current", mark, className, ...rest }: LogoProps) {
  const paths = mark ? [logoPaths[letterAIndex]] : logoPaths;
  return (
    <svg
      viewBox={mark ? "0 4.8 196.5 223.6" : logoViewBox}
      className={clsx(s.logo, className)}
      data-slot="logo"
      data-variant={variant !== "current" ? variant : undefined}
      role="img"
      aria-label="Apadore"
      {...rest}
    >
      {paths.map((p, i) => (
        <path key={i} d={p.d} fillRule={p.rule} />
      ))}
    </svg>
  );
}
