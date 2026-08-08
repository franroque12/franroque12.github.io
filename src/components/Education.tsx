"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";
import type en from "@/i18n/en.json";

type DegreeKey = keyof typeof en.education.degrees;

const DEGREE_ORDER: DegreeKey[] = ["master", "bachelor"];

function DegreeCard({ degreeKey, index, isLast }: { degreeKey: DegreeKey; index: number; isLast: boolean }) {
  const { t } = useI18n();
  const degree = t.education.degrees[degreeKey];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`py-8 ${isLast ? "" : "border-b border-white/[0.06]"}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white">
            {degree.name}
          </h3>
          <p className="text-sm text-blue-500 mt-1">{degree.specialization}</p>
          <p className="text-sm text-neutral-300 mt-2">{degree.institution}</p>
        </div>
        <div className="text-left sm:text-right shrink-0">
          <p className="text-[11px] tracking-[0.15em] text-neutral-400 font-mono">
            {degree.startDate} — {degree.endDate}
          </p>
          <p className="text-[11px] tracking-[0.25em] uppercase text-white mt-2">
            {t.education.grade}: <span className="text-blue-500">{degree.grade}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-4xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-blue-500 mb-6">
            {t.education.title}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            {t.education.subtitle}
          </h2>
        </motion.div>

        <div>
          {DEGREE_ORDER.map((key, i) => (
            <DegreeCard key={key} degreeKey={key} index={i} isLast={i === DEGREE_ORDER.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
