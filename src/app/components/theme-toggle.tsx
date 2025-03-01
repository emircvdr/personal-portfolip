// components/theme-toggle.tsx
"use client"


import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Sadece client tarafında çalışmasını sağla
    useEffect(() => {
        setMounted(true)
    }, [])

    // Hydration sorunlarını önlemek için
    if (!mounted) {
        return <Button variant="outline" size="icon" className="w-10 h-10 rounded-md" />
    }


    const cycleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={cycleTheme}
            className="w-10 h-10 rounded-md"
        >
            {theme === "light" && <Sun className="h-5 w-5" />}
            {theme === "dark" && <Moon className="h-5 w-5" />}
            <span className="sr-only">Tema değiştir</span>
        </Button>
    )
}