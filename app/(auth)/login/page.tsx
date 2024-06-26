
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
    return (
        <div className="mt-24  rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
          <form method="post" action="/api/auth/signin">
            <h1 className="text-3xl font-semibold text-white">Log in</h1>
            <div className="space-y-4 mt-5">
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
                Log in
              </Button>
            </div>
          </form>
    
          <div className="text-gray-500 text-sm mt-2">
            New to PcariMovie?{" "}
            <Link className="text-white hover:underline" href="/sign-up">
              Sign up now
            </Link>
          </div>
        </div>
      );
}