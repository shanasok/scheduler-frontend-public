import React from 'react';
import '../css/LayoutStyles.css';
import {Header} from "./Header";
import {Main} from "./Main/Main";
import {Footer} from "./Footer";

class Layout extends React.Component {
    render() {
        return <div id="layoutDiv">
            <Header />
            <Main />
            <Footer />
        </div>
    }
}

export default Layout;