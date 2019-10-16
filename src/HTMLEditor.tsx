import React, { Component } from 'react';
import './HTMLEditor.css';
import { ArticleDOMNode } from './tagReplaceService'
import ToolbarButton, { ToolbarButtonProps } from './ToolbarButton'
import TextColorSelect from './buttonForms/TextColorSelect';


const buttons: ToolbarButtonProps[] = [
  {
    element: <span
      onClick={() => {
        document.execCommand("bold", false)
      }}
    >B</span>
  },
  {
    element: <span
      onClick={() => {
        document.execCommand("italic", false)
      }}
      style={{ fontStyle: "italic" }}>
      I
      </span>
  },
  {

    element: <span
      onClick={() => {
        document.execCommand("underline", false)
      }}
      style={{ textDecoration: "underline" }}>
      U
      </span>
  },
  {
    element: <span
      onClick={() => {
        document.execCommand("createlink", false, "www.tut.by")
      }}
    >&#128279;</span>
  },
  {
    element: <TextColorSelect />
  }

]



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

  }
  componentDidUpdate(prevProps: OwnProps, prevState: OwnState) {

  }
  render() {
    return (
      <div>
        <div id="htmleditor_toolbar">
          {buttons.map((el, index) => (
            <ToolbarButton key={`HTML_Editor_Button_${index}`}
              element={el.element}
              
            />
          ))

          }
        </div>
        <div>
          <ArticleDOMNode onChange={this.props.onChange} value={this.props.value} />
        </div>

      </div>
    );
  }
}

export default HTMLEditor;
