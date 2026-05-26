import "./styles/Career.css";

const Career = () => {
  const careerEntries = [
    {
      role: "Full Stack Developer Intern",
      company: "Capxa E-Commerce",
      year: "2024",
      description:
        "Built reusable frontend UI components, integrated REST APIs for product and checkout flows, and improved responsiveness and bug handling across the interface.",
    },
    {
      role: "Freelance Web Developer",
      company: "Independent",
      year: "2023 - Present",
      description:
        "Designed and delivered responsive websites for academic and personal clients while handling deployment, hosting, and security configuration tasks.",
    },
    {
      role: "BS Computer Science",
      company: "UET Taxila",
      year: "2023 - 2027",
      description:
        "Studying software development, database systems, and computer science fundamentals with a focus on secure and scalable application design.",
    },
    {
      role: "Certifications",
      company: "Coursera, NISP, eHunar",
      year: "Ongoing",
      description:
        "Completed IBM Full Stack Developer, Google Foundations of Cybersecurity, PenTest Cyber Specialist Program, and AI/ML Fundamentals training.",
    },
    {
      role: "Leadership & Societies",
      company: "Campus and community roles",
      year: "Recent",
      description:
        "Served as Finance Secretary for Wall of Hope Taxila Chapter, Operations Head and Director of Photography at UET Media Club, and an active member of debating and computing societies.",
    },
  ];

  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerEntries.map((entry) => (
            <div className="career-info-box" key={`${entry.role}-${entry.year}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{entry.role}</h4>
                  <h5>{entry.company}</h5>
                </div>
                <h3>{entry.year}</h3>
              </div>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
