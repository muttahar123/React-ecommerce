// import { useContext, useState } from "react";
// import { ThemeContext } from "../context/ThemeContext";

function Header() {
//   const [theme , setTheme] = useContext(ThemeContext);

    return <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-slate-400 py-4 rounded-xl">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-3 text-xl">Muttahar</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">Home</a>
                <a className="mr-5 hover:text-gray-900">All products</a>
                <a className="mr-5 hover:text-gray-900">About us</a>
                <a className="mr-5 hover:text-gray-900 border rounded-lg h-8 text-white">Change theme</a>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">
                Log in
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </header>

}

export default Header;