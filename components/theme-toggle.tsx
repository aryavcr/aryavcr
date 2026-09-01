"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn("rounded-full", className)}
    >
      {/* Nothing is rendered until mounted: on the server we don't know the theme yet. */}
      {mounted ? (
        isDark ? (
          <Sun className="size-5 fill-current" />
        ) : (
          <Moon className="size-5 fill-current" />
        )
      ) : (
        <span className="size-5" />
      )}
    </Button>
  )
}

export { ThemeToggle }
