import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Dcode E-Commerce",
    category: "Full Stack",
    tools: "React.js, Node.js, Express.js, MongoDB",
    image: "/images/placeholder.webp",
  },
  {
    name: "Campus Management System",
    category: "Full Stack",
    tools: "Angular, Node.js, MongoDB, MySQL",
    image: "/images/placeholder.webp",
  },
  {
    name: "Hitachi Enterprise App",
    category: "Full Stack",
    tools: "React.js, Angular, Node.js, Express.js",
    image: "/images/placeholder.webp",
  },
  {
    name: "Sangeetha Mobiles Website",
    category: "Frontend",
    tools: "Angular, HTML5, CSS3, JavaScript",
    image: "/images/placeholder.webp",
  },
  {
    name: "Pai Mobiles Website",
    category: "Frontend",
    tools: "React.js, HTML5, CSS3, JavaScript",
    image: "/images/placeholder.webp",
  },
  {
    name: "RESTful API Services",
    category: "Backend",
    tools: "Node.js, Express.js, MongoDB, MySQL",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useEffect(() => {
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
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
