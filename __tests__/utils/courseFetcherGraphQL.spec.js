import {fetchCoursesWithGraphQL, getCourses} from "../../src/utils/coursesFetcherGraphQL";
import {courses2 as mockData} from "../../__mocks__/dataMock";
import {setEditSlideFalse} from "../../src/redux/actions/editSlideAction";
import {setCoursesJson} from "../../src/redux/actions/coursesAction";

it('works with async/await', async () => {
    const courses = await fetchCoursesWithGraphQL(
        () => Promise.resolve(
            mockData
    ));
    expect(courses.length).toBe(1);
});

it('getCourses calls the two functions passed in as parameters', async() => {
    const mockFunctionSetCoursesJson = jest.fn(setCoursesJson);
    const mockFunctionSetEditSlideFalse = jest.fn(setEditSlideFalse);

    await getCourses(mockFunctionSetCoursesJson, mockFunctionSetEditSlideFalse);
    expect(mockFunctionSetEditSlideFalse).toHaveBeenCalledTimes(1);
    expect(mockFunctionSetCoursesJson).toHaveBeenCalledTimes(1);
});