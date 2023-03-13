import {Container} from './header.styles';
import Logo from '../../../public/assets/images/logoM.svg'
import Image from 'next/image';
import {FiSettings} from 'react-icons/fi'


export function Header(){
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
                    <li><FiSettings color={'white'}/></li>
                </ul>
            </nav>
        </Container>
    )
}