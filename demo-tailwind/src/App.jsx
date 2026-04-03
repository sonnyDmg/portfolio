export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen text-gray-800 font-inter">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold text-indigo-600 tracking-tight hover:scale-105 transition-transform duration-200">
          Portfolio
        </h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 animate-gradient">
          Hi, I’m Sonny Gonzalez
        </h1>
        <img
          src="/headshot.jpg"
          alt="Sonny"
          className="w-32 h-32 rounded-full object-cover mt-6 shadow-lg"
        />
        <p className="mt-6 text-lg text-gray-600 max-w-md">
          Computer Science student interested in web development, React, and backend engineering.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-indigo-700 transition-all duration-300"
        >
          View My Work
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-10 max-w-2xl mx-auto text-center fade-in">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a CS student at UNL with a strong interest in building creative web applications.
          I love working with modern frontend frameworks like React and learning about complex backend systems.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="p-10 bg-white/60 backdrop-blur-sm mt-10 fade-in">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">

          {/* CARD */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-lg font-semibold text-indigo-600">Hand Hygiene App</h3>
            <p className="text-gray-600 mt-2">
              Flask-based app for collecting and visualizing hospital audit data efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-lg font-semibold text-indigo-600">Marketplace App</h3>
            <p className="text-gray-600 mt-2">
              Full-stack project featuring user authentication, product listings, and database integration.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-lg font-semibold text-indigo-600">Portfolio Website</h3>
            <p className="text-gray-600 mt-2">
              Custom-built personal site using React, Tailwind, and smooth scroll animations.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white fade-in">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg">Email me at <span className="font-semibold">gonzsonn@gmail.com</span></p>
        <p className="text-lg">Phone Number: <span className="font-semibold">(308) 760-2088</span></p>
      </section>

    </div>
  );
}
