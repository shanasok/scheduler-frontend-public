import {retrieveDataByPost} from "./queryByPost";

function queryLessonPageContent(lessonId) {
    return `{
        findLessonById(id:${lessonId}) 
        {
            id
            name
            lessonNumber
            pages {
                id
                pageNumber
                pageContent{
                    contentNumber
                    isEditable
                    content {
                        id
                        contentType
                        ... on Fact {
                            fact
                        }
                        ... on Definition {
                            term
                            explanation        
                        }
                    }
                }
           }
        }
    }`
}

export async function getLessonContent(lessonId, setCurrentLessonContent) {
    if (lessonId)
        fetchLessonPageContentWithGraphQL(retrieveDataByPost, lessonId)
            .then(lessonContent => {
                setCurrentLessonContent(lessonContent);
            }).catch(err => {
           //TODO:Handle error
        });
}

export async function fetchLessonPageContentWithGraphQL(retrieveDataByPost, lessonId) {

    return new Promise((resolve, reject) => {
        retrieveDataByPost(queryLessonPageContent(lessonId))
            .then(
                (response) => {
                    resolve(response.data.findLessonById);
                }
            )
    });
}
