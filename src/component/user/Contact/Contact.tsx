import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (formData.website && !/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(formData.website)) {
      newErrors.website = "Website URL is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsSubmitting(true);

        // Replace these with your actual EmailJS service ID, template ID, and public key
        const serviceId = "service_2dk5ob9";
        const templateId = "template_j5b3rem";
        const publicKey = "_nKy_Z5CyQX5Nz_Hi";

        // Send the email using EmailJS
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current!,
          publicKey
        );

        console.log("Email sent successfully...............", result.text);
        toast.success("Your message has been sent successfully!");

        // Reset form after successful submission
        setFormData({
          name: "",
          organization: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
      } catch (error) {
        console.error("Email sending failed...........", error);
        toast.error("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Let's Talk Card */}
          <motion.div
            variants={itemVariants}
            className="bg-teal-800 rounded-lg shadow-md overflow-hidden text-white"
          >
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
              <div className="space-y-2">
                <p>Phone: ( +91 ) -  9 1 4 8 7 0 3 3 9 6</p>
                {/* <p>Fax: 123 456 789</p> */}
              </div>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">E-mail Us</h3>
              <div className="space-y-2 text-gray-600">
                <p>info@yourdomain.com</p>
                <p>hr@yourdomain.com</p>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Contact Form */}
        <motion.div variants={itemVariants} className="mt-16 rounded-lg shadow-md p-8">

          <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">Get In Touch</h2>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full text-gray-800 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-200 mb-1">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full  text-gray-800 px-4 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full  text-gray-800 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full  text-gray-800 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  placeholder="+1 (123) 456-7890"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="website" className="block text-sm font-medium text-gray-200 mb-1">
                  Website or Social Media Link
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full  text-gray-800 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.website ? "border-red-500" : "border-gray-200"
                    }`}
                  placeholder="https://example.com"
                />
                {errors.website && <p className="mt-1 text-sm text-red-600">{errors.website}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full  text-gray-800 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-lg font-medium rounded-md text-white ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default Contact;