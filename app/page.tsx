import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <header className="h-[88vh] flex flex-col justify-center items-center gap-10 lg:gap-15">
      <h1 className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black w-5/6 sm:w-4/5 bg-gradient-to-t from-indigo-500 to-sky-100 bg-clip-text text-transparent leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
        Shop Smart, Build Fast
      </h1>
      <div className="w-5/6 sm:w-3/5 lg:w-3/4 flex flex-col-reverse lg:flex-row items-center justify-between font-light gap-10 lg:gap-20">
        <Button
          size="lg"
          variant="secondary"
          className="py-7 font-bold text-[17px]"
        >
          Browse all products
        </Button>
        <div className="opacity-50 text-xl lg:text-2xl space-y-5">
          <p className="text-center lg:text-start">
            AlphaMart is a vibrant community of digital artists, creators, and
            developers.
          </p>
          <p className="text-center lg:text-start">
            Buy and sell top-quality digital products, including templates,
            graphics, logos, and more.
          </p>
        </div>
      </div>
    </header>
  );
}
