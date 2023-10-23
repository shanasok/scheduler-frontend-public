import React from 'react';

export function makeCourseSchema(course) {
    const courseSummary = (course) ? course.summary : "";
    const courseName = (course) ? course.name : "";

    return {
        '@context': 'http://schema.org',
        '@type': 'Course',
        'name': courseName,
        'description': courseSummary,
    }
}

// Structured Data element to improve SEO ranking
// https://developers.google.com/search/docs/data-types/course
export class CourseStructuredData extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.makeCourseSchema = this.makeCourseSchema.bind(this);
    // }
    //
    //
    // makeCourseSchema(course) {
    //     const courseSummary = (course) ? course.summary : "";
    //     const courseName = (course) ? course.name : "";
    //
    //     return {
    //         '@context': 'http://schema.org',
    //         '@type': 'Course',
    //         'name': courseName,
    //         'description': courseSummary,
    //     }
    // }

    render() {
        const schema = JSON.stringify(makeCourseSchema(this.props.course));

        return <script type="application/ld+json">
            {schema}
        </script>;
    }
}

export default CourseStructuredData;