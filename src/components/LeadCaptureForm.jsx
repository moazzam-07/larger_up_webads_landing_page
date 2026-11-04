import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Lock, Sparkles, Building2, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'studio_owner',
    city: 'Mumbai',
    minimumBudget: '₹25L - ₹50L',
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

    // Basic Indian phone validation
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a valid 10-digit phone / WhatsApp number.');
      return;
    }

    try {
      // Simulate / forward payload to endpoint (e.g. Resend or Webhook)
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'LargerUp Tier-1 Interior WebAds Funnel',
      };

      // If user provides a custom webhook URL in localStorage or env, we send to it
      const webhookUrl = localStorage.getItem('LARGERUP_LEAD_WEBHOOK');
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // Simulated instantaneous submission
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      // Fire celebration confetti!
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#141414', '#0066ff', '#f3f3f3'],
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please check your connection or contact us directly.');
    }
  };

  return (
    <section id="apply-form" className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-4">
          <Lock className="w-3.5 h-3.5" />
          <span>Confidential Territory Audit</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
          Lock in your city's exclusive interior pipeline.
        </h2>
        <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
          We onboard a strict maximum of 3 interior studios per metro to protect local exclusivity. Submit your studio details below to verify territory availability.
        </p>
      </div>

      {/* Mobbin Card Surface */}
      <div className="bg-canvas border border-hairline rounded-3xl p-6 sm:p-12 relative overflow-hidden">
        {status === 'success' ? (
          <div className="text-center py-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-canvas-soft border border-hairline flex items-center justify-center text-ink mb-6">
              <CheckCircle2 className="w-8 h-8 text-ink" />
            </div>
            <span className="text-xs font-bold uppercase text-accent tracking-wider mb-2">Application Received</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-3">
              Territory Audit Reserved For {formData.fullName}.
            </h3>
            <p className="text-muted text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Our lead strategist will review your studio's portfolio for {formData.city} and WhatsApp you within 4 business hours to schedule your exclusive territory briefing.
            </p>
            <div className="bg-canvas-soft border border-hairline rounded-2xl p-4 text-xs text-muted max-w-md w-full text-left">
              <p className="font-semibold text-ink mb-1">What happens next:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>We verify zero micro-market conflict in {formData.city}.</li>
                <li>We prepare a custom 14-day pipeline projection model.</li>
                <li>Direct WhatsApp invite sent to {formData.phone}.</li>
              </ul>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ar. Sameer Kapoor"
                  className="w-full bg-field text-ink placeholder:text-muted/60 text-sm rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="sameer@yourstudio.com"
                  className="w-full bg-field text-ink placeholder:text-muted/60 text-sm rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all"
                />
              </div>
            </div>

            {/* Row 2: Phone/WhatsApp & Role/Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-field text-ink placeholder:text-muted/60 text-sm rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Are You a Studio Owner or Freelancer? *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-field text-ink text-sm rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all cursor-pointer"
                >
                  <option value="studio_owner">Studio Owner / Principal Architect (Physical Office)</option>
                  <option value="independent_designer">Independent Interior Designer / Freelancer</option>
                  <option value="turnkey_contractor">Turnkey Design-and-Build Firm</option>
                  <option value="partner_lead">Design Partner / Studio Lead</option>
                </select>
              </div>
            </div>

            {/* Row 3: Target Metro & Minimum Project Ticket Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Primary Operating Metro *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-field text-ink text-sm rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all cursor-pointer"
                >
                  <option value="Mumbai">Mumbai & MMR (Bandra, South Mumbai, Worli, Powai)</option>
                  <option value="Delhi NCR">Delhi NCR (South Delhi, Gurugram Golf Course, Noida)</option>
                  <option value="Bangalore">Bangalore (Indiranagar, Whitefield, Lavelle Rd, Sarjapur)</option>
                  <option value="Hyderabad">Hyderabad (Jubilee Hills, Banjara Hills, Gachibowli)</option>
                  <option value="Pune">Pune (Kalyani Nagar, Koregaon Park, Baner)</option>
                  <option value="Chennai">Chennai (Adyar, Poes Garden, ECR)</option>
                  <option value="Kolkata">Kolkata (Alipore, Salt Lake, New Town)</option>
                  <option value="Other">Other Emerging Tier-1 City</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Minimum Project Ticket Size You Accept *
                </label>
                <select
                  name="minimumBudget"
                  value={formData.minimumBudget}
                  onChange={handleChange}
                  className="w-full bg-field text-ink text-sm rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all cursor-pointer"
                >
                  <option value="₹15L - ₹25L">₹15 Lakhs – ₹25 Lakhs (Standard 3BHK)</option>
                  <option value="₹25L - ₹50L">₹25 Lakhs – ₹50 Lakhs (Premium 3BHK/4BHK)</option>
                  <option value="₹50L - ₹1Cr">₹50 Lakhs – ₹1 Crore (Luxury Residence / Duplex)</option>
                  <option value="₹1Cr+">₹1 Crore+ (Bespoke Villa / Penthouse Architecture)</option>
                </select>
              </div>
            </div>

            {/* Optional Studio Note */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                Studio Website / Instagram Profile (Optional)
              </label>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="e.g. instagram.com/your_design_studio or portfolio link"
                className="w-full bg-field text-ink placeholder:text-muted/60 text-sm rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-ink transition-all"
              />
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl font-medium">
                {errorMessage}
              </div>
            )}

            {/* Submit Button (Mobbin button-primary pill) */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-ink hover:bg-ink-soft disabled:opacity-50 text-white text-base font-semibold py-4 px-8 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-sm"
              >
                {status === 'submitting' ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Checking Territory Availability...</span>
                  </div>
                ) : (
                  <>
                    <span>Claim Your Exclusive Territory Audit</span>
                    <ArrowUpRight className="w-5 h-5 text-white/80" />
                  </>
                )}
              </button>
            </div>

            {/* Trust Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-muted pt-4 border-t border-hairline-soft gap-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-ink" />
                <span>100% Strict NDA & Non-Compete Guarantee per territory</span>
              </div>
              <span>No spam. No cold calling. Direct partner review.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

