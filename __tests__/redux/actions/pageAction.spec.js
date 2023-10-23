import * as actions from '../../../src/redux/actions/pageAction';
import {SET_CURRENT_PAGE} from '../../../src/redux/actions/actionTypes';


describe('actions', () => {
    it('should create an action to set current page', () => {
        const pageJson = '{id: 1, pageNumber: 1}';
        const expectedAction = {
            type: SET_CURRENT_PAGE,
            payload: {
                currentPage: pageJson
            }
        }
        expect(actions.setCurrentPage(pageJson)).toEqual(expectedAction)
    })
})