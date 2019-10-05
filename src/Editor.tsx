import React, { Component } from 'react';
import HTMLEditor from './HTMLEditor';


interface OwnState {
    value: string;
}

class Editor extends Component<{}, OwnState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <div>
                <HTMLEditor value={this.state.value} onChange={this.onChange} />
            </div>
        );
    }
    onChange = (value: string) => {
        this.setState({ value: value })
    }
}

export default Editor;