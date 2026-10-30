import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#24065b'
};

export const metadata = {
  title: 'Impackt Loans — Livelihood Finance, Brand Engagement & Measurable Progress',
  description:
    'Finance a livelihood. Measure its progress. Impackt Loans connects purposeful credit, escrow-backed brand engagement, and verifiable livelihood outcome tracking for lenders, brands, and women building businesses.',
  keywords: [
    'Impackt Loans',
    'Livelihood Finance',
    'Microfinance',
    'Women Entrepreneurs',
    'Escrow Lending',
    'Impact Measurement',
    'Brand Distribution Channel',
    'DSA Lending Innovation'
  ],
  authors: [{ name: 'Impackt Loans' }],
  openGraph: {
    title: 'Impackt Loans — Purposeful Credit & Livelihood Finance',
    description: 'Finance a livelihood. Measure its progress. Discover the three-participant model uniting lenders, enterprise brands, and entrepreneurs.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Impackt Loans'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
