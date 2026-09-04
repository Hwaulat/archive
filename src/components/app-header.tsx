import { Link } from "@tanstack/react-router";
import { ChevronLeft, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LppomLogo } from "@/components/lppom-logo";

export function AppHeader({ title }: { title: string }) {
  return (
    <header className="flex h-[90px] items-center gap-4 bg-brand px-4">
      <LppomLogo className="w-[240px] shrink-0 py-3" />
      <button
        type="button"
        aria-label="Toggle menu"
        className="ml-2 text-brand-foreground/90 transition-opacity hover:opacity-70"
      >
        <Menu className="h-5 w-5" />
      </button>
      <h1 className="font-display text-2xl font-bold text-brand-foreground">{title}</h1>
      <div className="ml-auto">
        <Button variant="secondary" size="xl" className="text-brand" asChild>
          <Link to="/">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>
    </header>
  );
}
