import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }
    gsap.set(para, { autoAlpha: 0, y: 80 });
    para.anim = gsap.to(para, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: para.parentElement?.parentElement,
        toggleActions: ToggleAction,
        start: TriggerStart,
      },
    });
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }
    gsap.set(title, { autoAlpha: 0, y: 80 });
    title.anim = gsap.to(title, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: title.parentElement?.parentElement,
        toggleActions: ToggleAction,
        start: TriggerStart,
      },
    });
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
