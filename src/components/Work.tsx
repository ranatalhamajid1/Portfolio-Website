import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { publicUrl } from "../utils/publicUrl";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const projects = [
    {
      number: "01",
      name: "SpectraOps",
      category: "Cybersecurity platform",
      tools:
        "Next.js, PHP, MySQL, HaveIBeenPwned API, password strength checker",
    },
    {
      number: "02",
      name: "Library Management System",
      category: "CRUD application",
      tools: "Complete CRUD system, fine management, database normalization",
    },
    {
      number: "03",
      name: "Financial Calculator Website",
      category: "Interactive web app",
      tools: "Real-time calculators, charts, APIs, multilingual UI",
    },
  ];

  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = (box[0] as HTMLElement).getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Selected <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={publicUrl("images/placeholder.webp")} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
