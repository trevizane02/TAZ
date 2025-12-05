import { ReactNode } from 'react';

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <p className="text-accent uppercase tracking-[0.4em] text-xs">{subtitle || 'Atualizações'}</p>
      <h2 className="text-3xl md:text-4xl font-heading text-navy dark:text-white mt-3">{title}</h2>
    </div>
  );
}
