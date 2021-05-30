import { useHistory } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const RecipeCard = ({ recipe }) => {
    const { push } = useHistory()
    return (
        <Card>
            <CardImg top width="100%" src={recipe.image} alt="recipe picture" />
            <CardBody>
                <CardTitle tag="h5">{recipe.title}</CardTitle>
                {recipe.categories.split(',').map((category, index) => {
                    return <CardSubtitle key={index} tag="small" className="mb-2 text-muted">{category}&nbsp;</CardSubtitle>
                })}
                <CardText className="mt-3">{recipe.description}</CardText>
                <CardText className="mt-3">By&nbsp;<b>{recipe.author_username}</b></CardText>
                <Button color="primary" className="mt-3" onClick={() => push(`/recipe?id=${recipe._id}`)}>View Recipe</Button>
            </CardBody>
        </Card>
    );
}

export default RecipeCard;
