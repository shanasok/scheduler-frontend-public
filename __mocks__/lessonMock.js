export const courses =  [
    {
        "id": 1,
        "name": "Sewing",
        "maxAttendees": 5,
        "summary": "Learn how to use a sewing machine and sew garments and items for your home.",
        "subjects": [
            {
                "id": 1,
                "name": "SEWING BASICS",
                "summary": "Learn to thread and use a machine. Create simple projects using straight and zig-zag stitches.",
                "subjectNumber": 1,
                "lessons": [
                    {
                        "id": 1,
                        "name": "Threading the machine",
                        "lessonNumber": 1,
                        "pages": []
                    },
                    {
                        "id": 2,
                        "name": "Sewing a zip",
                        "lessonNumber": 2,
                        "pages": []
                    }
                ]
            },
            {
                "id": 2,
                "name": "DRESS MAKING BASICS",
                "summary": "Learn to make simple garments from patterns.",
                "subjectNumber": 2,
                "lessons": [
                    {
                        "id": 3,
                        "name": "Hand sew a hem",
                        "lessonNumber": 3,
                        "pages": []
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Java",
        "maxAttendees": 12,
        "summary": "Learn to code in Java using good Object Oriented design principles such as SOLID.",
        "subjects": [
            {
                "id": 6,
                "name": "Java Basics",
                "summary": "Learn the basics of object oriented programming from variables and classes to for loops and methods. ",
                "subjectNumber": 1,
                "lessons": [
                    {
                        "id": 4,
                        "name": "Introduction",
                        "lessonNumber": 1,
                        "pages": [
                            {
                                "id": 1,
                                "pageNumber": 1
                            },
                            {
                                "id": 2,
                                "pageNumber": 2
                            },
                            {
                                "id": 3,
                                "pageNumber": 3
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "name": "Primitive Data Types",
                        "lessonNumber": 2,
                        "pages": []
                    },
                    {
                        "id": 6,
                        "name": "Objects",
                        "lessonNumber": 3,
                        "pages": []
                    },
                    {
                        "id": 7,
                        "name": "Constructors",
                        "lessonNumber": 4,
                        "pages": []
                    },
                    {
                        "id": 8,
                        "name": "Loops",
                        "lessonNumber": 5,
                        "pages": []
                    },
                    {
                        "id": 9,
                        "name": "Modifiers",
                        "lessonNumber": 6,
                        "pages": []
                    },
                    {
                        "id": 10,
                        "name": "Enums",
                        "lessonNumber": 7,
                        "pages": []
                    },
                    {
                        "id": 11,
                        "name": "Collections",
                        "lessonNumber": 8,
                        "pages": []
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "Web Development",
        "maxAttendees": 12,
        "summary": "Learn to code web pages using technologies such as CSS, HTML and JavaScript.",
        "subjects": [
            {
                "id": 3,
                "name": "HTML",
                "summary": "Learn HTML and start putting content in your web pages.",
                "subjectNumber": 1,
                "lessons": []
            },
            {
                "id": 4,
                "name": "CSS",
                "summary": "Learn the basics of CSS and use it to style your web pages.",
                "subjectNumber": 2,
                "lessons": []
            },
            {
                "id": 5,
                "name": "JavaScript",
                "summary": "Use JavaScript to make your, web pages responsive.",
                "subjectNumber": 3,
                "lessons": []
            }
        ]
    }
];

export const lessonContent = {
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
                    "isEditable": false,
                    "content": {
                        "id": 4,
                        "contentType": "DEFINITION",
                        "term": "JVM",
                        "explanation": "Java Virtual Machine"
                    }
                },
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
                    "contentNumber": 5,
                    "isEditable": false,
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
};

