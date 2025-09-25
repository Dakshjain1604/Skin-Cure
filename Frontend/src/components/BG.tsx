interface MyProps{
    children:React.ReactNode
}
function BG  ({children}:MyProps) {
  return (
    <div className="min-h-screen w-full relative bg-white">
  {/* Orange Soft Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at center, #FF7112, transparent)
      `,
      opacity: 0.3,
      mixBlendMode: "multiply",
    }}
  />
     {children}
</div>
  )
}

export default BG