import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import MainCourseChooser from "./MainCourseChooser";
import CourseDetails from "../courseBreakdown/CourseDetails"
import LessonSlide from "../courseBreakdown/subjectBreakdown/lessonBreakdown/LessonSlide";
import NotFound from "../NotFound";

export class Main extends React.Component {

    render() {
        return <div id="main">
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <MainCourseChooser />} />
                    <Route exact path="/course" component={() => <CourseDetails />} />
                    <Route exact path="/lesson" component={() => <LessonSlide />} />
                    <Route component={() => <NotFound/>} />
                </Switch>
            </Router>
        </div>
    }
}