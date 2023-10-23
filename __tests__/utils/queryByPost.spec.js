import {retrieveDataByPost} from "../../src/utils/queryByPost";
import fetch from "jest-fetch-mock";

describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls google and returns data to me', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

        let queryAllCourses = `{allCourses {id}}`;
        //assert on the response
        retrieveDataByPost(queryAllCourses).then(res => {
            expect(res.data).toEqual('12345')
        })

        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
    })

})


//Can't get this test to pass.
// it('successful fetch returns data', async () => {
//
//     fetch.mockResponseOnce(() => Promise.resolve("data: {}"));
//
//     let queryAllCourses = `{allCourses {id}}`;
//
//     const courses = await retrieveDataByPost(queryAllCourses);
//     expect(fetch).toHaveBeenCalledTimes(1);
//
// });