export function getInitialTheme(): "dark" | undefined {
  if (typeof window === "undefined") return undefined;

  const stored = localStorage.getItem("theme");

  if (stored === "dark") return "dark";
  
  if (!stored) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    localStorage.setItem("theme", prefersDark ? "dark" : "light");

    return prefersDark ? "dark" : undefined;
  }

  return undefined;
}
