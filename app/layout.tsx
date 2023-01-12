export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>  
      <h1>Todo App</h1> 
        {children}</body>
    </html>
  )
}
