import "./testimonials.scss";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

export default function Testimonials() {
  return (
    <>
      <div className="section-title" id="project">
        <h2 className="project">Projects</h2>
      </div>
      <div class="testimonials">
        <div class="container">
          <div class="banner-img1"></div>
          <h1 class="name" style={{ color: "crimson" }}>
            Admin crud app
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/siva29061997/admin-dashboard")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://fancy-flan-b146e9.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/siva29061997/first_nodejs-master")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as a crud app.
            <br></br>This application is used to Admin analysed.
            <br />
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img"></div>
          <h1 class="name" style={{ color: "rgb(65, 201, 255)" }}>
            Web-Scraper
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/siva29061997/webscraper-frontend")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://63b2757e402150200814c829--fancy-alfajores-21ebff.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/siva29061997/webscraper-backend")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as a Web Scraper.<br></br>This
            application is used to Online products details.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img5"></div>
          <h1 class="name" style={{ color: "rgb(44, 73, 167)" }}>
            Explorer - Blog
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/siva29061997/blog-app-front")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() => window.open("https://singular-gingersnap-47de01.netlify.app/")}
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/siva29061997/blog-app-back")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as a Blog.<br></br>This
            application is used to Post your thoughts.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img6"></div>
          <h1 class="name" style={{ color: "rgba(255, 0, 0, 0.534)" }}>
            G-mail
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/siva29061997/gmail-clone-frontend")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() => window.open("https://fluffy-tanuki-77f3e1.netlify.app/")}
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/siva29061997/gmail-clone-backend")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as G-mail.<br></br>This
            application is used to you can share anythink.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img3"></div>
          <h1 class="name" style={{ color: "rgb(255, 65, 65)" }}>
            YouTube Clone
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() => window.open("https://github.com/siva29061997/youtube_clone")}
            >
              Github <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://6357f6aafc1e4c7cc0823205--lovely-conkies-79e72c.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
            This website made it as a Youtube.<br></br>This application is used
            to watch videos.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              HTML, CSS, JAVASCRIPT
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img4"></div>
          <h1 class="name" style={{ color: "#87CEEB" }}>

            Weather Tracker
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://github.com/siva29061997/restcountries_weather"
                )
              }
            >
              Github <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://ubiquitous-salmiakki-f4c374.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
            This website made it as a Weather Tracker.<br></br>This site is used
            to know your Current Location Weather.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              HTML, CSS, JAVASCRIPT
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
