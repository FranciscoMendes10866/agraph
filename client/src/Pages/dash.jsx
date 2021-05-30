import { Container, Row, Col } from 'reactstrap';

import { RecipeCard } from '../components'

const Dashboard = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs="12" sm="6" md="4" className="px-2">
                    <RecipeCard />
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
