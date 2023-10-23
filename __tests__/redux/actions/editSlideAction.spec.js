import * as actions from '../../../src/redux/actions/editSlideAction';
import {SET_EDIT_SLIDE_TRUE, SET_EDIT_SLIDE_FALSE} from '../../../src/redux/actions/actionTypes';


describe('actions', () => {
    it('should create an action to set boolean if slide is editable', () => {
        const expectedAction = {
            type: SET_EDIT_SLIDE_TRUE,
            payload: {
                setEditSlide: true
            }
        }
        expect(actions.setEditSlideTrue()).toEqual(expectedAction)
    });

    it('should create an action to set boolean if slide is not editable', () => {
        const expectedAction = {
            type: SET_EDIT_SLIDE_FALSE,
            payload: {
                setEditSlide: false
            }
        }
        expect(actions.setEditSlideFalse()).toEqual(expectedAction)
    });
});