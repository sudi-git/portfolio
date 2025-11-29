export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground font-medium">Sudikshya Bhattarai</p>
            <p className="text-muted-foreground text-sm">Software Engineer & Web Developer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/sudi-git"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sudikshya-bhattarai"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sudikshya Bhattarai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}