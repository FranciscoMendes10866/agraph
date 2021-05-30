import { Row, Col, Card, CardImg, List } from 'reactstrap'

const RecipeDetails = ({ recipe }) => {
    return (
        <Card>
            <Row>
                <Col xs="12" md="6">
                    <CardImg src={recipe.image} alt="recipe picture" height="100%" width="100%" />
                </Col>
                <Col xs="12" md="6" className="px-2">
                    <Row className="px-5 py-5">
                        <Col xs="12">
                            <h5><b>@{recipe.author_username}</b> {recipe.title}</h5>
                            <h5 className="mt-4">
                                <p className="text-muted">Guide:</p>
                                {recipe.content.split('. ').map((el, index) => {
                                    return <small key={index}>{el}<br /><br /></small>
                                })}
                            </h5>
                        </Col>
                        <Col>
                            <Card>
                                <List type="unstyled" className="mt-4">
                                    {recipe.comments.length >= 1 ? (
                                        recipe.comments.map(comment => {
                                            return (
                                                <li key={comment._id} className="mx-4">
                                                    <p><b>@{comment.commentator_username}</b> {comment.message}</p>
                                                </li>
                                            )
                                        })
                                    ) : <p className="mt-3 mx-4 text-muted">No comments</p>}
                                </List>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default RecipeDetails;
