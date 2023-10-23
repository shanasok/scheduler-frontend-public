export const lessons = [
    {
        name: "Mock Threading the Machine",
        lessonNumber: 1,
    },
    {
        name: "Mock Winding a Bobbin",
        lessonNumber: 1,
    }
];

export const courses =
    {
        data: {
            allCourses: [
                {
                    id: 1,
                    name: "testCourseName",
                    maxAttendees: 5,
                    summary: "testCourseSummary",
                    subjects: [
                        {
                            id: 1,
                            name: "testSubjectName",
                            summary: "testSubjectSummary",
                            subjectNumber: 1,
                            lessons: [
                                {
                                    id: 1,
                                    name: "Mock Threading the Machine",
                                    lessonNumber: 1,
                                    pages: [],
                                },
                                {
                                    id: 2,
                                    name: "Mock Winding a Bobbin",
                                    lessonNumber: 2,
                                    pages: [],
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

export const courses2 =
    {
        "data": {
            "allCourses": [
                {
                    "id": 1,
                    "name": "testCourseName",
                    "maxAttendees": 5,
                    "summary": "testCourseSummary",
                    "subjects": [
                        {
                            "id": 1,
                            "name": "testSubjectName",
                            "summary": "testSubjectSummary",
                            "subjectNumber": 1,
                            "lessons": []
                        }
                    ]
                }
            ]
        }
    }

export const lessonContentData = {
    "data": {
        "findLessonById": {
            "id": 4,
            "name": "Introduction",
            "lessonNumber": 1,
            "pages": [
                {
                    "id": 1,
                    "pageNumber": 1,
                    "pageContent": [
                        {
                            "contentNumber": 4,
                            "content": {
                                "id": 4,
                                "contentType": "DEFINITION",
                                "term": "JVM",
                                "explanation": "Java Virtual Machine"
                            }
                        },
                        {
                            "contentNumber": 1,
                            "content": {
                                "id": 1,
                                "contentType": "FACT",
                                "fact": "Java is an object-oriented programming language"
                            }
                        },
                        {
                            "contentNumber": 2,
                            "content": {
                                "id": 2,
                                "contentType": "FACT",
                                "fact": "Java is platform independent"
                            }
                        },
                        {
                            "contentNumber": 3,
                            "content": {
                                "id": 3,
                                "contentType": "FACT",
                                "fact": "Compiler converts Java code to Java bytecode"
                            }
                        },
                        {
                            "contentNumber": 5,
                            "content": {
                                "id": 5,
                                "contentType": "FACT",
                                "fact": "JVM executes Java bytecode"
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "pageNumber": 2,
                    "pageContent": []
                },
                {
                    "id": 3,
                    "pageNumber": 3,
                    "pageContent": []
                }
            ]
        }
    }
}