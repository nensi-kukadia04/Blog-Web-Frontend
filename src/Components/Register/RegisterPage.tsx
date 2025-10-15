import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFeatherAlt, FaPenNib } from "react-icons/fa";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-200 overflow-hidden relative">

      {/* Animated background blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-indigo-400 rounded-full filter blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-blue-400 rounded-full filter blur-3xl"
      ></motion.div>

      {/* Left Section - Introduction */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full flex flex-col justify-center px-12 py-20 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white relative overflow-hidden"
      >
        {/* glowing orb */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"
        ></motion.div>

        {/* Floating fairy particles on left */}
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-20 left-20 w-6 h-6 bg-white/20 rounded-full blur-md"
        ></motion.div>
        <motion.div
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-32 left-40 w-4 h-4 bg-pink-300/20 rounded-full blur-sm"
        ></motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 mb-8 z-10"
        >
          <FaPenNib className="text-4xl drop-shadow-lg" />
          <h1 className="text-4xl font-bold tracking-wide">Blogify</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-extrabold leading-tight mb-6"
        >
          Create. Inspire. <br /> Connect 🌟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-blue-100 text-lg leading-relaxed max-w-md z-10"
        >
          Join <span className="font-semibold text-white">Blogify</span> today and start your creative journey.
          Build your profile, share stories, and engage with a world of readers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 z-10"
        >
          <button className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow-lg hover:shadow-2xl hover:bg-blue-50 transition-all duration-300">
            Explore Community
          </button>
        </motion.div>
      </motion.div>

      {/* Right Section - Register Form */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full flex items-center justify-center py-16 px-6 md:px-10 bg-white/70 backdrop-blur-lg relative overflow-hidden"
      >
        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 w-5 h-5 bg-indigo-400/30 rounded-full blur-md"
        ></motion.div>

        <motion.div
          animate={{ y: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-16 w-8 h-8 bg-blue-400/20 rounded-full blur-lg"
        ></motion.div>

        <motion.div
          animate={{ y: [-15, 10, -15], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-6 h-6 bg-pink-400/20 rounded-full blur-md"
        ></motion.div>

        {/* Form Card */}
        <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 z-10 overflow-hidden">
          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-3 left-10 w-3 h-3 bg-indigo-300/40 rounded-full blur-sm"
          ></motion.div>

          <motion.div
            animate={{ y: [-10, 0, -10], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-4 h-4 bg-purple-300/30 rounded-full blur-sm"
          ></motion.div>

          {/* Logo */}
          <motion.div
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 p-4 rounded-2xl shadow-lg">
              <FaFeatherAlt className="text-white text-3xl" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Create an Account</h1>
            <p className="text-slate-600">Join our creative community today!</p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative">
              <FaUserAlt className="absolute top-3.5 left-4 text-slate-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white/70 hover:bg-white transition-all duration-200"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-4 text-slate-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white/70 hover:bg-white transition-all duration-200"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-3.5 left-4 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white/70 hover:bg-white transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3.5 right-4 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="relative">
              <FaLock className="absolute top-3.5 left-4 text-slate-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-12 pr-12 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white/70 hover:bg-white transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-3.5 right-4 text-slate-400 hover:text-slate-600"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Sign Up
            </motion.button>
          </motion.form>

          {/* Divider */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-slate-500">Or sign up with</span>
            </div>
          </div>

          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 grid grid-cols-2 gap-3"
          >
            <button className="flex items-center justify-center py-3.5 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 transition-all duration-200">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium text-slate-700">Google</span>
            </button>
            <button className="flex items-center justify-center py-3.5 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 transition-all duration-200">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium text-slate-700">GitHub</span>
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center text-sm text-slate-600"
          >
            Already have an account?
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-700 ml-1">
              Sign in
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
