import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-medium text-2xl mb-8">
          This page doesn&apos;t exists. <br />
          Please try a different route.
        </h1>

        <Link href="/" className="cursor-pointer">
          <button
            className="hidden sm:flex items-center w-full gap-3 bg-[#1f1f1f] rounded-md text-[#a4a2a2] px-4 py-2 hover:text-white transition-all"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
