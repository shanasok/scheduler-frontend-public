import React from 'react';

export class OptionSummary extends React.Component {
    render() {
        return <div className="optionSummary">
            {this.props.summary}
        </div>
    }
}