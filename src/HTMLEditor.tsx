import React, { Component } from 'react';
import './HTMLEditor.css';
import { ArticleDOMNode } from './tagReplaceService'
import ToolbarButton, { ToolbarButtonProps } from './ToolbarButton'
import TextColorSelect from './buttonForms/TextColorSelect';
import BoldTextButton from './buttonForms/BoldTextButton';
import ItalicTextButton from './buttonForms/ItalicTextButton';
import UnderlinedTextButton from './buttonForms/UnderlinedTextButton';
import AddLinkButton from './buttonForms/AddLinkButton';
import HeaderButton from './buttonForms/HeaderButton';
import TextAlignRight from './buttonForms/TextAlignRight';
import TextAlignLeft from './buttonForms/TextAlignLeft';
import TextAlignCenter from './buttonForms/TextAlignCenter';
import TextAlignJustify from './buttonForms/TextAlignJustify';
import CodeButton from './buttonForms/CodeButton';
import OrderedListButton from './buttonForms/OrderedListButton';
import UnorderedListButton from './buttonForms/UnorderedListButton';
import UndoButton from './buttonForms/UndoButton';
import RedoButton from './buttonForms/RedoButton';
import StrikeTextButton from './buttonForms/StrikeTextButton';
import SubTextButton from './buttonForms/SubTextButton';
import SupTextButton from './buttonForms/SupTextButton';

const buttons: ToolbarButtonProps[] = [
  {
    element: <BoldTextButton/>
  },
  {
    element: <ItalicTextButton/>
  },
  {
    element: <UnderlinedTextButton/>
  },
  {
    element: <StrikeTextButton />
  },
  {
    element: <SubTextButton />
  },
  {
    element: <SupTextButton />
  },
  {
    element: <AddLinkButton/>
  },
  {
    element: <TextColorSelect />
  },
  {
    element: <HeaderButton />
  },
  {
    element: <TextAlignLeft />
  },
  {
    element: <TextAlignCenter />
  },
  {
    element: <TextAlignRight />
  },
  {
    element: <TextAlignJustify />
  },
  {
    element: <CodeButton />
  },
  {
    element: <OrderedListButton />
  },
  {
    element: <UnorderedListButton />
  },
  { 
    element: <UndoButton />
  },
  {
    element: <RedoButton />
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
