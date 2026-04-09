import { Eye, Github, ExternalLink } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="relative border-t border-border py-16">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 box-glow-primary">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <span className="font-display text-lg font-bold tracking-wider text-primary">
              WATCHDOG<span className="text-foreground">.AI</span>
            </span>
          </div>
          <p className="text-muted-foreground">
            Intelligent Website Change Detection System
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Cloud Infrastructure & Services — Hackathon 2026
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ExternalLink className="h-4 w-4" /> Documentation
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 WATCHDOG.AI — Built with ❤️ for the Cloud Infrastructure & Services Hackathon
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
