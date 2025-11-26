"use client"
import { useState, useEffect } from "react"
import styles from "./styles.module.scss"

export default function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
    } 
    else {
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light"

    document.documentElement.setAttribute("data-theme", saved)

    setIsDark(saved === "dark")
  }, [])

  return (
    <label className={styles.formSwitch}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className={styles.switch}></span>
      <span className={styles.label}> Mudar background </span>
    </label>
  )
}
