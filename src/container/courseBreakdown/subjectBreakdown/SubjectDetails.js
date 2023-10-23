import React from 'react';
import SubjectName from './SubjectName';
import SubjectSummary from './SubjectSummary';
import LessonRibbon from './LessonRibbon';

class SubjectDetails extends React.Component {

    render() {
        return <div className="subject">
            <SubjectName name={this.props.subject.name} />
            <SubjectSummary summary={this.props.subject.summary} />
            <LessonRibbon lessons={this.props.subject.lessons} />
        </div>
    }
}

export default SubjectDetails;