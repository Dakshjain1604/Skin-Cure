interface MyProps{
    children:React.ReactNode
}
function BG  ({children}:MyProps) {
  return (
    <div className="min-h-screen w-full  bg-white ">
    <div className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
    radial-gradient(circle at center, #ccb755 0%, transparent 70%)
  `,
        opacity: 0.6,
        mixBlendMode: "multiply",}}
    />
    {children}
  </div>
  )
}

export default BG