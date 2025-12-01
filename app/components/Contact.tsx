

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="flex gap-12 justify-center">


          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                ✉️
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground">
                  <a href="mailto:bhattaraisudikshya73@gmail.com">
                    bhattaraisudikshya73@gmail.com
                  </a>
                </p>

              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                📱
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground">+358405708715</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                🌐
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">Helsinki, Finland</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}