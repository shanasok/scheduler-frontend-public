import pageReducer from '../../../src/redux/reducers/pageReducer';
import {SET_CURRENT_PAGE} from '../../../src/redux/actions/actionTypes';


describe('pageReducer', () => {
    it('should create a reducer to set current page', () => {
        const initialState = {};
        const action = {
            type: SET_CURRENT_PAGE,
                payload: {
                currentPage: '{id: 1, pageNumber: 1}'
            }
        }
        expect(pageReducer(initialState,action)).toEqual('{id: 1, pageNumber: 1}')
    })
})