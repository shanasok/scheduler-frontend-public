import React from 'react';
import PreviousSlideArrow from "./PreviousSlideArrow";
import SlideBox from "./SlideBox";
import NextSlideArrow from "./NextSlideArrow";

class SlideChooser extends React.Component {

    render() {
        const currentPage = this.props.currentPage;
        return <div className="slideChooser">
            <PreviousSlideArrow />
            <SlideBox currentPage={currentPage}/>
            <NextSlideArrow />
        </div>
    }
}

export default SlideChooser;