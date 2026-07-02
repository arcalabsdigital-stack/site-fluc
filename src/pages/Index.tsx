import { Hero } from '@/components/sections/Hero'
import { Problems } from '@/components/sections/Problems'
import { Features } from '@/components/sections/Features'
import { DashboardPreview } from '@/components/sections/DashboardPreview'
import { Pricing } from '@/components/sections/Pricing'
import { Comparison } from '@/components/sections/Comparison'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Index() {
  return (
    <div className="w-full bg-background overflow-x-hidden">
      <Hero />
      <Problems />
      <Features />
      <DashboardPreview />
      <Pricing />
      <Comparison />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
