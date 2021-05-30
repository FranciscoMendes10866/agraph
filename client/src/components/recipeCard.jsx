import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const RecipeCard = ({ recipe }) => {
    return (
        <Card color="dark" className="text-white">
            <CardImg top width="100%" src="https://keeprecipes.com/sites/keeprecipes/files/9469_1496095757_0.jpg" alt="recipe picture" />
            <CardBody>
                <CardTitle tag="h5">{recipe.title}</CardTitle>
                {recipe.categories.split(',').map((category, index) => {
                    return <CardSubtitle key={index} tag="small" className="mb-2 text-muted">{category}&nbsp;</CardSubtitle>
                })}
                <CardText className="mt-4">{recipe.description}</CardText>
                <CardText className="mt-5">By {recipe.author_username}</CardText>
                <Button color="warning" className="mt-4">View Recipe</Button>
            </CardBody>
        </Card>
    );
}

export default RecipeCard;
