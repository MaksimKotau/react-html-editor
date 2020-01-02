import React from 'react';
import ToolbarButton, { ToolbarButtonProps } from './ToolbarButton'
import TextColorSelect from './TextColorSelect';
import BoldTextButton from './BoldTextButton';
import ItalicTextButton from './ItalicTextButton';
import UnderlinedTextButton from './UnderlinedTextButton';
import AddLinkButton from './AddLinkButton';
import HeaderButton from './HeaderButton';
import TextAlignRight from './TextAlignRight';
import TextAlignLeft from './TextAlignLeft';
import TextAlignCenter from './TextAlignCenter';
import TextAlignJustify from './TextAlignJustify';
import CodeButton from './CodeButton';
import OrderedListButton from './OrderedListButton';
import UnorderedListButton from './UnorderedListButton';
import UndoButton from './UndoButton';
import RedoButton from './RedoButton';
import StrikeTextButton from './StrikeTextButton';
import SubTextButton from './SubTextButton';
import SupTextButton from './SupTextButton';
import AddImageButton from './AddImageButton';

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
    },
    {
      element: <AddImageButton />
    }
  ]

const Toolbar: React.FC = () => {
    return (
        <div id="htmleditor_toolbar">
          {buttons.map((el, index) => (
            <ToolbarButton key={`HTML_Editor_Button_${index}`}
              element={el.element}
              
            />
          ))

          }
        </div>
    )
}

export default Toolbar;