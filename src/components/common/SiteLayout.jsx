"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LenisScroll from "@/components/common/LenisScroll";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ViewTransitions } from "next-view-transitions";
import GlobalImgReveal from "../animation/GlobalImgReveal";
import GlobalParaReveal from "../animation/GlobalParaReveal";
import GlobalClipReveal from "../animation/GlobalClipReveal";
import Image from "next/image";
import Aurora from "../animation/Aurora";

gsap.registerPlugin(ScrollTrigger);

export default function SiteLayout({ children }) {

  const pathname = usePathname();
  const webpassword = "ubr@1234"
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  useEffect(() => {
    const unlockData = sessionStorage.getItem("siteUnlockData");
    if (unlockData) {
      try {
        const { timestamp } = JSON.parse(unlockData);
        const now = new Date().getTime();
        // 1 hour = 3600000 milliseconds
        if (now - timestamp < 3600000) {
          setIsUnlocked(true);
        } else {
          sessionStorage.removeItem("siteUnlockData");
        }
      } catch (error) {
        sessionStorage.removeItem("siteUnlockData");
      }
    }
  }, []);

  const handleUnlockSite = async (event) => {
    event.preventDefault();
    setIsUnlocking(true);
    if (password === webpassword) {
      setIsUnlocked(true);
      sessionStorage.setItem("siteUnlockData", JSON.stringify({ timestamp: new Date().getTime() }));
    }

    setIsUnlocking(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) {
        window.lenis.resize();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {isUnlocked ? (
        <ViewTransitions>
          <LenisScroll>


            <GlobalImgReveal />
            <GlobalParaReveal />
            <GlobalClipReveal />

            <header>
              <Header />
            </header>

            <main>
              {children}
            </main>

            <footer>
              <Footer />
            </footer>
          </LenisScroll>
        </ViewTransitions>
      ) : (
        <div className="w-full h-screen bg-[#ffffff] fixed inset-0 z-1000 center">
          <div className="w-full h-full absolute ">
            <Aurora />
          </div>
          <div className=" bg-[#4688F0]  p-10 rounded-xl space-y-20 relative">
            <div className="relative  w-full center">
              <Image width={300} height={300} src="/logo.png" className="" alt="bg_img" />
            </div>
            <div className="w-[25vw]">
              <form
                onSubmit={handleUnlockSite}
                className=" space-y-20"
              >
                <div className="flex max-sm:flex-col gap-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter Password to unlock site"
                    className="w-full border-b border-[#FFFFFF] text-white   outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    disabled={isUnlocking}
                    className="shrink-0 text-sm uppercase rounded-md bg-[#FFFFFF] hover:bg-transparent hover:text-[#FFFFFF]!  border border-transparent hover:border-[#FFFFFF] transition-all duration-150 px-4 py-2  diagramm disabled:opacity-60"
                  >
                    {isUnlocking ? "Checking" : "Unlock"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      )}
    </>

  );
}
