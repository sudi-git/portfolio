import { Button } from "@/components/ui/button";

export default function Navbar() {
  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">

        <h1 className="font-bold text-white text-lg">MyPortfolio</h1>

        <div className="hidden md:flex gap-4">
          {links.map(link => (
            <a key={link} href={`#${link}`}>
              <Button variant="ghost" className="capitalize">{link}</Button>
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
