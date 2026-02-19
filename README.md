# Greenfields Flooring — Agency Site (Vercel-ready)

## Deploy
1) Upload this folder to GitHub (make sure files are at repo root)
2) Vercel → New Project → Import → Deploy (Next.js auto-detected)

## Update assets
- Replace `/public/shop.webp` with your preferred hero photo (keep filename)
- Add more images into `/public` and update the gallery section in `app/page.tsx`

## Add Google review link
Open `components/site-data.ts` and paste the link into `socials.googleReview`, then add a button wherever you want.


## Contact form (sends email via Vercel Functions)
Set these Environment Variables in Vercel (Project → Settings → Environment Variables):
- SMTP_HOST
- SMTP_PORT (587 typical, or 465 for secure)
- SMTP_USER
- SMTP_PASS

Then redeploy. (A good option is SMTP from your email provider.)

## Contact form
This build uses FormSubmit for zero-config email sending (no API keys, no SMTP).
It sends to: greenfieldsflooring@hotmail.co.uk


## Gallery photos
This build includes your uploaded images in `/public/gallery/` and shows up to 12 on the Gallery section.
