import LoginForm from "@/components/Loginform"


export default function SignUp() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm justify-center items-center ">
        <LoginForm />
      </div>
    </div>
  )
}


