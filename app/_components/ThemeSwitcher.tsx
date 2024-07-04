'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      className="group flex items-center rounded-md p-2 hover:bg-zinc-300 focus:bg-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
      onClick={() => toggleTheme()}
    >
      {theme === 'dark' ? (
        <FiSun className="duration-100 group-hover:rotate-45" size={'20px'} />
      ) : (
        <FaMoon
          className="-rotate-[20deg] duration-100 group-hover:rotate-[15deg]"
          size={'20px'}
        />
      )}
    </button>
  )
}

export default ThemeSwitcher
