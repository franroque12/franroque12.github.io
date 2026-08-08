"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";
import type en from "@/i18n/en.json";

type GroupKey = keyof typeof en.certifications.groups;

const GROUP_ORDER: GroupKey[] = [
  "istqb",
  "scrum",
  "katalon",
  "gatling",
  "loadrunner",
  "azure",
  "oracle",
  "gcp",
];

function GroupCard({ name, items, index }: { name: string; items: string[]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 sm:p-8"
    >
      <h3 className="text-sm sm:text-base font-semibold text-blue-500 tracking-wide mb-4">
        {name}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-white leading-[1.6] flex items-start gap-2.5">
            <span className="text-blue-500 mt-1.5 text-[6px]">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Certifications() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-blue-500 mb-6">
            {t.certifications.title}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            {t.certifications.subtitle}
          </h2>
          <p className="text-sm sm:text-base text-white leading-[1.8] max-w-2xl">
            {t.certifications.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUP_ORDER.map((key, i) => {
            const group = t.certifications.groups[key];
            return <GroupCard key={key} name={group.name} items={group.items} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
