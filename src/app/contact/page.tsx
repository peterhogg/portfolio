
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - My Portfolio",
  description: "Get in touch with me.",
};

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section id="contact" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <div className="text-center mb-8">
          <p className="text-lg">You can reach me at <a href="mailto:hoggarth.peter@gmail.com" className="text-blue-500 hover:underline">hoggarth.peter@gmail.com</a></p>
          <p className="text-lg">My GitHub profile is <a href="https://github.com/peterhogg" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">here</a></p>
        </div>
        <p className="text-center text-gray-500 mb-8">Please note that the contact form below is not yet functional.</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
