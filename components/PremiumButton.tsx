'use client'

export function PremiumButton({ text = 'Message on WhatsApp' }: { text?: string }){
  return (
    <a
      href="https://wa.me/26774892554?text=Hello%20TWS%20Liquid%20Chef.%20I%27m%20interested%20in%20your%20services"
      className="inline-block bg-accent text-black px-4 py-2 rounded-xl font-semibold transform transition-transform duration-200 hover:scale-105"
    >
      {text}
    </a>
  )
}
