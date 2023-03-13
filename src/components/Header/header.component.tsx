import {Container} from './header.styles';
import Logo from '../../../public/assets/images/logoM.svg'
import Image from 'next/image';
import {FiSettings} from 'react-icons/fi'
import {RiMenu3Fill} from 'react-icons/ri'

export function Header({setMenuIsVisible}){
    return (
        <Container>
            <Image src={Logo} alt={"Logo M"} width={65} height={65}/>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about-me">Sobre</a></li>
                    <li><a href='#skills'>Experiencia</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
            <section>
                <RiMenu3Fill color={"white"} size={45} onClick={()=>setMenuIsVisible(true)}/>
            </section>
        </Container>
    )
}