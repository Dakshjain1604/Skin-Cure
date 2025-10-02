import { FileUpload } from "@/components/ui/file-upload";

const DashBoard = () => {
  return (
    <div className="min-h-screen w-full relative bg-white">
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "#ffffff",
        backgroundImage: `
          radial-gradient(
            circle at top center,
            rgba(173, 109, 244, 0.5),
            transparent 50%
          )
        `,
        filter: "blur(60px)",
        backgroundRepeat: "no-repeat",
      }}
    />
       
<div className='flex h-screen w-screen p-4 gap-4'>
        <div className='border-2 border-black flex-1 mr-2 rounded-xl z-40 px-5'>
          <div className="font-bold text-purple-700 text-4xl mt-4">Upload Your Image here ! lets get you treated !</div>

            <div className='flex border-1 border-black h-[40%] m-4 rounded-xl mt-10 '>

                    <div className='flex flex-col items-center justify-center w-fit h-fit'>
                            <FileUpload/>
                    </div>
                    <div className='flex flex-col items-center justify-center w-fit h-fit'>
                            Image preview here / remove this div to make the upload bigger 
                    </div>
                    
            </div>

            <div className='flex border-1 border-black h-[40%] m-4 rounded-xl mt-10'>
                    <div className='flex flex-col items-center justify-center w-fit h-fit text-4xl'>
                           ML disease prediction here !
                    </div>
            </div>

        </div>
        <div className='border-2 border-black flex-1 rounded-xl'>
           
        </div>
    </div>
  </div>
  )
}

export default DashBoard;


   