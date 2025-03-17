"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCalendarAlt, FaMapMarkerAlt, FaPlus, FaTimes, FaFilter, FaRegStar } from "react-icons/fa"
import { IoMdTime } from "react-icons/io"

const Events = () => {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "Religious",
    image: "/placeholder.svg?height=300&width=400",
  })

  const categories = ["All", "Religious", "Social", "Charity", "Cultural"]
  const mockEvents = [
    {
      id: 1,
      title: "Eid-ul-Fitr",
      date: "2025-04-15",
      displayDate: "April 15, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Community Center, New York",
      description:
        "Join us for a beautiful celebration of Eid-ul-Fitr, the festival of lights with cultural performances and traditional food.",
      category: "Religious",
      image: "https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266?_a=BAMCkGfi0",
      isFeatured: true,
      isFree: true,
    },
    {
      id: 3,
      title: "Community Food Drive",
      date: "2025-04-25",
      displayDate: "April 25, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Main Street Park, Chicago",
      description: "Help us collect food donations for local families in need. All contributions are welcome.",
      category: "Charity",
      image: "https://img.freepik.com/premium-photo/midsection-man-preparing-food-kitchen_1048944-11771451.jpg",
      isFeatured: false,
      isFree: true,
    },
    {
      id: 4,
      title: "Easter Celebration",
      date: "2025-04-12",
      displayDate: "April 12, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "St. Mary's Church, San Francisco",
      description: "Celebrate Easter with our community with special services and an egg hunt for children.",
      category: "Religious",
      image: "https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152742578?_a=BAMCkGfi0",
      isFeatured: true,
      isFree: true,
    },
    {
      id: 5,
      title: "Cultural Dance Workshop",
      date: "2025-05-05",
      displayDate: "May 5, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Dance Studio, Los Angeles",
      description: "Learn traditional dances from around the world in this interactive and fun workshop.",
      category: "Cultural",
      image: "https://static01.nyt.com/images/2012/04/06/arts/06URBAN_SPAN/06URBAN_SPAN-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      isFeatured: false,
      isFree: false,
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(mockEvents)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEvent = {
      id: events.length + 1,
      ...formData,
      displayDate: new Date(formData.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      isFeatured: false,
      isFree: true,
    }

    setEvents([newEvent, ...events])

    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
      category: "Religious",
      image: "/placeholder.svg?height=300&width=400",
    })
    setShowAddForm(false)
  }

  const filteredEvents = activeCategory === "All" ? events : events.filter((event) => event.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  }

  const SkeletonCard = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md h-full">
      <div className="animate-pulse">
        <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
        <div className="p-5 space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Meaningful Events
          </h1>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with your community through events that inspire, educate, and bring people together.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <motion.div
            className="flex items-center overflow-x-auto pb-2 md:pb-0 w-full md:w-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="flex items-center mr-4 text-gray-700 dark:text-gray-300">
              <FaFilter className="mr-2" />
              Filter:
            </span>
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          <motion.button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAddForm ? (
              <>
                <FaTimes className="mr-2" />
                Cancel
              </>
            ) : (
              <>
                <FaPlus className="mr-2" />
                Add Event
              </>
            )}
          </motion.button>
        </div>
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Add New Event</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Event Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter event title"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Time</label>
                  <input
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="e.g. 6:00 PM - 9:00 PM"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter event location"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {categories
                      .filter((cat) => cat !== "All")
                      .map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Describe your event"
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md"
                  >
                    Create Event
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        {isLoading ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SkeletonCard />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <>
            {filteredEvents.length === 0 ? (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300">
                  No events found in this category
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Try selecting a different category or add a new event
                </p>
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                      {/* Event Image with Date Badge */}
                      <div className="relative">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                          <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 text-center">
                            {new Date(event.date).toLocaleString("default", { month: "short" }).toUpperCase()}
                          </div>
                          <div className="text-gray-900 dark:text-white font-bold text-xl px-3 py-1 text-center">
                            {new Date(event.date).getDate()}
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {event.category}
                        </div>

                        {/* Free Badge */}
                        {event.isFree && (
                          <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            FREE
                          </div>
                        )}
                      </div>

                      {/* Event Content */}
                      <div className="p-5 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>

                        <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-2 text-blue-600 dark:text-blue-400" />
                            <span>{event.displayDate}</span>
                          </div>

                          <div className="flex items-center">
                            <IoMdTime className="mr-2 text-blue-600 dark:text-blue-400" />
                            <span>{event.time}</span>
                          </div>

                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-blue-600 dark:text-blue-400" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">{event.description}</p>

                        <div className="mt-auto">
                          <button className="px-4 py-2 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Events

