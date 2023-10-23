import React from 'react';

class SubjectName extends React.Component {

    render() {
        return <div className="subjectName">
            {this.props.name}
        </div>
    }
}

export default SubjectName;