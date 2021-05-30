import queryString from 'query-string'

const RecipeDetails = ({ location }) => {
    const { id } = queryString.parse(location.search)
    return (
        <h1>RecipeID: {id}</h1>
    );
}
 
export default RecipeDetails;
