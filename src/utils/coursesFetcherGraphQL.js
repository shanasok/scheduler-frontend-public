import {retrieveDataByPost} from "./queryByPost";

let queryAllCourses =
    `{
            allCourses {
                id
                name
                maxAttendees
                summary
                subjects {
                    id
                    name
                    summary
                    subjectNumber
                    lessons {
                        id
                        name
                        lessonNumber
                        pages {
                            id
                            pageNumber
                        }
                    }
                }
            }
        }`

export async function getCourses(setCoursesJson, setEditSlideFalse) {
    const courses = await fetchCoursesWithGraphQL(retrieveDataByPost);
    setCoursesJson(courses);
    setEditSlideFalse();
}

export async function fetchCoursesWithGraphQL(retrieveDataByPost){

    return new Promise((resolve, reject) => {
        retrieveDataByPost(queryAllCourses)
            .then(
                (response) => {
                    resolve(response.data.allCourses);
                }
            )
    });

    //working version
    // return new Promise((resolve, reject) => {
    //     debugger;
    //     retrieveDataByPost(queryAllCourses)
    //     .then( response => response.json() )
    //     .then(
    //         (response) => {
    //             resolve(response.data.allCourses);
    //         },
    //         (error) => {
    //             reject("Unable to retrieve courses" + error);
    //         }
    //     );
    // });
}