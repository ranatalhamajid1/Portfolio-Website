import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer Intern</h4>
                <h5>Capxa E-commerce</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and improved responsive UI components for e-commerce platforms. Collaborated with backend team to ensure smooth integration and performance. Optimized layouts and usability for mobile and desktop users. Assisted in testing, debugging, and deployment workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Shopify Store Manager</h4>
                <h5>Self-Managed</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed customer support operations independently. Handled order tracking, complaints, and inquiries professionally. Improved customer satisfaction through quick resolution workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Video Editor</h4>
                <h5>StreamEdge Digital</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Edited promotional videos, reels, and social media content for clients. Added motion graphics, transitions, subtitles, and sound effects. Optimized content for platforms like Instagram, TikTok, and YouTube. Delivered projects with fast turnaround while maintaining quality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer & Editor</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2018 - 2019</h3>
            </div>
            <p>
              Built responsive websites for academic and personal projects. Focused on UI design, performance, and usability.
            </p>
          </div>

          <div style={{marginTop: "50px", marginBottom: "30px"}}>
             <h2 style={{fontSize: "2rem", color: "var(--lightest)"}}>Education</h2>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>UET Taxila</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>Pursuing a Bachelor of Science in Computer Science.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pre-Engineering (Intermediate)</h4>
                <h5>Nishat College of Science</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matric in Science</h4>
                <h5>City Science HSS</h5>
              </div>
              <h3>2019 - 2021</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
