import { Hero } from '@/sections/Hero';
import { Differentials } from '@/sections/Differentials';
import { AircraftCategories } from '@/sections/AircraftCategories';
import { ProcessSection } from '@/sections/Process';
import { Portfolio } from '@/sections/Portfolio';
import { AboutSnippet } from '@/sections/About';
import { FinalCta } from '@/sections/FinalCta';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
        <Differentials />
        <AircraftCategories />
        <ProcessSection />
        <Portfolio />
        <AboutSnippet />
        <FinalCta />
      </div>
    </div>
  );
}
