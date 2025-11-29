import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  ✉️
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">bhattaraisudikshya73@gmail.com</p>
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

          <div className="bg-card border border-border rounded-2xl p-8">
            <form className="flex flex-col gap-6">
              <div>
                <Input
                  className="p-4 rounded-xl border-border bg-background focus:ring-primary focus:border-primary transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <Input
                  className="p-4 rounded-xl border-border bg-background focus:ring-primary focus:border-primary transition-all duration-200"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div>
                <Textarea
                  className="p-4 rounded-xl border-border bg-background focus:ring-primary focus:border-primary transition-all duration-200 min-h-[120px]"
                  placeholder="Your Message"
                />
              </div>
              <Button className="bg-primary text-primary-foreground py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}