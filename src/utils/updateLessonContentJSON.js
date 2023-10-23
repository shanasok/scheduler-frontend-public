import {KnowledgeType} from "./KnowledgeType";

/**Iterates through the lesson content on each page so as to find and modify the correct one.
 * Returns the entire array of lesson content, with the correct modifications made. */
export function modifyContent(currentLessonContent, newValues, id, knowledgeType ){
    if (currentLessonContent === undefined ||currentLessonContent === null || !knowledgeType)
        return null;

    let lessonContentClone = JSON.parse(JSON.stringify(currentLessonContent));

    lessonContentClone.pages.forEach(page => {
        page.pageContent.forEach(pageContent => {
            if (pageContent.content.id === id){
                pageContent.content = updateContentText(pageContent.content, newValues, knowledgeType);
            }
        })
    });

    return lessonContentClone;
}

export function updateContentText(content, newValues, knowledgeType){
    switch (knowledgeType) {
        case KnowledgeType.FACT:
            content.fact = newValues.fact;
            break;
        case KnowledgeType.DEFINITION:
            content.term = newValues.term;
            content.explanation = newValues.explanation;
            break;
        default:
            break;
    }

    return content;
}
