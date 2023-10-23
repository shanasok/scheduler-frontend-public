/*Given an entire lesson and the page number, the content for that page only is returned. */
export function getPageContentFromLessonContent(lessonContent, pageNumber){
    if (lessonContent && lessonContent.pages) {
        const page = lessonContent.pages.filter(p => p.id === pageNumber);
        if (page[0] && page[0].pageContent) {
            return page[0].pageContent
                .sort((a, b) => (a.contentNumber > b.contentNumber) ? 1 : -1);
        }
    }
}

export function getKnowledgePointFromLessonContent(lessonContent, pageNumber, contentId){
    let pageContent = getPageContentFromLessonContent(lessonContent, pageNumber);
    let knowledgePoint;
    pageContent.forEach(pc => {
            if (pc.content.id === contentId) {
                knowledgePoint = pc.content;
            }
        }
    );
    return knowledgePoint;
}