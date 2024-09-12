export const metadata = {
  title: 'Employeeverse',
  description: 'Welcome to Employeeverse, an online employee management system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
