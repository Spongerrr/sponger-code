import { About, Hero } from "@/features"
import { Skills } from "@/features"
import { Experience } from "@/features/Experience/Experience"

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <About />
    </div>
  )
}