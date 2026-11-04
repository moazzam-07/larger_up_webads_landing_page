import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'studio_owner',
    notes: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Phone validation
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a valid 10-digit phone / WhatsApp number.');
      return;
    }

    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'LargerUp Landing Page',
      };

      const webhookUrl = localStorage.getItem('LARGERUP_LEAD_WEBHOOK');
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#141414', '#707070', '#f3f3f3'],
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please check your connection or contact us directly.');
    }
  };

  return (
    <section id="apply-form" className="py-12 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-3.5">
          <span>Get Started</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight mb-2.5 sm:mb-3 leading-tight">
          Book your free consultation.
        </h2>
        <p className="text-xs sm:text-base text-muted font-light leading-relaxed">
          Tell us about your interior studio, and we’ll reach out on WhatsApp to discuss how to build your client pipeline.
        </p>
      </div>

      {/* Form Surface */}
      <div className="bg-canvas border border-hairline rounded-3xl p-5 sm:p-10 relative overflow-hidden">
        {status === 'success' ? (
          <div className="text-center py-8 sm:py-10 flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-canvas-soft border border-hairline flex items-center justify-center text-ink mb-4 sm:mb-5">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-ink" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-2">
              Thank You, {formData.fullName}.
            </h3>
            <p className="text-muted text-xs sm:text-sm max-w-md mx-auto mb-4 leading-relaxed">
              We received your details. Our team will message you on WhatsApp ({formData.phone}) within 4 business hours to schedule your consultation call.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Row 1: Full Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink mb-1.5 sm:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ar. Sameer Roy"
                  className="w-full bg-field text-ink placeholder:text-muted/60 text-base rounded-2xl px-4 py-3 sm:py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink mb-1.5 sm:mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="sameer@yourstudio.com"
                  className="w-full bg-field text-ink placeholder:text-muted/60 text-base rounded-2xl px-4 py-3 sm:py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all"
                />
              </div>
            </div>

            {/* Row 2: WhatsApp Number & Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink mb-1.5 sm:mb-2">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-field text-ink placeholder:text-muted/60 text-base rounded-2xl px-4 py-3 sm:py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink mb-1.5 sm:mb-2">
                  Studio Owner or Freelancer? *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-field text-ink text-base rounded-2xl px-4 py-3 sm:py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all cursor-pointer"
                >
                  <option value="studio_owner">Studio Owner / Principal Architect</option>
                  <option value="freelancer">Independent Designer / Freelancer</option>
                  <option value="turnkey_firm">Turnkey Design Firm</option>
                </select>
              </div>
            </div>

            {/* Row 3: Optional Website / Instagram */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink mb-1.5 sm:mb-2">
                Studio Website / Instagram (Optional)
              </label>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="instagram.com/your_design_studio or portfolio"
                className="w-full bg-field text-ink placeholder:text-muted/60 text-base rounded-2xl px-4 py-3 sm:py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all"
              />
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl font-medium">
                {errorMessage}
              </div>
            )}

            {/* Single Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-ink hover:bg-ink-soft disabled:opacity-50 text-white text-base font-semibold py-3.5 sm:py-4 px-6 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-sm"
              >
                {status === 'submitting' ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    <span>Book Free Consultation</span>
                    <ArrowUpRight className="w-4 h-4 text-white/80" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-muted pt-2 border-t border-hairline-soft">
              <ShieldCheck className="w-3.5 h-3.5 text-ink" />
              <span>Your contact details are strictly kept private and confidential.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
