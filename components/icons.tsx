import React from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Star } from "lucide-react";

export function GoogleG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.2 1.53 7.62 2.81l5.2-5.2C33.64 4.08 29.33 2 24 2 14.6 2 6.59 7.39 2.73 15.2l6.96 5.4C11.53 14.52 17.28 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.62-.15-3.17-.42-4.67H24v9.17h12.62c-.54 2.92-2.2 5.4-4.7 7.07l7.18 5.57C43.32 37.76 46.5 31.62 46.5 24.5z"/>
      <path fill="#FBBC05" d="M9.69 28.6A14.9 14.9 0 0 1 9 24c0-1.6.27-3.15.69-4.6l-6.96-5.4A23.93 23.93 0 0 0 0 24c0 3.87.92 7.53 2.73 10.8l6.96-5.4z"/>
      <path fill="#34A853" d="M24 46c5.33 0 9.82-1.76 13.1-4.79l-7.18-5.57c-1.99 1.34-4.54 2.13-5.92 2.13-6.72 0-12.47-5.02-14.31-11.77l-6.96 5.4C6.59 40.61 14.6 46 24 46z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}



export function FacebookColor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#1877F2" d="M24 12.07C24 5.405 18.627 0 12 0S0 5.405 0 12.07C0 18.1 4.388 23.09 10.125 24v-8.437H7.078v-3.493h3.047V9.41c0-3.04 1.792-4.72 4.533-4.72 1.312 0 2.686.235 2.686.235v2.983h-1.513c-1.49 0-1.953.93-1.953 1.885v2.264h3.328l-.532 3.493h-2.796V24C19.612 23.09 24 18.1 24 12.07z"/>
    </svg>
  );
}

export function InstagramColor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="ig" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor="#F58529"/>
          <stop offset="0.35" stopColor="#DD2A7B"/>
          <stop offset="0.7" stopColor="#8134AF"/>
          <stop offset="1" stopColor="#515BD4"/>
        </linearGradient>
      </defs>
      <path fill="url(#ig)" d="M7.2 0h9.6C20.776 0 24 3.224 24 7.2v9.6c0 3.976-3.224 7.2-7.2 7.2H7.2C3.224 24 0 20.776 0 16.8V7.2C0 3.224 3.224 0 7.2 0zm9.53 2.4H7.27C4.6 2.4 2.4 4.6 2.4 7.27v9.46c0 2.67 2.2 4.87 4.87 4.87h9.46c2.67 0 4.87-2.2 4.87-4.87V7.27c0-2.67-2.2-4.87-4.87-4.87z"/>
      <path fill="#fff" d="M12 6.2A5.8 5.8 0 1 0 12 17.8 5.8 5.8 0 0 0 12 6.2zm0 9.6A3.8 3.8 0 1 1 12 8a3.8 3.8 0 0 1 0 7.6z"/>
      <circle cx="18.1" cy="5.9" r="1.1" fill="#fff"/>
    </svg>
  );
}

export const Icons = {Facebook, Instagram, MapPin, Phone, Mail, Star, GoogleG, FacebookColor, InstagramColor };
