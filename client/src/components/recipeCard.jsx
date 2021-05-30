import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const RecipeCard = ({ recipe }) => {
    return (
        <Card color="dark" className="text-white">
            <CardImg top width="100%" src="https://keeprecipes.com/sites/keeprecipes/files/9469_1496095757_0.jpg" alt />
            <CardBody>
                <CardTitle tag="h5">Crepes Simples</CardTitle>
                <CardSubtitle tag="small" className="mb-2 text-muted">Lanche, Pequeno Almoço</CardSubtitle>
                <CardText className="mt-4">Uma receita rápida e eficaz.</CardText>
                <CardText className="mt-5">By Francisco Mendes</CardText>
                <Button color="warning" className="mt-4">View Recipe</Button>
            </CardBody>
        </Card>
    );
}

export default RecipeCard;
