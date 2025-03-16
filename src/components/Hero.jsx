"use client"
import { NavLink } from "react-router"
import { motion } from "framer-motion"
import { FaHandsHelping, FaCalendarAlt, FaArrowRight } from "react-icons/fa"
import { IoEarth } from "react-icons/io5"
import { RiCommunityFill } from "react-icons/ri"

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    }

    const pulseVariants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    }

    const badgeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 1.2,
            },
        },
    }
    const staggeredAppearVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const tileVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        },
    }

    return (
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gray-100 dark:bg-gray-900/20 blur-3xl opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 2 }}
                />
                <motion.div
                    className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gray-100 dark:bg-gray-900/20 blur-3xl opacity-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.div
                    className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-gray-100 dark:bg-gray-900/20 blur-3xl opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 2, delay: 1 }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="max-w-xl">
                        <motion.div
                            className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm"
                            variants={badgeVariants}
                        >
                            <span className="flex items-center gap-2">
                                <RiCommunityFill className="text-lg" />
                                Welcome to CommunionHub
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 dark:text-white"
                            variants={itemVariants}
                        >
                            Connecting People Across Faiths & Interests
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
                            variants={itemVariants}
                        >
                            Bringing communities together through meaningful events and shared experiences. We create spaces where
                            spirituality meets innovation, fostering connections that transcend boundaries.
                        </motion.p>

                        <motion.div variants={itemVariants}>
                            <NavLink
                                to="/events"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-500 dark:to-blue-500 text-white font-medium text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <span>Explore Events</span>
                                <FaArrowRight className="ml-2" />
                            </NavLink>
                        </motion.div>

                        <motion.div className="mt-12 grid grid-cols-3 gap-4" variants={itemVariants}>
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-2"
                                    variants={pulseVariants}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <FaHandsHelping className="text-xl" />
                                </motion.div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Community Support</span>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-2"
                                    variants={pulseVariants}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <FaCalendarAlt className="text-xl" />
                                </motion.div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Diverse Events</span>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-2"
                                    variants={pulseVariants}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <IoEarth className="text-xl" />
                                </motion.div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Global Reach</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative h-[400px] md:h-[500px] hidden md:block">
                        <motion.div
                            className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3"
                            variants={staggeredAppearVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg relative"
                                variants={tileVariants}
                                whileHover="hover"
                            >
                                <img
                                    src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp"
                                    alt="Community gathering"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-bold">Unite Together</h3>
                                    <p className="text-gray-200 text-sm mt-1">Building bridges across communities</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-blue-600 dark:bg-blue-700 rounded-2xl flex flex-col items-center justify-center text-white p-4"
                                variants={tileVariants}
                                whileHover="hover"
                            >
                                <span className="text-3xl font-bold">500+</span>
                                <span className="text-sm mt-1">Members</span>
                            </motion.div>

                            <motion.div
                                className="rounded-2xl overflow-hidden shadow-lg relative"
                                variants={tileVariants}
                                whileHover="hover"
                            >
                                <img
                                    src="https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif"
                                    alt="Faith gathering"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-3">
                                    <span className="text-white text-sm font-medium">Faith</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="rounded-2xl overflow-hidden shadow-lg relative"
                                variants={tileVariants}
                                whileHover="hover"
                            >
                                <img
                                    src="https://communionhub.org/static/media/event-3.518ca15d6caff0f2e0c9.avif"
                                    alt="Community event"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-3">
                                    <span className="text-white text-sm font-medium">Events</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-gray-100 dark:bg-gray-800 rounded-2xl flex flex-col items-center justify-center p-4 text-center"
                                variants={tileVariants}
                                whileHover="hover"
                            >
                                <FaCalendarAlt className="text-2xl text-blue-600 dark:text-blue-400 mb-2" />
                                <span className="text-gray-800 dark:text-gray-200 font-medium">Weekly</span>
                                <span className="text-gray-600 dark:text-gray-400 text-sm">Events</span>
                            </motion.div>

                            <motion.div
                                className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 px-4 z-10"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">Join Us</span>
                                    <span className="text-gray-600 dark:text-gray-400 text-xs">Connect Today</span>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-4 border-dashed border-gray-200 dark:border-gray-700 opacity-50"
                            initial={{ opacity: 0, rotate: 0 }}
                            animate={{ opacity: 0.5, rotate: 360 }}
                            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />

                        <motion.div
                            className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/20"
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg
                    className="relative block w-full h-[50px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z"
                        className="text-gray-100 dark:text-gray-800"
                    ></path>
                </svg>
            </div>
        </section>
    )
}

export default Hero

