const fetch = require("node-fetch");

//working version
// export function retrieveDataByPost(queryToRun){
//     return fetch( 'http://localhost:8080/graphql', {
//         method : `post`,
//         headers: {
//             'Content-Type': `application/json`,
//             'Accept'      : `application/json`
//         },
//         body: JSON.stringify( {query: queryToRun})
//     } )
// }

export async function retrieveDataByPost(queryToRun) {

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