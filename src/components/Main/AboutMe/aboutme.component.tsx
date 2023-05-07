import { AboutMeContainer } from "./aboutme.styled";
import Image from "next/image";
import MyPhoto from "public/assets/images/me.jpg"

export default function AboutMe({id}) {

    const date = new Date();
    const myYearsOld = date.getFullYear() - 2002;

    return (
        <AboutMeContainer id={id}>
            <div className={"title"}>
                <h2>Sobre mim</h2>
            </div>
            <div id={"me"}>
                <div id={"text-me"}>
                    <p>
                        &nbsp;&nbsp; Meu nome é Matheus Rodrigues, tenho {myYearsOld} anos e vou usar essa parte para falar um pouco
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
                    </p>
                    <p>
                        &nbsp;&nbsp; Alguns anos depois troquei de celular, então vi um vídeo no YouTube na qual ensina a fazer umas configurações
                        mais avançadas que necessitava de acesso root, depois de um tempo consegui fazer mas depois meu celular reiniciou e apareceu
                        a tela do "android morto" então fiz uma pesquisa e descobri que tinha que reinstalar o android, então fiz alguns pesquisa e consegui
                        resolver meu problema.
                    </p>
                    <p>
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
        </AboutMeContainer>
    )
}