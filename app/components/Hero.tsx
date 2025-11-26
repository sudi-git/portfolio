import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold flex flex-col gap-2">
         <span>Hi, I'm</span>
         <span className="text-emerald-400">Sudikshya Bhattarai</span>
        </h1>
        <p className="mt-4 text-gray-400">Software Engineer</p>

        <Button className="p-5 mt-6">
          See My Work
        </Button>
      </div>
    </section>
  );
}
