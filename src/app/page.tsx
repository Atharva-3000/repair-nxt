import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/80 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Repair NXT <br />Repair Shop
          </h1>
          <address>
            25 Jane Street <br />San Francisco, CA 94105
          </address>
          <p>Open Daily: 10am - 8pm</p>
          <Link href="tel:+919876543210" className="hover:underline">
            +91 98765 43210
          </Link>
        </div>
      </main>
    </div>
  );
}
