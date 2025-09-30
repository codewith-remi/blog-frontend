import React, { useState } from "react";
import BlogLayout from "../../components/layouts/BlogLayout/BlogLayout";
import {
  LuMessageSquare,
  LuMail,
  LuPhone,
  LuSmartphone,
  LuUsers,
  LuWrench,
  LuBriefcase,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
} from "react-icons/lu";
import { SiTiktok } from "react-icons/si";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been sent. We'll respond soon.`
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <BlogLayout>
      <div className="flex flex-col items-center text-center mb-12">
        {/* Small "Get In Touch" badge */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Get In Touch
        </span>

        {/* Main Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We'd Love to <span className="text-sky-500">Hear From You</span>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Have questions, suggestions, or want to collaborate? Our team is here
          to help you make the most of your experience with Remi Blog and the IT
          community.
        </p>
      </div>

      {/* Form and Quick Contact */}
      <div className="flex flex-col md:flex-row gap-10 mb-12 justify-center">
        {/* Left: Contact Form */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <LuMessageSquare className="text-2xl text-blue-600" />
            <h2 className="text-xl font-semibold">Send us a Message</h2>
          </div>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-medium mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="remi@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry.. "
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-400 font-medium px-6 py-2.5 rounded-lg text-white hover:text-white transition-colors cursor-pointer hover:shadow-2xl hover:shadow-cyan-200"
              >
                Send Message
              </button>
            </div>
         </form>
        </div>


        {/* Right: Quick Contact */}
              <div className="md:w-1/3 flex flex-col gap-4 p-6 rounded-xl shadow-md bg-white">
        {/* Quick Contact Header */}
        <div className="flex items-center gap-3 mb-4">
          <LuMessageSquare className="text-2xl text-blue-600" />
          <h2 className="text-xl font-semibold">Quick Contact</h2>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border border-gray-200 rounded-lg">
          <LuMail className="text-blue-600 text-xl" />
          <div>
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-gray-600">Send us an email anytime</p>
            <a
              href="mailto:codewithremi40@gmail.com"
              className="text-sky-500 font-medium hover:underline"
            >
              codewithremi40@gmail.com
            </a>
          </div>
        </div>

        {/* Call */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border border-gray-200 rounded-lg">
          <LuPhone className="text-blue-600 text-xl" />
          <div>
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-gray-600">Mon-Fri from 8am to 6pm</p>
            <a
              href="tel:+237652343288"
              className="text-sky-500 font-medium hover:underline"
            >
              +237 652 343 288
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border border-gray-200 rounded-lg">
          <LuSmartphone className="text-blue-600 text-xl" />
          <div>
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-gray-600">Chat with us instantly</p>
            <a
              href="https://wa.me/237652486450"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-medium hover:underline"
            >
              +237 652 486 450
            </a>
          </div>
        </div>
      </div>

      </div>

      {/* Support Options */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Support Options</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Choose the support option that best fits your needs and get the help you
          deserve.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-md transition-shadow text-center">
          <LuUsers className="text-3xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Community Support</h3>
          <p className="text-gray-600 mb-2">
            Get help from our community members
          </p>
          <p className="text-gray-500 text-sm">24/7</p>
          <p className="text-gray-500 text-sm">Response: &lt; 1 hour</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-md transition-shadow text-center">
          <LuWrench className="text-3xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Technical Support</h3>
          <p className="text-gray-600 mb-2">
            Direct help from our technical team
          </p>
          <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm PST</p>
          <p className="text-gray-500 text-sm">Response: &lt; 4 hours</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-md transition-shadow text-center">
          <LuBriefcase className="text-3xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Business Inquiries</h3>
          <p className="text-gray-600 mb-2">
            Partnerships and business opportunities
          </p>
          <p className="text-gray-500 text-sm">Mon-Fri, 9am-5pm PST</p>
          <p className="text-gray-500 text-sm">Response: &lt; 24 hours</p>
        </div>
      </div>

      {/* Follow Us */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Follow Us</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Stay connected and get the latest updates from our community across all
          social platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
          <LuFacebook className="text-3xl text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold mb-1">Facebook</h3>
          <p className="text-gray-600 mb-1">@remiblog</p>
          <p className="text-gray-500 mb-2">12.5K followers</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-full transition-all">
            Follow
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
          <LuInstagram className="text-3xl text-pink-500 mx-auto mb-2" />
          <h3 className="font-semibold mb-1">Instagram</h3>
          <p className="text-gray-600 mb-1">@remi_blog</p>
          <p className="text-gray-500 mb-2">8.2K followers</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-full transition-all">
            Follow
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
          <SiTiktok className="text-3xl text-black mx-auto mb-2" />
          <h3 className="font-semibold mb-1">TikTok</h3>
          <p className="text-gray-600 mb-1">@remiblog</p>
          <p className="text-gray-500 mb-2">15.7K followers</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-full transition-all">
            Follow
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
          <LuLinkedin className="text-3xl text-blue-700 mx-auto mb-2" />
          <h3 className="font-semibold mb-1">LinkedIn</h3>
          <p className="text-gray-600 mb-1">Remi Blog</p>
          <p className="text-gray-500 mb-2">9.3K followers</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-full transition-all">
            Follow
          </button>
        </div>
      </div>
    </BlogLayout>
  );
};

export default ContactUs;
