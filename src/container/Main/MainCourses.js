import React from 'react';
import {CourseOption} from "../CourseOption/CourseOption";

export function populateCourseOption(courses){
    if (courses && Array.isArray(courses)){
        return courses.map(course =>
            <CourseOption key={course.id} course={course}/>
        )
    }
}


export default class MainCourses extends React.Component {

    render() {
        const courseOptions = populateCourseOption(this.props.courses);

        return <div id="mainCourses">
            {courseOptions}
        </div>
    }
}