"use client";
import Dashboard from "@/components/Dashboard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="h-screen w-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <Dashboard />
    </main>
  );
}