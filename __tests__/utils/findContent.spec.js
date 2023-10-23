import {lessonContent} from "../../__mocks__/lessonMock";
import {getPageContentFromLessonContent} from "../../src/utils/findContent";

it('getPageContentFromLessonContent correctly when its the first in the list', () => {
   let returnVal = getPageContentFromLessonContent(lessonContent, 1)
   let expectedReturnVal = [
       {
           "contentNumber": 1,
           "isEditable": false,
           "content": {
               "id": 1,
               "contentType": "FACT",
               "fact": "Java is an object-oriented programming language"
           }
       },
       {
           "contentNumber": 2,
           "isEditable": false,
           "content": {
               "id": 2,
               "contentType": "FACT",
               "fact": "Java is platform independent"
           }
       },
       {
           "contentNumber": 3,
           "isEditable": false,
           "content": {
               "id": 3,
               "contentType": "FACT",
               "fact": "Compiler converts Java code to Java bytecode"
           }
       },
       {
           "contentNumber": 4,
           "isEditable": false,
           "content": {
               "id": 4,
               "contentType": "DEFINITION",
               "term": "JVM",
               "explanation": "Java Virtual Machine"
           }
       },
       {
           "contentNumber": 5,
           "isEditable": false,
           "content": {
               "id": 5,
               "contentType": "FACT",
               "fact": "JVM executes Java bytecode"
           }
       }
   ];
   expect(returnVal).toEqual(expectedReturnVal);
});

it('getPageContentFromLessonContent correctly when its the last in the list', () => {
    let returnVal = getPageContentFromLessonContent(lessonContent, 3)
    let expectedReturnVal = [];
    expect(returnVal).toEqual(expectedReturnVal)
});

it('getPageContentFromLessonContent returns undefined when given non-existent page number', () => {
    let returnVal = getPageContentFromLessonContent(lessonContent, -1)
    let expectedReturnVal = undefined;
    expect(returnVal).toEqual(expectedReturnVal)
});