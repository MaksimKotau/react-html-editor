import React, { Component } from 'react';
import './HTMLEditor.css';
import {ArticleDOMNode} from './tagReplaceService'






interface OwnProps {
  value: string;
  onChange(value: string): void;
}

interface OwnState {
  value: string;
}



class HTMLEditor extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      value: props.value
    }
  }
  componentDidUpdate(prevProps: OwnProps, prevState: OwnState) {

  }
  render() {
    console.log(this.state)
    return (
      <div>
        <div id="htmleditor_toolbar">
          TOOLBAR
        </div>
        <div>
        <ArticleDOMNode onChange={this.onChange} value="<p>dfgdsgf<i>df,</i>sdfsdfsd</p>" />
        </div>

      </div>
    );
  }
  onChange = (value: string) => {
    this.setState({value})
  }
}

export default HTMLEditor;
