import React from 'react';
import { Link } from "react-router-dom";

export class CourseContentButton extends React.Component {
    render() {
        return <Link to={{ pathname: "/course",  state:{ course: this.props.course } }}>
            <button className="curvedButton">
                View Course Content
            </button>
        </Link>
    }
}