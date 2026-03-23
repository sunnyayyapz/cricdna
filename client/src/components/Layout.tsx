import { Link, useLocation } from "wouter";
import { Sun, Moon, TrendingUp } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import PerplexityAttribution from "./PerplexityAttribution";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function CricketDNALogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      aria-label="CricketDNA logo"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* DNA helix left strand */}
      <path
        d="M8 4 C8 8, 16 10, 16 16 C16 22, 8 24, 8 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* DNA helix right strand */}
      <path
        d="M24 4 C24 8, 16 10, 16 16 C16 22, 24 24, 24 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cricket ball seam arcs */}
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M11.5 14 Q16 13 20.5 14" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M11.5 18 Q16 19 20.5 18" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Crossbars connecting strands */}
      <line x1="8" y1="9" x2="24" y2="9" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
      <line x1="8" y1="23" x2="24" y2="23" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/matches", label: "Matches" },
    { href: "/compare", label: "Compare" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Left: Logo + Brand */}
          <Link href="/">
            <a className="flex items-center gap-2.5 group" data-testid="nav-logo">
              <span className="text-primary transition-transform group-hover:scale-105">
                <CricketDNALogo size={26} />
              </span>
              <span className="font-display font-bold text-base tracking-tight text-foreground">
                CricDNA
              </span>
            </a>
          </Link>

          {/* Center: Nav links */}
          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? location === "/" || location === ""
                  : location === link.href || location.startsWith(link.href + "/");
              return (
                <Link key={link.href} href={link.href}>
                  <a
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              );
            })}
          </nav>

          {/* Right: Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="theme-toggle"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <TrendingUp size={12} />
            IPL 2026 Analytics
          </span>
          <PerplexityAttribution />
        </div>
      </footer>
    </div>
  );
}
