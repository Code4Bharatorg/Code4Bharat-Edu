import React from "react"
import "./globals.css"
export const metadata = {
  title: 'EDU.C4B',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}