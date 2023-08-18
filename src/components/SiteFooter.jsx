import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Icons } from "./Icons";
import { BsTelephone } from "react-icons/bs";

export function SiteFooter() {
  return (
    <footer className="w-full flex flex-col justify-center gap-y-20 pt-20 pb-8 px-6 2xl:px-0 max-w-screen-xl mx-auto">
      <div className="h-px">
        <div className="absolute left-0 border-neutral-800 w-full h-px border-t"></div>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-y-20">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="font-semibold text-[26px] tracking-wide leading-none inher"
            >
              RN2K
            </Link>
            <ul className="mt-10 flex flex-row items-center gap-x-10">
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <Link to="/vehicles">Fleet</Link>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <HashLink smooth to="/#features">
                  Features
                </HashLink>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <HashLink smooth to="/#about">
                  About
                </HashLink>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <HashLink smooth to="/#contacts">
                  Contacts
                </HashLink>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <HashLink smooth to="/#faqs">
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-px">
        <div className="absolute left-0 border-neutral-800 w-full h-px border-t"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-y-20">
        <div className="text-center md:text-left">
          <Link
            to="/"
            className="font-semibold text-[26px] tracking-wide leading-none inher"
          >
            Contact RN2K
          </Link>

          <div className="text-center space-y-5 pt-6">
            <div className="flex gap-2 justify-center items-center">
              <BsTelephone />:
              <a target="_blank" href="tel:+233264297717" rel="noreferrer">
                0264297717
              </a>
            </div>
            <div>Location: Abosey Okai, near Gyemfa OKYEADEA Ent</div>
            <div>
              <a
                target="_blank"
                href="mailto: asiedurichie38@gmail.com"
                rel="noreferrer"
              >
                Email: asiedurichie38@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 border-t border-neutral-900 pt-8 pb-12 text-[15px] tracking-wide">
        <p>© Copyright {new Date().getFullYear()}. All rights reserved.</p>
        <p>Built by TOTAL_JEOPARDY!!!!</p>
      </div>
    </footer>
  );
}
