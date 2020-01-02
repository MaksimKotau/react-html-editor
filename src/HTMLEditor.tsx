import React, { Component } from 'react';
import './HTMLEditor.css';
import { ArticleDOMNode } from './service/tagReplaceService'
import Toolbar from './Toolbar/Toolbar'

interface OwnProps {
  value: string;
  onChange(value: string): void;
}

interface OwnState {
  value: string;
}



class HTMLEditor extends Component<OwnProps, OwnState> {
  componentDidUpdate(prevProps: OwnProps, prevState: OwnState) {

  }
  render() {
    return (
      <div>
        <Toolbar />
        <div>
          <ArticleDOMNode onChange={this.props.onChange} value={this.props.value} />
        </div>

      </div>
    );
  }
}

export default HTMLEditor;
