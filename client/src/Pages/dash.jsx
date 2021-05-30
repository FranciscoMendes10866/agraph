import { Container, Row, Col } from 'reactstrap';
import { useQuery } from 'react-query'

import { RecipeCard } from '../components'
import GetRecipesHandler from '../handlers/getRecipes'

const Dashboard = () => {
    const { data, isError, isLoading } = useQuery('recipes', GetRecipesHandler)
    if (isError) return <h1>Error while fetching all recipes.</h1>
    if (isLoading) return <h1>Loading all recipes.</h1>
    return (
        <Container>
            <Row className="mt-4">
                <Col xs="12" sm="6" lg="4" className="px-2">
                    { data.findposts.map(recipe => {
                        return <RecipeCard key={recipe._id} recipe={recipe} />
                    }) }
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
