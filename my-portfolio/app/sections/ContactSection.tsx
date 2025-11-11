export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-6">
          Interested in collaborating or just want to say hi? Feel free to reach out!
        </p>
        <a
          href="mailto:john.doe@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
