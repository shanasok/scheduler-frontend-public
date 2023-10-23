export async function persistFact(contentId, fact) {
    let queryToRun = `mutation {
                            updateFact(
                                contentId: "${contentId}",
                                fact: "${fact}"
                            ) {
                            id
                            fact
                          }
                        }`

    const result = await fetch( 'http://localhost:8080/graphql', {
        method : `post`,
        headers: {
            'Content-Type': `application/json`,
            'Accept'      : `application/json`
        },
        body: JSON.stringify( {query: queryToRun})
    } )
    return result.json();
}

export async function persistDefinition(contentId, term, explanation) {

    const queryToRun = `mutation {
                            updateDefinition(
                                contentId: "${contentId}",
                                term: "${term}",
                                explanation: "${explanation}"
                            ) {
                            id
                            term
                            explanation
                          }
                        }`

    const result = await fetch( 'http://localhost:8080/graphql', {
        method : `post`,
        headers: {
            'Content-Type': `application/json`,
            'Accept'      : `application/json`
        },
        body: JSON.stringify( {query: queryToRun})
    } )
    return result.json();
}
