import ActorCard from '../../components/ActorCard/ActorCard'

function ActorListPage({ movies }){
    const fullCastList = []
    movies.forEach((movie) => {
        movie.cast.forEach((actor) => {
            fullCastList.push(actor)
        })
    })

    const actorsAsObject = new Set(fullCastList);
    const actors = Array.from(actorsAsObject).sort((a, b) => {
        const lastNameA = a.split(" ").pop();
        const lastNameB = b.split(" ").pop();
        return lastNameA.localeCompare(lastNameB);
    });

    return (
        <>
            <h1>Actors</h1>
            <div className="actors-container">
                <ActorCard actors={actors} />
            </div>
        </>
    )
}

export default ActorListPage;