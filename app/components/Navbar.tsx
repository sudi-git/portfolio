import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-primary text-xl">Sudikshya Bhattarai</h1>

        <div className="hidden md:flex gap-2">
          {links.map(link => (
            <a key={link} href={`#${link}`}>
              <Button
                variant="ghost"
                className="capitalize text-foreground hover:text-primary hover:bg-accent/20 transition-all duration-200"
              >
                {link}
              </Button>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}