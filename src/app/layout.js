import './globals.css'
import { Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio created by John Jairo Cortes Murillo',
  description: 'Portfolio created in Next JS technologies. CSS, HTML, Material UI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
