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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href='#'>Experiencia</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><FiSettings color={'white'}/></li>
                </ul>
            </nav>
        </Container>
    )
}