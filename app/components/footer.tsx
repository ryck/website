import ThemeToggle from "./theme-toggle";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <ThemeToggle />
      <div className="w-full pb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <a className="text-gray-500 hover:text-gray-600 transition">Home</a>

          <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>

          <a className="text-gray-500 hover:text-gray-600 transition">About</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a href="https://twitter.com/ryck">Twitter</a>
          <a href="https://github.com/ryck">GitHub</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a className="text-gray-500 hover:text-gray-600 transition">
            Legacy Blog (Spanish)
          </a>
        </div>
      </div>
      © {new Date().getFullYear()} MIT Licensed
    </footer>
  );
}
