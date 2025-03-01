// components/theme-provider.tsx
"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: "dark",
    setTheme: () => null,
})

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("dark")
    const [mounted, setMounted] = useState(false)

    // Sadece client tarafında çalışmasını sağlamak için
    useEffect(() => {
        setMounted(true)

        // localStorage'dan tema tercihini al
        const storedTheme = localStorage.getItem("theme") as Theme || "dark"
        setTheme(storedTheme)

        // Tema sınıfını uygula
        applyTheme(storedTheme)

        // Sistem teması değişirse dinle
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateTheme)
        }
    }, [])

    // Sistem teması değiştiğinde temayı güncelle
    const updateTheme = () => {
        if (theme === 'dark') {
            applyTheme('dark')
        }
    }

    const applyTheme = (newTheme: Theme) => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')

        if (newTheme === 'dark') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            root.classList.add(systemTheme)
        } else {
            root.classList.add(newTheme)
        }
    }

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        applyTheme(newTheme)
    }

    // Hydration sorunlarını önlemek için
    if (!mounted) {
        return <>{children}</>
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)