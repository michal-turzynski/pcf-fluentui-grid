import { IButtonProps, ICommandBarItemProps } from '@fluentui/react';

export const CommandBarOverflowProps: IButtonProps = {
    ariaLabel: 'More commands',
};

export const CommandBarItems: ICommandBarItemProps[] = [
    {
        key: 'newItem',
        text: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        iconProps: { iconName: 'Add' },
        subMenuProps: {
            items: [
                {
                    key: 'emailMessage',
                    text: 'Email message',
                    iconProps: { iconName: 'Mail' },
                    ['data-automation-id']: 'newEmailButton', // optional
                },
                {
                    key: 'calendarEvent',
                    text: 'Calendar event',
                    iconProps: { iconName: 'Calendar' },
                },
            ],
        },
    },
    {
        key: 'upload',
        text: 'Upload',
        iconProps: { iconName: 'Upload' },
        href: 'https://developer.microsoft.com/en-us/fluentui',
    },
    {
        key: 'share',
        text: 'Share',
        iconProps: { iconName: 'Share' },
        onClick: () => console.log('Share'),
    },
    {
        key: 'download',
        text: 'Download',
        iconProps: { iconName: 'Download' },
        onClick: () => console.log('Download'),
    },
];

export const CommandBarOverflowItems: ICommandBarItemProps[] = [
    {
        key: 'move',
        text: 'Move to...',
        onClick: () => console.log('Move to'),
        iconProps: { iconName: 'MoveToFolder' },
    },
    {
        key: 'copy',
        text: 'Copy to...',
        onClick: () => console.log('Copy to'),
        iconProps: { iconName: 'Copy' },
    },
    {
        key: 'rename',
        text: 'Rename...',
        onClick: () => console.log('Rename'),
        iconProps: { iconName: 'Edit' },
    },
];

export const CommandBarFarItems: ICommandBarItemProps[] = [
    {
        key: 'info',
        text: 'Info',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Info',
        iconOnly: true,
        iconProps: { iconName: 'Info' },
        onClick: () => console.log('Info'),
    },
];
