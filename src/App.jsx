// src/App.jsx

import React, { useState } from "react";

function App() {
    const [volunteerForm, setVolunteerForm] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "Watering",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVolunteerForm({ ...volunteerForm, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(
            `Thank you, ${volunteerForm.name}! Your volunteer application has been submitted.`
        );
        setVolunteerForm({ name: "", email: "", phone: "", interest: "Watering" });
    };

    return (
        <div className="bg-gray-50 font-sans">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-leaf text-2xl text-green-600"></i>
                        <h1 className="text-2xl font-bold text-green-700">
                            GreenRoots Garden
                        </h1>
                    </div>
                    <div className="hidden md:flex space-x-6 font-medium">
                        <a href="#plots" className="hover:text-green-600">
                            Garden Plots
                        </a>
                        <a href="#volunteer" className="hover:text-green-600">
                            Volunteer
                        </a>
                        <a href="#events" className="hover:text-green-600">
                            Events
                        </a>
                        <a href="#contact" className="hover:text-green-600">
                            Contact
                        </a>
                    </div>
                    <button className="md:hidden">
                        <i className="fas fa-bars text-2xl text-green-600"></i>
                    </button>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section
                    className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="relative z-10 px-6">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Growing Together for a Greener Tomorrow
                        </h2>
                        <p className="text-lg md:text-xl mb-8">
                            Join our community and cultivate your own piece of nature.
                        </p>
                        <a
                            href="#plots"
                            className="inline-block bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-full font-semibold shadow-lg"
                        >
                            Reserve a Plot
                        </a>
                    </div>
                </section>

                {/* Garden Plots */}
                <section id="plots" className="py-20">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center text-green-700 mb-12">
                            Garden Plots
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Small Plot",
                                    size: "4x8 ft",
                                    cost: "$50/year",
                                    desc: "Perfect for individuals or beginners. Grow your favorite herbs and vegetables.",
                                },
                                {
                                    title: "Medium Plot",
                                    size: "8x12 ft",
                                    cost: "$80/year",
                                    desc: "Ideal for small families looking to grow a variety of produce throughout the season.",
                                },
                                {
                                    title: "Large Plot",
                                    size: "12x16 ft",
                                    cost: "$110/year",
                                    desc: "For the serious gardener or larger families. Plenty of space for diverse crops.",
                                },
                            ].map((plot, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
                                >
                                    <h4 className="text-2xl font-bold text-green-700 mb-2">
                                        {plot.title}
                                    </h4>
                                    <p className="text-gray-500 mb-2">Size: {plot.size}</p>
                                    <p className="font-semibold mb-4">Cost: {plot.cost}</p>
                                    <p className="mb-6">{plot.desc}</p>
                                    <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                                        Apply for a Plot
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                            <h4 className="text-xl font-bold mb-4 text-green-700">
                                Rules & Guidelines
                            </h4>
                            <ul className="list-disc list-inside text-left space-y-2 text-gray-700">
                                <li>
                                    Organic gardening practices only (no synthetic pesticides or
                                    herbicides).
                                </li>
                                <li>Keep your plot and surrounding pathways tidy.</li>
                                <li>Water conservation is highly encouraged.</li>
                                <li>
                                    Participate in at least two community workdays per season.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Volunteer Section */}
                <section id="volunteer" className="py-20 bg-green-50">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center text-green-700 mb-12">
                            Volunteer With Us
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h4 className="text-2xl font-semibold mb-4">Why Volunteer?</h4>
                                <p className="mb-6 text-gray-700 leading-relaxed">
                                    Volunteering is the heart of GreenRoots. Learn new skills,
                                    meet neighbors, and make a tangible impact on the environment.
                                    We have roles for every skill level and time commitment.
                                </p>
                                <ul className="space-y-3 text-gray-700">
                                    <li>
                                        <i className="fas fa-check-circle text-green-600 mr-2"></i>
                                        <strong>Watering Team:</strong> Keep plants hydrated.
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-green-600 mr-2"></i>
                                        <strong>Compost Crew:</strong> Manage compost bins.
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-green-600 mr-2"></i>
                                        <strong>Event Support:</strong> Help at workshops & events.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-8">
                                <h4 className="text-2xl font-bold text-green-700 mb-6 text-center">
                                    Sign-Up Form
                                </h4>
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-600 mb-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={volunteerForm.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={volunteerForm.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={volunteerForm.phone}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-1">
                                            Area of Interest
                                        </label>
                                        <select
                                            name="interest"
                                            value={volunteerForm.interest}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
                                        >
                                            <option>Watering</option>
                                            <option>Composting</option>
                                            <option>Event Setup</option>
                                            <option>General Help</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                                    >
                                        Join as Volunteer
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Events */}
                <section id="events" className="py-20">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center text-green-700 mb-12">
                            Upcoming Events
                        </h3>
                        <div className="space-y-8 max-w-4xl mx-auto">
                            {[
                                {
                                    month: "OCT",
                                    day: "12",
                                    title: "Annual Harvest Festival",
                                    time: "11:00 AM - 3:00 PM",
                                    desc: "A day of fun, food, and community with live music, games, and potluck lunch!",
                                    action: "RSVP Now",
                                },
                                {
                                    month: "NOV",
                                    day: "09",
                                    title: "Winter Composting Workshop",
                                    time: "10:00 AM - 12:00 PM",
                                    desc: "Learn to keep compost piles active during winter with expert Jane Doe.",
                                    action: "Register",
                                },
                            ].map((event, i) => (
                                <div
                                    key={i}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
                                >
                                    <div className="bg-green-600 text-white text-center px-6 py-4 flex flex-col justify-center">
                                        <p className="text-xl font-bold">{event.month}</p>
                                        <p className="text-4xl font-extrabold">{event.day}</p>
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h4 className="text-xl font-semibold text-green-800">
                                            {event.title}
                                        </h4>
                                        <p className="text-gray-500">{event.time}</p>
                                        <p className="mt-3 text-gray-700">{event.desc}</p>
                                    </div>
                                    <div className="p-6 flex items-center">
                                        <button className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-md transition">
                                            {event.action}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-20 bg-gray-900 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                        <p className="mb-2">123 Garden Lane, Greentown, USA</p>
                        <p className="mb-6">
                            Email:{" "}
                            <a
                                href="mailto:contact@greenroots.com"
                                className="underline hover:text-green-400"
                            >
                                contact@greenroots.com
                            </a>{" "}
                            | Phone: (123) 456-7890
                        </p>
                        <div className="flex justify-center space-x-6 text-2xl mb-8">
                            <a href="#" className="hover:text-green-400">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="hover:text-green-400">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="hover:text-green-400">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                title="Google Map of GreenRoots Garden"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086319859239!2d144.9537353155042!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1617702856407!5m2!1sen!2sau"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-green-800 text-white text-center py-6">
                <p>&copy; 2025 GreenRoots Community Garden. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
