'use client';

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center bg-white">
      <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-6 shadow-lg" />
      <h1 className="text-4xl font-bold">Hi, I'm <span className="text-blue-600">John Doe</span></h1>
      <p className="mt-4 text-gray-600 max-w-md">
        I'm a Front-End Developer passionate about building clean, modern web experiences using Next.js and React.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
