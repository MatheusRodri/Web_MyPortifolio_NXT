import { Container } from "./style";
import { IoClose } from "react-icons/io5";

export function MenuMobile({menuIsVisible,setMenuIsVisible}){
    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} color={"white"} onClick={()=>setMenuIsVisible(false)}/>
            <nav>   
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about-me">Sobre</a></li>
                    <li><a href='#skills'>Experiencia</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </Container>
    )
}