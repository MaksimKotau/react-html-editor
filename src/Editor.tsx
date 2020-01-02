import React, { Component } from 'react';
import HTMLEditor from './HTMLEditor';


interface OwnState {
    value: string;
}

class Editor extends Component<{}, OwnState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: "<p>dfgdsgf<i id='frf' title='ghfdgdsg' style='color:blue; margin-left: 20px'>df,</i>sd<a href='www.tut.by'>fsd</a>fsd</p>"
        }
    }
    render() {
        return (
            <div>
                <HTMLEditor value={this.state.value} onChange={this.onChange}/>
            </div>
        );  
    }
    onChange = (value: string) => {
        this.setState({ value: value })
    }
}

export default Editor;