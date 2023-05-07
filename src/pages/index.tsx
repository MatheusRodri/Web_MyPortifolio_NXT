import Footer from "src/components/Footer/footer.component";
import { Header } from "../components/Header/header.component";


import { Container } from "../styles/main.styles";
import Image from "next/image";
import { useState } from "react";
import { MenuMobile } from "src/components/MenuMobile";

import FirstContent from "../components/Main/FirstContent/firstContent.component";
import AboutMe from "src/components/Main/AboutMe/aboutme.component";
import Contact from "src/components/Main/Contact/contact.component";
import { Skills } from "src/components/Main/Skills/skills.component";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Container>
        <FirstContent id={"first-content"}  />
        <AboutMe id={"about-me"}/>
        <Skills id={"skills"}/>
        <div id={"projects"}>
          <div className={"title"}>
            <h2>Projetos</h2>
          </div>

          <div id={"group-projects"}>
            <div className={"project"}>
              <div className={"project-title"}>
                <h3>Java</h3>
              </div>
              <div className={"project-techs"}>
                <p>html5,css3</p>
              </div>
              <div className={"project-description"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorum.
                </p>
              </div>
            </div>

            <div className={"project"}>
              <div className={"project-title"}>
                <h3>Projeto 1</h3>
              </div>
              <div className={"project-techs"}>
                <p>html5,css3</p>
              </div>
              <div className={"project-description"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorum.
                </p>
              </div>
            </div>

            <div className={"project"}>
              <div className={"project-title"}>
                <h3>Projeto 1</h3>
              </div>
              <div className={"project-techs"}>
                <p>html5,css3</p>
              </div>
              <div className={"project-description"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorum.
                </p>
              </div>
            </div>

            <div className={"project"}>
              <div className={"project-title"}>
                <h3>Projeto 1</h3>
              </div>
              <div className={"project-techs"}>
                <p>html5,css3</p>
              </div>
              <div className={"project-description"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorum.
                </p>
              </div>
            </div>

            <div className={"project"}>
              <div className={"project-title"}>
                <h3>Projeto 1</h3>
              </div>
              <div className={"project-techs"}>
                <p>html5,css3</p>
              </div>
              <div className={"project-description"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorum.
                </p>
              </div>
            </div>


          </div>
        </div>
        <Contact id={"contact"} />
      </Container>
      <Footer />
    </>
  )
}
