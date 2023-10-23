import {modifyContent} from "../../src/utils/updateLessonContentJSON";
import {updateContentText} from "../../src/utils/updateLessonContentJSON";
import {KnowledgeType} from "../../src/utils/KnowledgeType";


it('modify content returns null if currentLessonContent is undefined', () => {

    let newValues={
        'fact':'new test fact data'
    }

    let returnVal = modifyContent(undefined, newValues, 1, KnowledgeType.FACT)
    expect(returnVal).toBeNull();
});

it('modify content returns null if currentLessonContent is null', () => {

    let newValues={
        'fact':'new test fact data'
    }

    let returnVal = modifyContent(null, newValues, 1, KnowledgeType.FACT)
    expect(returnVal).toBeNull();
});

it('updateContentText does not modify content if type is unknown', () => {
    let content={
        'fact':'old test fact data'
    }
    let newValues={
        'fact':'new test fact data'
    }
    updateContentText(content, newValues, "unknown");
    expect(content).toEqual({
        'fact':'old test fact data'
    });
});