import Footer from "src/components/Footer/footer.component";
import { Header } from "../components/Header/header.component";

import MyPhoto from "../../public/assets/images/me.jpg"
import Html5 from "../../public/assets/images/html.svg"
import Css from "../../public/assets/images/css.svg"
import javascript from "../../public/assets/images/javascript.svg"
import react from "../../public/assets/images/react.svg"
import node from "../../public/assets/images/nodejs.svg"
import charp from "../../public/assets/images/csharp.svg"
import dart from "../../public/assets/images/dart.svg"
import docker from "../../public/assets/images/docker.svg"
import dotnet from "../../public/assets/images/dotnet.svg"
import flutter from "../../public/assets/images/flutter.svg"
import git from "../../public/assets/images/git.svg"
import github from "../../public/assets/images/github.svg"
import kotlin from "../../public/assets/images/kotlin.svg"
import nextjs from "../../public/assets/images/nextjs.svg"
import rn from "../../public/assets/images/react-native.svg"
import sql from "../../public/assets/images/sql.svg"
import sc from "../../public/assets/images/styled-components.svg"
import tailwind from "../../public/assets/images/tailwind-css.svg"

import { Container } from "../styles/main.styles";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div id={"first-content"}>
          <p>Olá sou o <span>Matheus Rodrigues</span> futuro desenvolvedor Full-Stack</p>
        </div>
        <div id={"about-me"}>
          <div className={"title"}>
            <h2>Sobre mim</h2>
          </div>
          <div id={"me"}>
            <div id={"text-me"}>
              <p>
                &nbsp;&nbsp; Meu nome é Matheus Rodrigues, tenho 20 anos e vou usar essa parte para falar um pouco
                sobre mim.
              </p>
              <p>
                &nbsp;&nbsp; Sou apaixonado por tecnologia, programação e games, atualmente estou
                cursando Ciência da Computação no Centro universitário Senac, estou no 3° semestre.
              </p>
              <p>
                &nbsp;&nbsp; Posso dizer que sou uma pessoa que tive contato com a tecnologia muito cedo,
                me lembro que estava no 5° ano do ensino fundamental, quando a escola autorizou que os alunos
                pudessem levar seus próprios celulares e computadores para a escola, até aí tudo bem, mas chegou
                um momento que fui adicionar um telefone de um colega, quando apareceu uma mensagem de erro, não entendi
                o que era, chegando em casa, pensei na unica solução, que até o momento nunca tinha feito, formatar o celular,
                não sabia como funciona e quais seriam as consequências, mas fiz e deu certo, então ai já me despertou em mexer
                em configurações do celular,computadores etc...
                <p>
                  &nbsp;&nbsp; Alguns anos depois troquei de celular, então vi um vídeo no YouTube na qual ensina a fazer umas configurações
                  mais avançadas que necessitava de acesso root, depois de um tempo consegui fazer mas depois meu celular reiniciou e apareceu
                  a tela do "android morto" então fiz uma pesquisa e descobri que tinha que reinstalar o android, então fiz alguns pesquisa e consegui
                  resolver meu problema.
                </p>
                &nbsp;&nbsp; Meu primeiro contato com a programação foi em 2018, quando fiz um curso profissionalizante de informática, na qual aprendi
                manutenção básica de computadores, linguagem de programação Csharp(usando aplicação console e windows forms) e SQL com MySql. Desde então
                sempre venho estudando programação, sempre que posso reforçando a base.
                &nbsp;&nbsp; Atualmente estou estudando ReactJS, NextJS, NodeJS, Typescript, MongoDB, Postgres, Docker, entre outras tecnologias.
              </p>
            </div>

            <div id={"image-me"}>
              <Image src={MyPhoto} alt="Matheus Rodrigues" width={400} height={400} />
            </div>
          </div>
        </div>
        <div id={"skills"}>
          <div className={"title"}>
            <h2>Experiencia</h2>
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
                <p>JavaScript</p>
              </div>
              <div className={"dart"}>
                <Image src={dart} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
              <div className={"flutter"}>
                <Image src={flutter} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
              <div className={"kotlin"}>
                <Image src={kotlin} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
              <div className={"git"}>
                <Image src={git} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
              <div className={"github"}>
                <Image src={github} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
              <div className={"sql"}>
                <Image src={sql} alt="HTML5" width={100} height={100} />
                <p>sql</p>
              </div>
              <div className={"csharp"}>
                <Image src={charp} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
              <div className={"dotnet"}>
                <Image src={dotnet} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
              <div className={"docker"}>
                <Image src={docker} alt="HTML5" width={100} height={100} />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
