import React, { Component } from 'react';
import './HTMLEditor.css';
import { ArticleDOMNode } from './service/tagReplaceService'
import Toolbar from './toolbar/Toolbar'

interface OwnProps {
  value: string;
  onChange(value: string): void;
  readonly?: boolean;
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
        {!this.props.readonly && <Toolbar />}
        <div>
          <ArticleDOMNode onChange={this.props.onChange} value={this.props.value} readonly={this.props.readonly}/>
        </div>

      </div>
    );
  }
}

export default HTMLEditor;
