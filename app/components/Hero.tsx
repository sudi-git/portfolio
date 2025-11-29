import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/10 pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-chart-3 flex items-center justify-center text-white text-4xl font-bold border-4 border-background shadow-lg">
          SB
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Sudikshya Bhattarai
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Software Engineer & Web Developer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I am a software engineer with experience developing intuitive and optimized web applications.
          Dedicated to getting the job done effectively.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <a href="#contact">
            <Button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
              Get In Touch
            </Button>
          </a>
          <a href="#projects">
            <Button variant="outline" className="px-8 py-3 rounded-full border-primary text-primary hover:bg-primary/10 transition-all duration-300">
              View Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}