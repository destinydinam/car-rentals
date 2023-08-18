import { Link } from "react-router-dom";
import { Icons } from "./Icons";

export function Hero() {
  return (
    <section>
      <div className="relative flex flex-row items-center px-6 2xl:px-0 max-w-screen-xl mx-auto">
        <img
          src="./assets/images/hero.jpg"
          alt="hero img"
          role="presentation"
          fetchpriority="high"
          className="absolute invisible xl:visible inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute invisible xl:visible inset-0 right-20 w-full h-full bg-gradient-to-r from-black/95 via-black/20 to-black/0 "></div>
        <div className="flex flex-col gap-y-8 z-10 w-full">
          <h1 className="text-4xl leading-[1.4] lg:text-5xl font-semibold lg:max-w-4xl lg:leading-[1.175]">
            Your One-Stop Destination for Car Spare Parts
          </h1>
          <p className="text-xl leading-9 lg:max-w-2xl text-slate-300">
            Whether you're in need of essential components to keep your vehicle
            running smoothly, specialized parts for upgrading your car's
            performance, or premium accessories to enhance its style, we have
            the perfect selection for all your automotive spare parts needs.
          </p>
          <Link
            to="/vehicles"
            className="group mt-3 font-semibold w-full flex items-center justify-center md:w-72 bg-white text-black px-2 py-[10px] rounded-md text-lg border hover:bg-transparent hover:text-white hover:border-white transition-all duration-150"
          >
            Discover Your Components
          </Link>
        </div>
      </div>
      {/*
      <div className="mt-20 px-6 2xl:px-0 max-w-screen-xl mx-auto">
        <p className="font-semibold mb-8 text-center lg:text-left">
          As featured in
        </p>
         <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-between">
          <li className="flex">
            <Icons.Forbes />
          </li>
          <li className="flex">
            <Icons.TechCrunch />
          </li>
          <li className="flex">
            <Icons.Wired />
          </li>
          <li className="hidden xl:flex">
            <Icons.CNN />
          </li>
          <li className="flex">
            <Icons.BBC />
          </li>
          <li className="flex">
            <Icons.CBS />
          </li>
          <li className="flex">
            <Icons.FastCompany />
          </li>
          <li className="hidden xl:flex">
            <Icons.Huffpost />
          </li>
        </ul>
      </div>
         */}
    </section>
  );
}
