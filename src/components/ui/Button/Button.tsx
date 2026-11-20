import type { ComponentProps } from "react";
import clsx from "clsx";
import s from "./Button.module.css";

type Common = { variant?: "outline" | "solid"; icon?: "download" | "external" | "copy" | "prev" | "next" };
type AnchorProps = ComponentProps<"a"> & Common & { href: string };
type ButtonProps = ComponentProps<"button"> & Common & { href?: undefined };

const icons = {
  download: "M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M3 13h10",
  external: "M5 11 11 5m0 0H6m5 0v5",
  copy: "M5 5h7v7H5zM3 10V3h7",
  prev: "M13 8H3m0 0 4-4M3 8l4 4",
  next: "M3 8h10m0 0-4-4m4 4-4 4",
};

function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg viewBox="0 0 16 16" className={s.icon} aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "outline", icon, className, children, ...rest } = props;
  const cls = clsx(s.button, className);
  const data = { "data-slot": "button", "data-variant": variant !== "outline" ? variant : undefined };
  if (typeof props.href === "string") {
    return (
      <a className={cls} {...data} {...(rest as ComponentProps<"a">)}>
        {icon && icon !== "next" && <Icon name={icon} />}
        {children}
        {icon === "next" && <Icon name={icon} />}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...data} {...(rest as ComponentProps<"button">)}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
}
