import { ContactContainer } from "./contact.styed";

export default function Contact({id}) {
    return (
        <ContactContainer id={id}>
            <div className={"title"}>
                <h2>Contato</h2>
            </div>
            <div className={"contact"}>
                <div className={"contact-info"}>
                    <ul>
                        <li><p>Email: <a href="mailto:matheus.rj25@hotmail.com">matheus.rj25@hotmail.com</a></p></li>
                        <li><p>LinkedIn: <a href="#">Meu LinkedIn</a></p></li>
                        <li><p>Meu currículo: <a href="/assets/download/MatheusRodrigues.pdf" target="_blank" rel="noopener noreferrer">Clique aqui </a></p></li>
                    </ul>
                </div>
            </div>

        </ContactContainer>
    )
}