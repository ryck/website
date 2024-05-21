"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex h-7 w-14 rounded-full bg-gray-100 dark:bg-gray-900">
      <span className="sr-only">
        現在のモード：<span id="darkmode-state">ライトモード</span>
      </span>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center h-6 w-6">
          <button
            type="button"
            id="handle-darkmode-off"
            className="flex justify-center items-center h-6 w-6 rounded-full bg-yellow-300 text-gray-900 dark:bg-transparent dark:text-gray-200"
            onClick={handleTheme}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <span className="sr-only">ライトモードに切り替える</span>
          </button>
        </div>
        <div className="flex justify-center items-center h-6 w-6">
          <button
            type="button"
            id="handle-darkmode-on"
            className="flex justify-center items-center h-6 w-6 rounded-full bg-transparent text-gray-900 dark:bg-white text dark:text-gray-900"
            onClick={handleTheme}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
            <span className="sr-only">ダークモードに切り替える</span>
          </button>
        </div>
      </div>
    </div>
  );
}
