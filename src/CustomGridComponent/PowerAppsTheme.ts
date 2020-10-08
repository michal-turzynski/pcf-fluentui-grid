import { createTheme, loadTheme } from '@fluentui/react';

export const loadPowerAppTheme = () =>
    loadTheme({
        palette: {
            themePrimary: '#742774',
            themeLighterAlt: '#f9f3f9',
            themeLighter: '#e9d0e9',
            themeLight: '#d5abd5',
            themeTertiary: '#ab67ab',
            themeSecondary: '#843784',
            themeDarkAlt: '#672367',
            themeDark: '#571e57',
            themeDarker: '#401640',
            neutralLighterAlt: '#faf9f8',
            neutralLighter: '#f3f2f1',
            neutralLight: '#edebe9',
            neutralQuaternaryAlt: '#e1dfdd',
            neutralQuaternary: '#d0d0d0',
            neutralTertiaryAlt: '#c8c6c4',
            neutralTertiary: '#a19f9d',
            neutralSecondary: '#605e5c',
            neutralPrimaryAlt: '#3b3a39',
            neutralPrimary: '#323130',
            neutralDark: '#201f1e',
            black: '#000000',
            white: '#ffffff',
        },
    });
