import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-24">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <form className="flex flex-col gap-4">
          <Input className="p-3  rounded" placeholder="Name" />
          <Input className="p-3  rounded" placeholder="Email" />
          <Textarea className="p-3  rounded" placeholder="Message" />

          <Button >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
