import React from 'react';

export class OptionHeader extends React.Component {

    render() {
        return <div className="optionHeader">
            {this.props.name}
        </div>
    }
}