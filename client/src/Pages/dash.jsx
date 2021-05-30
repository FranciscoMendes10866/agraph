import { Container } from 'reactstrap';
import { useQuery } from 'react-query'
import Masonry from 'react-masonry-css'

import { RecipeCard } from '../components'
import GetRecipesHandler from '../handlers/getRecipes'

const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
}

const Dashboard = () => {
    const { data, isError, isLoading } = useQuery('recipes', GetRecipesHandler)
    if (isError) return <h1>Error while fetching all recipes.</h1>
    if (isLoading) return <h1>Loading all recipes.</h1>
    return (
        <Container>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid mt-5"
              columnClassName="my-masonry-grid_column"
            >
                {data.findposts.map(recipe => {
                    return (
                        <div key={recipe._id}>
                            <RecipeCard recipe={recipe} />
                        </div>
                    )
                })}
            </Masonry>
        </Container>
    );
}

export default Dashboard;
