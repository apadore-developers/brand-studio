import Link from "next/link";
import s from "./Breadcrumb.module.css";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className={s.breadcrumb}>
      <ol role="list" className={s.list}>
        {items.map((it, i) => (
          <li key={i} className={s.item}>
            {it.href ? <Link href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
