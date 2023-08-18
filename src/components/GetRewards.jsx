import { Icons } from "./Icons";

export function GetRewards() {
  return (
    <section className="h-[26rem]">
      <div className="px-6 absolute left-0 bg-neutral-900 w-full h-[26rem] flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl px-6 2xl:px-0">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide">
            Start earning rewards today
          </h2>
          <p className="text-lg leading-9 mt-6">
            Enroll in our premium spare parts loyalty program! Signing up is
            swift and simple – download our app and establish your account. As a
            valued member, relish exclusive advantages and privileges each time
            you acquire parts from us
          </p>
          <div className="mt-8 flex justify-center">
            <a
              aria-label="Download on the App Store"
              className="rounded-lg transition-colors bg-white text-gray-900 hover:bg-gray-50"
              href="/#"
            >
              <Icons.AppStore />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
