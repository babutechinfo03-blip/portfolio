import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Send, MapPin, Phone, CheckCircle2, 
  AlertCircle, Loader2, Sparkles, ArrowUpRight, 
  Copy, Check, MessageSquare, Clock, Globe, Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolio';

// 4-Point Sparkle Star Component
function StarSparkle({ className = '', style = {} }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

const INQUIRY_TOPICS = [
  { label: '💼 Full-Time Software Role', message: "Hi Babu, I came across your portfolio and would love to discuss a Software Developer role at our organization." },
  { label: '🚀 Web Project / Freelance', message: "Hi Babu, I have a web application project and would like to collaborate with you to build it." },
  { label: '☕ Quick Tech Chat / Connect', message: "Hi Babu, I loved your recommendation systems and developer work. Let's connect!" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleTopicClick = (topic) => {
    setFormData(prev => ({
      ...prev,
      topic: topic.label,
      message: topic.message
    }));
    if (errors.message) {
      setErrors(prev => ({ ...prev, message: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or project details';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Message should be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('');

    try {
      const recipientEmail = portfolioData.about?.email || portfolioData.contact?.email || 'babutechinfo03@gmail.com';
      const web3AccessKey = portfolioData.contact?.web3forms_access_key;

      let isSuccess = false;

      if (web3AccessKey && web3AccessKey.trim().length > 0) {
        // Option 1: Web3Forms API (Direct JSON delivery to Gmail)
        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3AccessKey.trim(),
            name: formData.name,
            email: formData.email,
            subject: `🚀 Portfolio Message from ${formData.name}`,
            topic: formData.topic || 'General Inquiry',
            message: formData.message,
            from_name: formData.name
          })
        });

        const web3Data = await web3Response.json();
        if (web3Data.success) {
          isSuccess = true;
        }
      } else {
        // Option 2: FormSubmit.co (Instant FormData delivery to Gmail)
        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('_subject', `🚀 Portfolio Inquiry from ${formData.name} (${formData.topic || 'General Contact'})`);
        formPayload.append('topic', formData.topic || 'General Inquiry');
        formPayload.append('message', formData.message);
        formPayload.append('_template', 'table');
        formPayload.append('_captcha', 'false');

        const formSubmitResponse = await fetch(`https://formsubmit.co/${recipientEmail}`, {
          method: 'POST',
          body: formPayload,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (formSubmitResponse.ok || formSubmitResponse.status === 200) {
          isSuccess = true;
        }
      }

      if (isSuccess) {
        setStatus('success');
        setStatusMessage('Thank you! Your message and contact details have been sent directly to Babu via email. You will receive a response soon.');
        
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#E3280C', '#FF4D4D', '#000000', '#FFFFFF']
        });

        setFormData({ name: '', email: '', topic: '', message: '' });
      } else {
        throw new Error('Submission error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setStatusMessage(`Unable to send directly via server. Please email Babu at ${portfolioData.about?.email || 'babutechinfo03@gmail.com'}`);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#FAFAFA] text-neutral-900 overflow-hidden border-t border-neutral-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-neutral-950/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Live Availability Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                Available for Roles & Projects
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-neutral-950 tracking-tight leading-[1.08]">
              Let's create something <br />
              <span className="text-[#E3280C]">exceptional together.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans mt-4">
              Whether you have an open Software Developer position, an internship opportunity, or an exciting web engineering project, let's connect.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-600 shadow-sm">
            <Clock size={14} className="text-[#E3280C]" />
            <span>TIMEZONE: IST (UTC +5:30)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Direct Connect & Quick Action Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
              Direct Contact & Channels
            </div>

            {/* Email Card with 1-Click Copy */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 rounded-[28px] bg-white border-2 border-neutral-200 hover:border-[#E3280C] transition-all shadow-sm group relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E3280C] group-hover:bg-[#E3280C] group-hover:text-white transition-colors flex items-center justify-center shrink-0 shadow-sm">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400">Email Address</div>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-[#E3280C] transition-colors break-all"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(portfolioData.contact.email, 'email')}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-xl bg-neutral-100 hover:bg-[#E3280C] hover:text-white text-neutral-600 transition-all cursor-pointer shrink-0"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
              </div>
              {copiedEmail && (
                <div className="mt-2 text-xs font-mono text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Email copied to clipboard!
                </div>
              )}
            </motion.div>

            {/* Phone & WhatsApp Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 rounded-[28px] bg-white border-2 border-neutral-200 hover:border-[#E3280C] transition-all shadow-sm group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E3280C] group-hover:bg-[#E3280C] group-hover:text-white transition-colors flex items-center justify-center shrink-0 shadow-sm">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400">Phone / WhatsApp</div>
                    <a
                      href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}
                      className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-[#E3280C] transition-colors"
                    >
                      {portfolioData.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(portfolioData.contact.phone, 'phone')}
                  title="Copy phone to clipboard"
                  className="p-2.5 rounded-xl bg-neutral-100 hover:bg-[#E3280C] hover:text-white text-neutral-600 transition-all cursor-pointer shrink-0"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
              </div>
              {copiedPhone && (
                <div className="mt-2 text-xs font-mono text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Phone number copied!
                </div>
              )}
            </motion.div>

            {/* Location & Relocation Card */}
            <div className="p-6 rounded-[28px] bg-white border-2 border-neutral-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 shadow-sm">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-400">Location Base</div>
                <div className="text-sm font-bold text-neutral-900">
                  {portfolioData.contact.location}
                </div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">
                  Open to Hybrid, On-site & Remote Roles
                </div>
              </div>
            </div>

            {/* Social Profile Badges */}
            <div className="pt-2">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Verified Social Profiles
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white hover:bg-[#E3280C] text-neutral-900 hover:text-white border-2 border-neutral-200 hover:border-[#E3280C] transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon size={18} />
                    <span className="text-xs font-bold font-sans">GitHub</span>
                  </div>
                  <ArrowUpRight size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white hover:bg-[#E3280C] text-neutral-900 hover:text-white border-2 border-neutral-200 hover:border-[#E3280C] transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon size={18} />
                    <span className="text-xs font-bold font-sans">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Live Interactive Message Terminal */}
          <div className="lg:col-span-7 relative">
            
            {/* Floating Sparkles around Contact Form */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 z-20 hidden sm:block pointer-events-none"
            >
              <StarSparkle className="w-9 h-9 fill-[#E3280C] drop-shadow-md" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -bottom-6 -left-6 z-20 hidden sm:block pointer-events-none"
            >
              <StarSparkle className="w-8 h-8 fill-neutral-950 drop-shadow-md" />
            </motion.div>

            <div className="p-8 sm:p-12 rounded-[36px] bg-white border-2 border-neutral-200 shadow-2xl relative overflow-hidden">
              
              {/* Punch Hole Header */}
              <div className="w-5 h-5 rounded-full bg-[#E3280C] mx-auto -mt-4 mb-8 shadow-inner" />

              <h3 className="text-2xl sm:text-3xl font-sans font-black text-neutral-950 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-neutral-600 text-sm mb-6 font-sans">
                Select a quick topic below or type your inquiry to get in touch directly.
              </p>

              {/* Quick Inquiry Topic Selector Chips */}
              <div className="space-y-2 mb-8">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  Quick Inquiry Templates:
                </div>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TOPICS.map((topic, tIdx) => (
                    <button
                      key={tIdx}
                      type="button"
                      onClick={() => handleTopicClick(topic)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        formData.topic === topic.label
                          ? 'bg-[#E3280C] text-white font-bold shadow-sm'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200/80'
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-3xl bg-red-50 border-2 border-[#E3280C]/40 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-red-100 text-[#E3280C] mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-sans font-bold text-neutral-950">Message Sent Successfully!</h4>
                  <p className="text-neutral-700 text-sm max-w-md mx-auto">
                    {statusMessage}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-full bg-[#E3280C] hover:bg-neutral-950 text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Carter"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-[#F9FAFB] border-2 ${
                        errors.name ? 'border-[#E3280C]' : 'border-neutral-200 focus:border-[#E3280C]'
                      } text-neutral-900 placeholder-neutral-400 focus:bg-white focus:outline-none transition-all text-sm`}
                    />
                    {errors.name && (
                      <p className="text-[#E3280C] text-xs mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-[#F9FAFB] border-2 ${
                        errors.email ? 'border-[#E3280C]' : 'border-neutral-200 focus:border-[#E3280C]'
                      } text-neutral-900 placeholder-neutral-400 focus:bg-white focus:outline-none transition-all text-sm`}
                    />
                    {errors.email && (
                      <p className="text-[#E3280C] text-xs mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your opportunity, project scope, or idea..."
                      className={`w-full px-4 py-3.5 rounded-2xl bg-[#F9FAFB] border-2 ${
                        errors.message ? 'border-[#E3280C]' : 'border-neutral-200 focus:border-[#E3280C]'
                      } text-neutral-900 placeholder-neutral-400 focus:bg-white focus:outline-none transition-all text-sm resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[#E3280C] text-xs mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error Alert if any */}
                  {status === 'error' && statusMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{statusMessage}</p>
                        <a 
                          href={`mailto:${portfolioData.about?.email || 'babutechinfo03@gmail.com'}?subject=Inquiry from ${encodeURIComponent(formData.name || 'Portfolio Visitor')}&body=${encodeURIComponent(formData.message || '')}`}
                          className="inline-block mt-1 font-bold underline hover:text-red-900"
                        >
                          Click to send via your Email client →
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 px-8 rounded-2xl bg-[#E3280C] hover:bg-neutral-950 text-white font-sans font-bold text-base shadow-xl shadow-red-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
