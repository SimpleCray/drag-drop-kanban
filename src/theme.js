import { createTheme } from '@mui/material';

const lightTheme = {
    fontLexendTera: 'Lexend Tera',
    fontBaiJamjuree: 'Bai Jamjuree',
    fontMontserrat: 'Montserrat',

    colorElectricRed: '#E10600',
    colorErrorRed: '#d32f2f',
    colorFashionFuchsia: '#E10098',
    colorDarkOrchid: '#963CBD',
    colorIslamicGreen: '#8C0077',
    colorMaximumBlueGreen: '#2CCCD3',
    colorVividYellow: '#FCE300',
    colorVividGamboge: '#FF9800',
    colorIrishGreen: '#008C15',
    colorSpanishGray: '#999999',
    colorWhite: '#FFFFFF',
    colorBlack: '#000000',
    colorLightGray: '#B4B4B4',
    colorGray: '#646464',
    colorSilver: '#C4C4C4',

    backgroundColorGray: 'rgba(0, 0, 0, 0.6)',
    backgroundColorBlack: 'rgba(0, 0, 0, 1)',
    backgroundColorWhite: 'rgba(255, 255, 255, 1)',
    backgroundColorDisabled: 'rgba(153, 153, 153, 1)',
    backgroundColorWhiteSmoke: '#F5F5F5',

    borderColor: '#313131',
};

export const themes = {
    light: lightTheme,
    //add theme if customer like
};

export const themeMaterial = createTheme({
    palette: {
        primary: {
            main: lightTheme.colorMaximumBlueGreen,
            contrastText: lightTheme.colorWhite,
        },
        secondary: {
            main: lightTheme.colorIrishGreen,
        },
    },
    typography: {
        // fontFamily: ['Montserrat', 'Lexend Tera', 'Bai Jamjuree', 'SF ProDisplay', 'Opens Sans', 'serif'].join(','),
    },
});
