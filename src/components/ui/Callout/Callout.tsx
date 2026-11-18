import type { ComponentProps } from "react";
import clsx from "clsx";
import s from "./Callout.module.css";

type CalloutProps = ComponentProps<"aside"> & { variant?: "note" | "warning"; heading?: string };

export function Callout({ variant = "note", heading, className, children, ...rest }: CalloutProps) {
  return (
    <aside className={clsx(s.callout, className)} data-slot="callout" data-variant={variant !== "note" ? variant : undefined} {...rest}>
      {heading && <p className={s.heading}>{heading}</p>}
      <div className={s.body}>{children}</div>
    </aside>
  );
}
