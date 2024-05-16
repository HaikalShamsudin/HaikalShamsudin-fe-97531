import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className="mt-24  rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
          <form method="post" action="/api/auth/signin">
            <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
            <div className="space-y-4 mt-5">
            <Input
                type="firstname"
                name="firstname"
                placeholder="first name"
                className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
              />
              <Input
                type="lastname"
                name="lastname"
                placeholder="last name"
                className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
              />
              <Input
                type="password"
                name="password"
                placeholder="password"
                className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
              />
              <Button
                type="submit"
                className="w-full bg-[#FED530]"
              >
                Sign Up
              </Button>
            </div>
          </form>
    
          <div className="text-gray-500 text-sm mt-2">
            Alredy Have a account?{" "}
            <Link className="text-white hover:underline" href="/login">
              Log in now!
            </Link>
          </div>
        </div>
      );
}