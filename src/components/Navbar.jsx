"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router"
import { motion, AnimatePresence } from "framer-motion"
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme === "dark"
    })
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute("data-theme", "dark")
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.setAttribute("data-theme", "light")
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Events", path: "/events" },
        { name: "About", path: "/about" },
    ]
    const navbarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    }
    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    }

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    }

    const mobileItemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 },
    }

    return (
        <motion.nav
            className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-300"
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <motion.div className="flex items-center" whileTap={{
                        scale: 0.8
                    }} whileHover={{
                        scale: 0.95
                    }} variants={linkVariants}>
                        <NavLink to="/" className="flex items-center">
                            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400">
                                CommunionHub
                            </span>
                        </NavLink>
                    </motion.div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex space-x-1">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={linkVariants}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${isActive
                                                ? "text-white"
                                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {isActive && (
                                                    <motion.span
                                                        className="absolute inset-0 rounded-full  -z-10"
                                                        layoutId="activeBackground"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                                <span className={`relative z-10 ${isActive ? "text-blue-400" : ""}`}>{link.name}</span>
                                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 ${isActive ? "scale-x-100" : ""} dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                                            </>
                                        )}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>

                        {/* Dark mode Button */}
                        <motion.button
                            variants={linkVariants}
                            onClick={toggleTheme}
                            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </motion.button>
                    </div>

                    {/* MenuBar */}
                    <div className="flex md:hidden items-center">
                        <motion.button
                            variants={linkVariants}
                            onClick={toggleTheme}
                            className="mr-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </motion.button>

                        <motion.button
                            variants={linkVariants}
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                            aria-expanded="false"
                        >
                            <div className="w-6 h-6 flex justify-center items-center">
                                {!isOpen ? (<CiMenuFries className="text-[1.5rem]" />) : (<RxCross2 className="text-[1.5rem]" />)}
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden overflow-hidden"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={mobileItemVariants}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive
                                                ? "bg-gradient-to-r from-blue-600 to-blue-600 text-white"
                                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar

