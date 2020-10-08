import React, { FunctionComponent, useState } from "react";
import { Fabric, IColumn, TextField, Selection, MarqueeSelection, DetailsList, Announced, Text, initializeIcons, ITextFieldStyles, mergeStyles, DetailsListLayoutMode, Customizer, PrimaryButton, loadTheme, CommandBar, Separator, MessageBar, Link, Stack, MessageBarType } from "@fluentui/react";
import { loadPowerAppTheme } from "./PowerAppsTheme";
import { IInputs } from "./generated/ManifestTypes";
import { CommandBarFarItems, CommandBarItems, CommandBarOverflowItems, CommandBarOverflowProps } from "./CommandBarConfig";

initializeIcons();
loadPowerAppTheme();

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };

export interface IGridComponentProps {
  columns: IColumn[],
  items: any[]  
}

interface IEntity {
  key: string;
  name: string;
  value: string;
}

export const GridComponent: React.FunctionComponent<IGridComponentProps> = (props: IGridComponentProps) => { 
  const [message, setMessage] = useState('Data unavailable');
  const [selectionDetails, setSelectionDetails] = useState<string>();
  // const [items, setItems] = useState(props.items);

  const selection: Selection = new Selection({
    onSelectionChanged: () => setSelectionDetails(getSelectionDetails(selection)),
  });

  // const onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string | undefined): void => {
  //   setItems(text ? props.items.filter(i => i.name.toLowerCase().indexOf(text) > -1) : props.items);
  // };

  const onItemInvoked = (item: IEntity): void => {
    alert(`Item invoked: ${item.name}`);
  };

  return (
    <>
      <Stack>
       
        <CommandBar
          items={CommandBarItems}
          overflowItems={CommandBarOverflowItems}
          overflowButtonProps={CommandBarOverflowProps}
          farItems={CommandBarFarItems}
          ariaLabel="Use left and right arrow keys to navigate between commands"
        />

        <MessageBar messageBarType={MessageBarType.warning}>
          Note: While focusing a row, pressing enter or double clicking will execute onItemInvoked, which in this
          example will show an alert. {new Date().toLocaleTimeString()}
          <Link href="www.bing.com" target="_blank">
            Visit our website.
          </Link>
        </MessageBar>
        { selectionDetails &&  
          <MessageBar messageBarType={MessageBarType.info}>
            {selectionDetails}
          </MessageBar>
        }

        <Announced message={selectionDetails} />
        <Announced message={`Number of items after filter applied: ${props.items.length}.`} />

        <MarqueeSelection selection={selection}>
          <DetailsList
            items={props.items}
            columns={props.columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="Row checkbox"
            onItemInvoked={onItemInvoked}
          />
        </MarqueeSelection>
      </Stack>
    </>
  )
}

const getSelectionDetails = (selection: Selection) => {
  switch (selection.count) {
    case 0:
      return 'No items selected';
    case 1:
      return '1 item selected: ' + (selection.getSelection()[0] as IEntity).name;
    default:
      return `${selection.count} items selected`;
  }
}


