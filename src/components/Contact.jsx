import { motion } from "motion/react";
import z from "zod";
import { useActionState } from "react";

export default function Contact() {
  // contact form schema
  const ContactSchema = z.object({
    name: z.string().trim().min(3, "Full name must be at least 3 characters"),
    email: z.string().trim(),
    message: z.string().trim().min(5, "Message must be at least 5 characters"),
  });

  // Contact handler function
  async function submitContact(prevState, formData) {
    // validate form data
    const validated = ContactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    // check for field errors
    if (!validated.success) {
      return {
        errors: validated.error.flatten().fieldErrors,
        success: false,
      };
    }

    // send API request
    try {
      const response = await axios.post(
        `${import.meta.VITE_PUBLIC_URL}/api/contact`,
        validated.data,
      );

      // check if success
      if (response.status === 201) {
        alert("Message successfully delivered!");
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      console.log("Failed to send API request");
    }

    return {
      success: true,
      message: "Message sent!",
    };
  }

  const [state, action, isPending] = useActionState(submitContact, {
    errors: {},
  });
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-extrabold tracking-wider uppercase text-lg mb-3 block">
            Let's connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-custom text-neutral-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 font-custom font-mono mb-12">
            I'm currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>

          <form
            action={action}
            className="text-left space-y-6 bg-slate-100 p-8 rounded-3xl shadow-lg border border-gray-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-lg font-medium text-neutral-800">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white placeholder-slate-500"
                  placeholder="Enter your full names"
                />
                {state.errors.name && (
                  <p className="text-sm text-red-400 mt-2 ml-3">
                    {state.errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium text-neutral-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white placeholder-slate-500"
                  placeholder="your-email@example.com"
                />
                {state.errors.email && (
                  <p className="text-sm text-red-400 mt-2 ml-3">
                    {state.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-neutral-800">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white resize-none placeholder-slate-500"
                placeholder="Share your thoughts..."
              />
              {state.errors.message && (
                <p className="text-sm text-red-400 mt-2 ml-3">
                  {state.errors.message}
                </p>
              )}
            </div>

            <button
              disabled={isPending}
              className="w-full md:w-auto px-8 py-4 bg-gray-700 font-custom text-lg text-white rounded-3xl font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isPending ?
                <Loader2 className="w-5 h-5 ml-15 animate-spin" color="white" />
              : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
