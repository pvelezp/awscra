import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Li = styled.li`
    cursor:pointer;
    list-style:none
`
const Container = styled.section`
    padding:1.5rem;
`
export const Home = () => {
    const navigate = useNavigate()

    return (
        <Container>
            Recetas:
            <ul>
                <Li
                onClick={()=> navigate('/recipe/pie-de-limon')}
                >Pie de Limón</Li>
            </ul>
        </Container>
    )
}

