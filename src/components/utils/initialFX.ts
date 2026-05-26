import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0]?.classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Simple looping animation between the two landing h2 variants
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
  tl.to(".landing-h2-1", { autoAlpha: 1, y: 0, duration: 1.2 })
    .to(".landing-h2-1", { autoAlpha: 0, y: -80, duration: 1.2 }, "+=2")
    .to(
      ".landing-h2-2",
      { autoAlpha: 1, y: 0, duration: 1.2, immediateRender: false },
      "-="
    )
    .to(".landing-h2-2", { autoAlpha: 0, y: -80, duration: 1.2 }, "+=2");
}
