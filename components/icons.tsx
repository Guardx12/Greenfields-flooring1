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


export const Icons = { Facebook, Instagram, MapPin, Phone, Mail, Star, GoogleG };
