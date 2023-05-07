import { Container } from "./firstContent.styled";

export default function FirstContent({id}) {
    return (
        <Container id={id}>
            <p>Olá sou o <span>Matheus Rodrigues</span> futuro desenvolvedor Full-Stack</p>
        </Container>
    );
}