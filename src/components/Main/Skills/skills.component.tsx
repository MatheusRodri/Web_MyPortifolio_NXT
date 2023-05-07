import {Container} from './skills.styled'

import Image from "next/image"

//Images
import Html5 from "public/assets/images/html.svg"
import Css from "public/assets/images/css.svg"
import javascript from "public/assets/images/javascript.svg"
import react from "public/assets/images/react.svg"
import node from "public/assets/images/nodejs.svg"
import charp from "public/assets/images/csharp.svg"
import dart from "public/assets/images/dart.svg"
import docker from "public/assets/images/docker.svg"
import dotnet from "public/assets/images/dotnet.svg"
import flutter from "public/assets/images/flutter.svg"
import git from "public/assets/images/git.svg"
import github from "public/assets/images/github.svg"
import kotlin from "public/assets/images/kotlin.svg"
import nextjs from "public/assets/images/nextjs.svg"
import rn from "public/assets/images/react-native.svg"
import sql from "public/assets/images/sql.svg"
import sc from "public/assets/images/styled-components.svg"
import tailwind from "public/assets/images/tailwind-css.svg"


export function Skills({id}){
    return(
        <Container id={id}>
          <div className={"title"}>
            <h2>Experiência</h2>
          </div>
          <div id={"skill"}>
            <div id={"group-skills"}>
              <div className={"html"}>
                <Image src={Html5} alt="HTML5" width={100} height={100} />
                <p>HTML 5</p>
              </div>
              <div className={"css"}>
                <Image src={Css} alt="HTML5" width={100} height={100} />
                <p>CSS 3</p>
              </div>
              <div className={"js"}>
                <Image src={javascript} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
              <div className={"react"}>
                <Image src={react} alt="HTML5" width={100} height={100} />
                <p>React</p>
              </div>
              <div className={"nodejs"}>
                <Image src={node} alt="HTML5" width={100} height={100} />
                <p>NodeJs</p>
              </div>
              <div className={"rn"}>
                <Image src={rn} alt="HTML5" width={100} height={100} />
                <p>React Native</p>
              </div>
              <div className={"tailwind"}>
                <Image src={tailwind} alt="HTML5" width={100} height={100} />
                <p>Tailwind</p>
              </div>
              <div className={"nextjs"}>
                <Image src={nextjs} alt="HTML5" width={100} height={100} />
                <p>NextJs</p>
              </div>
              <div className={"sc"}>
                <Image src={sc} alt="HTML5" width={100} height={100} />
                <p>Styled Component</p>
              </div>
              <div className={"dart"}>
                <Image src={dart} alt="HTML5" width={100} height={100} />
                <p>Dart</p>
              </div>
              <div className={"flutter"}>
                <Image src={flutter} alt="HTML5" width={100} height={100} />
                <p>Flutter</p>
              </div>
              <div className={"kotlin"}>
                <Image src={kotlin} alt="HTML5" width={100} height={100} />
                <p>Kotlin</p>
              </div>
              <div className={"git"}>
                <Image src={git} alt="HTML5" width={100} height={100} />
                <p>Git</p>
              </div>
              <div className={"github"}>
                <Image src={github} alt="HTML5" width={100} height={100} />
                <p>GitHub</p>
              </div>
              <div className={"sql"}>
                <Image src={sql} alt="HTML5" width={100} height={100} />
                <p>SQL</p>
              </div>
              <div className={"csharp"}>
                <Image src={charp} alt="HTML5" width={100} height={100} />
                <p>CSharp</p>
              </div>
              <div className={"dotnet"}>
                <Image src={dotnet} alt="HTML5" width={100} height={100} />
                <p>DotNet</p>
              </div>
              <div className={"docker"}>
                <Image src={docker} alt="HTML5" width={100} height={100} />
                <p>Docker</p>
              </div>
            </div>
          </div>
        </Container>
    )
}