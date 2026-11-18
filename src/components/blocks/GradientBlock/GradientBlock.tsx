import s from "./GradientBlock.module.css";

type Stop = { label: string; hex: string; alpha: number };

export function GradientBlock({ variant, direction, stops }: { variant: "dark" | "light"; direction: string; stops: Stop[] }) {
  return (
    <div className={s.wrap}>
      <div className={s.preview} data-variant={variant}>
        <span className={s.arrow} data-variant={variant} aria-hidden="true" />
      </div>
      <p className={s.direction}>{direction}</p>
      <ul role="list" className={s.stops}>
        {stops.map((st) => (
          <li key={st.label} className={s.stop}>
            <span className={s.dot} style={{ background: st.hex, opacity: Math.max(st.alpha, 15) / 100 }} />
            <span>
              <strong>{st.label}</strong>
              <span className={s.meta}>{st.hex} · {st.alpha} %</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GlassDemo({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <div className={s.glassGrid}>
      <div className={s.glassStage} data-variant="dark">
        <span className={s.glass} data-variant="dark">zadání · hypotéza</span>
      </div>
      <div className={s.glassStage} data-variant="light">
        <span className={s.glass} data-variant="light">zadání · hypotéza</span>
      </div>
      <dl className={s.specs}>
        {specs.map((sp) => (
          <div key={sp.label}>
            <dt>{sp.label}</dt>
            <dd>{sp.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
