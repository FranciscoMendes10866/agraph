import queryString from 'query-string'
import { useQuery } from 'react-query'
import { useAtom } from 'jotai'
import { Container } from 'reactstrap'

import { tokenAtomPersisted } from '../store/tokenAtom'
import GetRecipeHandler from '../handlers/getRecipe'
import { RecipeDetails } from '../components'

const RecipePage = ({ location }) => {
    const { id } = queryString.parse(location.search)
    const [token] = useAtom(tokenAtomPersisted)
    const { data, isError, isLoading } = useQuery(['recipe', { recipeId: id, token }], GetRecipeHandler)
    if (isError) return <h1>Error while fetching recipe.</h1>
    if (isLoading) return <h1>Loading recipe.</h1>
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 72px)'}}>
            <RecipeDetails recipe={data.singlepost} />
        </Container>
    );
}

export default RecipePage;
