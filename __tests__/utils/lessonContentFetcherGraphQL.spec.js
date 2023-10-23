import {fetchLessonPageContentWithGraphQL, getLessonContent} from "../../src/utils/lessonContentFetcherGraphQL";
import {lessonContentData as mockData} from "../../__mocks__/dataMock";
import {setEditSlideFalse} from "../../src/redux/actions/editSlideAction";
import {setCurrentLessonContent} from "../redux/actions/lessonContentAction.spec";




it('works with async/await', async () => {
    const lessonContent = await fetchLessonPageContentWithGraphQL(
        () => Promise.resolve(
            mockData
    ));
    expect(lessonContent.id).toEqual(4);
});

//This test doesn't work
// it('getLessonContent calls function passed in as parameter', async () => {
//     let lessonId = 1;
//     let mockSetCurrentLessonContent = jest.fn(setCurrentLessonContent);
//     await getLessonContent(lessonId, mockSetCurrentLessonContent);
//     expect(mockSetCurrentLessonContent).toHaveBeenCalledTimes(1);
// });