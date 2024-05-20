import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/resume": {
    name: "resume",
  },
  "/about": {
    name: "about",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          id="nav"
          className=" flex items-center justify-between w-full max-w-5xl mx-auto my-0 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 text-xl"
        >
          <a href="#skip" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          <div className="group flex flex-row space-x-3 pr-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 128 128"
              strokeWidth={3}
              stroke="currentColor"
              className="w-8 h-8 text-slate-900 rounded-sm group-hover:rotate-180 duration-600 transform-gpu	ease-in-out transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M79.281 23.427c-2.109-4.26-5.097-7.877-8.953-10.837l-.153-.117-.179-.076c-7.586-3.187-14.33-3.814-20.074-1.535-5.748 2.28-10.168 7.342-13.385 14.826l-.052.122-.03.13c-.809 3.46-1.123 6.444-.869 8.905.256 2.472 1.103 4.538 2.731 5.95 1.625 1.407 3.8 1.965 6.303 1.895 2.495-.07 5.446-.763 8.813-2.002l.64-.235.243-.636c.907-2.369.703-4.696-.628-6.83l-.349-.56-.647-.12a33.92 33.92 0 0 0-6.79-.584c.082-2.843.78-5.205 2.031-7.144 1.435-2.225 3.68-4.018 6.852-5.33 3.698-.378 6.78.173 9.327 1.556 2.52 1.367 4.638 3.617 6.317 6.861.951 25.477.62 50.892-.993 76.245a10.007 10.007 0 0 1-2.889 3.643c-4.462 2.816-8.182 3.619-11.281 2.844-3.041-.76-5.863-3.135-8.37-7.542a6507.874 6507.874 0 0 0-1.983-39.655l-.021-.4-.218-.336c-.929-1.436-2.204-2.653-3.907-2.653-1.658 0-2.998 1.164-4.052 2.568l-.275.366-.023.457a381.992 381.992 0 0 0 0 39.154l.01.197.06.188c2.426 7.498 7.206 12.988 14.278 16.39l.182.088.2.036c7.02 1.278 13.084.61 18.056-2.192 4.975-2.804 8.65-7.628 11.118-14.261l.094-.252v-.268c.032-21.609.693-43.154 1.98-64.636C87.355 26.786 95.7 20.7 107.595 19.27l.436-.053.339-.28c1.234-1.016 2.108-2.246 2.352-3.71.244-1.468-.189-2.906-1.038-4.249l-.434-.685-.811-.012c-11.84-.183-21.595 4.223-29.157 13.146Z"
              />
            </svg>
            <span>Ricardo Gonzalez</span>
            {/* <svg
              id="logo"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              className=" text-white fill-current bg-black"
            >
              <path
                className="text-white fill-current"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="3"
                d="M79.281 23.427c-2.109-4.26-5.097-7.877-8.953-10.837l-.153-.117-.179-.076c-7.586-3.187-14.33-3.814-20.074-1.535-5.748 2.28-10.168 7.342-13.385 14.826l-.052.122-.03.13c-.809 3.46-1.123 6.444-.869 8.905.256 2.472 1.103 4.538 2.731 5.95 1.625 1.407 3.8 1.965 6.303 1.895 2.495-.07 5.446-.763 8.813-2.002l.64-.235.243-.636c.907-2.369.703-4.696-.628-6.83l-.349-.56-.647-.12a33.92 33.92 0 0 0-6.79-.584c.082-2.843.78-5.205 2.031-7.144 1.435-2.225 3.68-4.018 6.852-5.33 3.698-.378 6.78.173 9.327 1.556 2.52 1.367 4.638 3.617 6.317 6.861.951 25.477.62 50.892-.993 76.245a10.007 10.007 0 0 1-2.889 3.643c-4.462 2.816-8.182 3.619-11.281 2.844-3.041-.76-5.863-3.135-8.37-7.542a6507.874 6507.874 0 0 0-1.983-39.655l-.021-.4-.218-.336c-.929-1.436-2.204-2.653-3.907-2.653-1.658 0-2.998 1.164-4.052 2.568l-.275.366-.023.457a381.992 381.992 0 0 0 0 39.154l.01.197.06.188c2.426 7.498 7.206 12.988 14.278 16.39l.182.088.2.036c7.02 1.278 13.084.61 18.056-2.192 4.975-2.804 8.65-7.628 11.118-14.261l.094-.252v-.268c.032-21.609.693-43.154 1.98-64.636C87.355 26.786 95.7 20.7 107.595 19.27l.436-.053.339-.28c1.234-1.016 2.108-2.246 2.352-3.71.244-1.468-.189-2.906-1.038-4.249l-.434-.685-.811-.012c-11.84-.183-21.595 4.223-29.157 13.146Z"
              />
            </svg> */}
          </div>
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className=" after:absolute transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
