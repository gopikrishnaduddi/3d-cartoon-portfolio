import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Netzary Infodynamics</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and developed responsive websites for Sangeetha Mobiles
              and Pai Mobiles using Angular and React.js. Built reusable UI
              components, integrated backend APIs, and ensured cross-browser
              compatibility across desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Olga Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and maintained full-stack web applications for Hitachi
              using React.js, Angular, Node.js, Express.js, MongoDB, and MySQL.
              Built secure RESTful APIs, optimized database performance, and
              collaborated with client stakeholders to deliver enterprise-grade solutions.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Dalvkot Utility Enterprises Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading frontend architecture for Dcode (e-commerce platform) and
              developing a Campus Management System deployed at Vydehi Medical
              College and MVJ Medical College. Building scalable APIs with
              Node.js and Express.js, and driving modular component-based
              development in React and Angular.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
