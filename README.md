# TWS-premium-mixology

TWS Liquid Chef — MVP static site (HTML/CSS). Built as a fast static landing site with WhatsApp-first contact.

## Overview
- Static HTML/CSS scaffold
- WhatsApp primary CTA: +267 74 892 554
- Email placeholder
- Operating hours: By Appointment Only

## Deployed branch
This site is deployed from the `gh-pages` branch. Project Pages URL:

https://lebonesebeso123-creator.github.io/TWS-premium-mixology/

## Custom domain and DNS instructions
To use a custom domain (example: your-domain.com):

1. Choose whether you want an apex domain (example.com) or a subdomain (www.example.com).

2. Add a `CNAME` file at the repository root containing your domain (already added as `CNAME` — replace its contents with your domain).

3. Configure DNS records:
   - For an apex domain (example.com): add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - For a subdomain (www.example.com): add a CNAME record pointing to `lebonesebeso123-creator.github.io`.

4. In GitHub repository Settings → Pages, confirm the custom domain and enable HTTPS (GitHub will provision certificates).

## Local preview
Open `index.html` in a browser or use a static server (e.g., `npx serve`).

## Next steps
- Replace placeholder images with brand photos
- Update email and social links
- Add pricing/menu and testimonials

**IMPORTANT:** Replace the placeholder email and the CNAME value before public launch.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>