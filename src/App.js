import React from 'react';
import { connect } from "react-redux";
import {Helmet} from "react-helmet";

import { bindActionCreators } from "redux";
import { setCoursesJson } from './redux/actions/coursesAction';
import { getCourses } from "./utils/coursesFetcherGraphQL";
import Layout from './container/Layout.js';

import './App.css';
import {setEditSlideFalse} from "./redux/actions/editSlideAction";

class App extends React.Component {

    componentDidMount() {
        getCourses(this.props.actions.setCoursesJson, this.props.actions.setEditSlideFalse)
    }

    render() {
        return (
            <div className="App">
                <Helmet>
                    <script src="https://kit.fontawesome.com/ae667b96c5.js" crossOrigin="anonymous"></script>
                </Helmet>
                <Layout />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setCoursesJson,
            setEditSlideFalse,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
