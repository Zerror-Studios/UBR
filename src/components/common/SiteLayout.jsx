"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LenisScroll from "@/components/common/LenisScroll";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ViewTransitions } from "next-view-transitions";
import GlobalImgReveal from "../animation/GlobalImgReveal";
import GlobalParaReveal from "../animation/GlobalParaReveal";
import GlobalClipReveal from "../animation/GlobalClipReveal";

gsap.registerPlugin(ScrollTrigger);

export default function SiteLayout({ children }) {

  const pathname = usePathname();


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
    <ViewTransitions>
      <LenisScroll>

        <GlobalImgReveal />
        <GlobalParaReveal />
        <GlobalClipReveal/>

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

  );
}
