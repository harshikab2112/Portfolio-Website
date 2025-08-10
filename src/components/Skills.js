import htmlIcon from "../assets/img/html.webp";
import cssIcon from "../assets/img/css.webp";
import jsIcon from "../assets/img/js.png";
import reactIcon from "../assets/img/react.png";
import pythonIcon from "../assets/img/python.webp";
import sqlIcon from "../assets/img/sql.jpg";
import mysqlIcon from "../assets/img/mysql.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>As a fresher, I'm familiar with React and truly passionate about Python. Though I'm still getting comfortable with the fundamentals of HTML, CSS, and JavaScript, I'm dedicated to learning and improving every day.<br></br>I enjoy exploring different technologies and believe that with continuous practice and curiosity, I can grow into a confident and skilled developer ready to tackle real-world challenges.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={htmlIcon} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssIcon} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={jsIcon} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactIcon} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={pythonIcon} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={sqlIcon} alt="SQL" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={mysqlIcon} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Skills Background Images" />
    </section>
  )
}
