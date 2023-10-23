import React from 'react';

import {OptionHeader} from "./OptionHeader";
import {OptionSummary} from "./OptionSummary";
import {CourseContentButton} from "./CourseContentButton";
import {CourseStructuredData} from "../structuredData/CourseStructuredData";

export class CourseOption extends React.Component {

    render() {
        if (this.props.course)
            return <div className="courseOption">
                <OptionHeader name={this.props.course.name}/>
                <OptionSummary summary={this.props.course.summary}/>
                <CourseStructuredData course={this.props.course}/>
                <CourseContentButton course={this.props.course} key={`courseStructuredDataJSON-${this.props.course.id}`}/>
            </div>
        else
            return null;
    }
}