import React from 'react';
import { connect } from "react-redux";

import {MainBottom} from "./MainBottom";
import MainCourses from "./MainCourses";
import {MainTitle} from "./MainTitle";

import '../../css/CourseOptionStyles.css';

const MainCourseChooser = props => (
    <div id="mainCourseChooser">
        <MainTitle />
        <MainCourses courses={props.courses} />
        <MainBottom />
    </div>
);

const mapStateToProps = state => ({
    courses: state.courses,
});

export default connect(mapStateToProps)(MainCourseChooser)