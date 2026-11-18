import type { ReactNode } from "react";
import { Callout } from "@/components/ui/Callout";
import { Paragraphs } from "@/components/ui/Text";
import s from "./Section.module.css";

type Props = {
  id?: string;
  title?: string;
  body?: string;
  callout?: { variant: "note" | "warning"; heading?: string; body: string };
  layout?: "split" | "full";
  children?: ReactNode;
};

/** Visualbook-like section: text on the left, visual content on the right. */
export function Section({ id, title, body, callout, layout = "split", children }: Props) {
  return (
    <section id={id} className={s.section} data-layout={layout !== "split" ? layout : undefined} data-section={id}>
      <div className={s.text}>
        {title && <h2 className={s.title}>{title}</h2>}
        {body && <Paragraphs text={body} className={s.body} />}
        {callout && (
          <Callout variant={callout.variant} heading={callout.heading} className={s.callout}>
            {callout.body}
          </Callout>
        )}
      </div>
      {children && <div className={s.content}>{children}</div>}
    </section>
  );
}
