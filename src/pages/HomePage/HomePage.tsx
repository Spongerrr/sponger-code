import { Hero, Skills, About, Experience, Projects, Testimonial, Form } from "@/features"

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Testimonial />
      <Form />
    </div>
  )
}