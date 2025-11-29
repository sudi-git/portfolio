export default function About() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a software engineer with hands-on experience developing intuitive and optimized web applications
              as per the demand. I am dedicated to getting the job done effectively and efficiently.
            </p>
            <p>
              Currently based in Helsinki, Finland, I combine my technical expertise with a passion for creating
              user-friendly solutions that make a difference.
            </p>
            <p>
              When I'm not coding, I enjoy teaching Nepali language and culture to children of Nepali origin,
              sharing my heritage with the next generation.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/20 to-chart-3/20 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Facts</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Location:</span>
              <span className="font-medium">Helsinki, Finland</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Email:</span>
              <span className="font-medium">bhattaraisudikshya73@gmail.com</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Phone:</span>
              <span className="font-medium">+358405708715</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Languages:</span>
              <span className="font-medium">Nepali, English, Finnish</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}