import React from 'react';
import LargerUpLogo from './LargerUpLogo';
import PushpinTearFooter from './ui/pushpin-tear-footer';

export default function Footer({ onOpenForm }) {
  const handleConsultation = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onOpenForm) {
      onOpenForm();
    } else {
      const el = document.getElementById('apply-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const columns = [
    {
      title: 'explore',
      links: [
        { label: 'Creations', href: '#creations' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'How It Works', href: '#how-it-works' },
      ],
      cta: {
        label: 'consultation.',
        href: '#apply-form',
        onClick: handleConsultation,
      },
    },
    {
      title: 'studio',
      links: [
        { label: 'Why Us', href: '#comparison' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: {
        label: 'whatsapp.',
        href: 'https://wa.me/917980817657?text=Hi%20LargerUp%20team,%20I%20came%20from%20your%20landing%20page.%20I%20would%20like%20to%20know%20more%20about%20this!',
      },
    },
  ];

  const socials = [
    {
      icon: 'chat',
      label: 'WhatsApp',
      href: 'https://wa.me/917980817657?text=Hi%20LargerUp%20team,%20I%20came%20from%20your%20landing%20page.%20I%20would%20like%20to%20know%20more%20about%20this!',
    },
    {
      icon: 'mail',
      label: 'Email Inquiries',
      href: 'mailto:thelargerup@gmail.com',
    },
  ];

  const sideLinks = [
    { icon: 'shield', label: 'privacy policy', href: '#' },
    { icon: 'doc', label: 'terms of service', href: '#' },
  ];

  return (
    <div className="w-full mt-10 sm:mt-16 overflow-hidden">
      <PushpinTearFooter
        brand="LargerUp"
        name="LargerUp"
        logo={
          <div className="flex items-center gap-2.5 select-none">
            <div className="w-8 h-8 rounded-xl bg-white text-ink flex items-center justify-center p-1.5 shadow-sm">
              <LargerUpLogo className="w-full h-full text-ink" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">LargerUp</span>
          </div>
        }
        logoHref="#"
        email="thelargerup@gmail.com"
        newsletter={{
          label: 'get interior studio growth updates',
          placeholder: 'your@studio.com',
        }}
        status={{
          label: 'open for studio consultations',
          href: '#apply-form',
          onClick: handleConsultation,
        }}
        mark="LARGERUP / 2026"
        timeZone="Asia/Kolkata"
        timeLabel="IST"
        columns={columns}
        socials={socials}
        sideLinks={sideLinks}
        chat={{
          label: 'say hi on whatsapp',
          href: 'https://wa.me/917980817657?text=Hi%20LargerUp%20team,%20I%20came%20from%20your%20landing%20page.%20I%20would%20like%20to%20know%20more%20about%20this!',
        }}
        copyright={`© ${new Date().getFullYear()} LargerUp. All rights reserved.`}
        credit="Interior Client Acquisition Engine"
        handle={{
          label: 'interiors.largerup.com',
          href: 'https://interiors.largerup.com',
        }}
        sheet="#141414"
        sheetInk="#ffffff"
        paper="#ffffff"
        paperInk="#141414"
        seed={42}
        height="min(860px, 100svh)"
        fontSans="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      />
    </div>
  );
}
