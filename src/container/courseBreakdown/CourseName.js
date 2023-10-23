import React from 'react';

class CourseName extends React.Component {

    render() {
        return <div className="courseName">
            {this.props.courseName}
        </div>
    }
}

export default CourseName;