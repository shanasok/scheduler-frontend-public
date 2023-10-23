import editSlideReducer from '../../../src/redux/reducers/editSlideReducer';
import {SET_EDIT_SLIDE_TRUE, SET_EDIT_SLIDE_FALSE} from '../../../src/redux/actions/actionTypes';

describe('editSlideReducer', () => {
    it('should create a reducer to set boolean if slide is editable', () => {
        const initialState = {};
        const action = {
            type: SET_EDIT_SLIDE_TRUE,
                payload: {
                    setEditSlide: true
                }
        }
        expect(editSlideReducer(initialState,action)).toEqual(true);
    });

    it('should create a reducer to set boolean if slide is not editable', () => {
        const initialState = {};
        const action = {
            type: SET_EDIT_SLIDE_FALSE,
            payload: {
                setEditSlide: false
            }
        }
        expect(editSlideReducer(initialState,action)).toEqual(false);
    });
})