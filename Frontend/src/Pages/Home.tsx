import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (<div className="min-h-screen flex text-black">
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
      }}
    />
    <div className="z-20 relative text-black flex flex-col justify-center items-center font-bold">
      
        <div className="text-8xl">Your Problems Are Our Problems</div>
        <FlipWords words={['Lets get You Treated','Get Well Now!']} duration={2000} className="text-4xl text-gray-700"/>
       <div className="flex gap-5"> <Button className="mt-5 hover:scale-105" > <Link to='/signin' className="text-white">Sign in </Link></Button>
       <Button className="mt-5 hover:scale-105" > <Link to='/signup' className="text-white">Sign Up</Link></Button></div>
    </div>
  </div>
  )
}

export default HomePage;