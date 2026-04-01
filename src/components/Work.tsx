import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "SpectraOps",
    category: "Cybersecurity Website",
    tools: "HTML, CSS, JavaScript",
    features: "Password strength checker, breach-checking tools, dark/light mode",
    image: "/images/spectraops.png",
    link: ""
  },
  {
    name: "Library Management System",
    category: "DB Project",
    tools: "SQL, Full-Stack",
    features: "Designed ERD, developed SQL-based backend structure, documentation",
    image: "/images/library-management.png",
    link: ""
  },
  {
    name: "Financial Calculator Website",
    category: "Web Application",
    tools: "APIs, JavaScript",
    features: "Real-time calculators using APIs, charts, multilingual responsive UI",
    image: "/images/financial-calculator.png",
    link: ""
  },
  {
    name: "Video Editing Portfolio",
    category: "AI Video Editing",
    tools: "Premiere Pro, CapCut, After Effects",
    features: "Promotional videos, reels, motion graphics, subtitles & sound effects",
    image: "/images/video-editing.png",
    link: "https://drive.google.com/drive/folders/1-iXu8c_Hwk9-9nOsQpRPMkc4kaHZcjEz?usp=drive_link"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "10px", opacity: 0.8, fontSize: "14px" }}>{project.features}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link || undefined} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
