import { BreakpointOverrides } from "@mui/system/createTheme/createBreakpoints";

declare module "@mui/system/createTheme/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    mdLarge: true;
  }
}

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    breakpoint?: BreakpointOverrides;
  }
}

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      mdLarge: 1199,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: red[900],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h4: {
      fontSize: "100px",
    },
    h5: {
      fontSize: "200px",
    },
  },
});

export default theme;

// import { Inter, Blinker, Gothman, Montserrat, Bebas_Neue, PT_Sans_Narrow } from '@next/font/google';
// import { createTheme } from '@mui/material/styles';

// export const inter = Inter({
//   weight: ['400', '500', '600', '700', '900'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// export const blinker = Blinker({
//   weight: ['600'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// export const montserrat = Montserrat({
//   weight: ['800', '700', '500', '400'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// export const bebas_neue = Bebas_Neue({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// export const pt_sans_narrow = PT_Sans_Narrow({
//   weight: ['700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// let commonTheme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 360,
//       largeSm: 500,
//       550: 550,
//       smd: 570,
//       md: 744,
//       770: 770,
//       largeMd: 992,
//       lmd: 1020,
//       lg: 1440,
//       xl: 1920,
//       containerSm: 328,
//       containerMd: 680,
//       containerLg: 1142,
//       containerXl: 1620,
//     },
//   },
//   palette: {
//     bgColorPage: '#F5F6FB',
//     black: {
//       main: '#403F3F',
//       0: '#FFFFFF',
//       2: '#FAFAFA',
//       3: '#F8F8F8',
//       5: '#F5F5F5',
//       7: '#EEEEEE',
//       10: '#E6E6E6',
//       20: '#D9D9D9',
//       50: '#9F9F9F',
//       75: '#666565',
//       125: '#302F2F',
//       165: '#161616',
//       190: '#060606',
//     },
//     primary: {
//       main: '#1A6EEB',
//       5: '#F4F8FE',
//       10: '#E8F0FD',
//       25: '#C6DBFA',
//       50: '#8CB7F5',
//       75: '#5392F0',
//       100: '#1A6EEB',
//       115: '#165EC8',
//       135: '#114799',
//       145: '#3A5275',
//       155: '#223D63',
//       165: '#092752',
//       180: '#172D4D',
//       blue_btn: '#0D5BD3',
//       blue_independence_day: '#015CF7',
//     },
//     error: {
//       main: '#F32C00',
//       5: '#FEF4F2',
//       10: '#FEEAE5',
//       25: '#FCCABF',
//       50: '#F99580',
//       75: '#F66140',
//       110: '#DB2800',
//       135: '#9E1D00',
//       180: '#310900',
//       red_button: '#C53838',
//     },
//     warning: {
//       main: '#FFB800',
//       5: '#FFFBF2',
//       10: '#FFF8E5',
//       25: '#FFEDBF',
//       50: '#FFDC80',
//       75: '#FFCA40',
//       110: '#EE9F28',
//       135: '#CB7B03',
//       180: '#584000',
//       yellow_independence_day: '#F7B300',
//     },
//     success: {
//       main: '#29D445',
//       5: '#F4FDF6',
//       10: '#EAFBEC',
//       25: '#C9F4D1',
//       50: '#94E9A2',
//       75: '#5EDF74',
//       110: '#23B43B',
//       135: '#1B8A2D',
//       180: '#0E4A18',
//       190: '#5BCF94',
//     },
//     gradient: {
//       blue: 'linear-gradient(305.06deg, #114799 9.16%, #1A6EEB 83.22%)',
//       purpleRain: 'linear-gradient(225.27deg, #B721FF 6.51%, #23D0FD 92.28%)',
//       blueSteel: 'linear-gradient(187.18deg, #4566DF 11.48%, #47A0E0 96.35%)',
//       deckard: 'linear-gradient(317.12deg, #959AE2 8.87%, #8BC5EC 91.3%)',
//       compact: 'linear-gradient(225.27deg, #E0C3FC 6.51%, #90C5FC 92.28%)',
//       mintRoyale: 'linear-gradient(225.27deg, #9EADE5 6.51%, #75EAD5 92.28%)',
//       nunc: 'linear-gradient(44.9deg, #F73CD3 2.34%, #4823C9 93.43%)',
//       oceana: 'linear-gradient(180deg, #29F498 0%, #09AFE9 100%)',
//       sublime: 'linear-gradient(225.27deg, #FDFB7E 6.51%, #87FFBC 92.28%)',
//       pureShores: 'linear-gradient(225.27deg, #70E1F5 6.51%, #FDD195 92.28%)',
//       sunkist: 'linear-gradient(225.27deg, #F7CE68 6.51%, #FAAC7D 92.28%)',
//       miamiVice: 'linear-gradient(225.27deg, #FF5ECA 6.51%, #FBD863 92.28%)',
//       indiana: 'linear-gradient(270deg, #EE5D4A 0%, #DF569A 100%)',
//       netus: 'linear-gradient(167.37deg, #FBD863 10.31%, #FF5E85 92.01%)',
//       lightGrey: 'linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #E8E8E8 100%)',
//       white: 'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
//       loadMoreWrapper: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 95.07%)',
//       yellow: 'linear-gradient(277.52deg, #FFB800 9.54%, #FFCC4A 99.42%)',
//       lightYellow: 'linear-gradient(167.37deg, #FBD863 10.31%, #FFB800 92.01%)',
//       orange: 'linear-gradient(278.97deg, #EE9F28 21.7%, #FFB800 104.93%)',
//       grey: 'linear-gradient(90deg, rgba(245,245,245,0.06908700980392157) 0%, rgba(245,245,245,1) 18%, rgba(245,245,245,1) 100%)',
//     },
//     gray: {
//       A100: '#F2F2F2',
//       A200: '#FFFFFF4D',
//       A300: '#D9D9D9',
//       A400: '#9E9E9E',
//       A500: '#EBEBEB',
//       A600: '#7D7D7D',
//       A700: '#494949',
//     },
//   },
//   components: {
//     MuiContainer: {
//       styleOverrides: {
//         root: ({ theme }) => ({
//           [theme.breakpoints.up('lg')]: {
//             maxWidth: '1142px',
//           },
//           [theme.breakpoints.up('xl')]: {
//             maxWidth: '1620px',
//           },
//         }),
//       },
//     },
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           background: 'white',
//           borderRadius: 6,
//         },
//         input: ({ theme }) => ({
//           '&::placeholder': {
//             color: theme.palette.black[80],
//           },
//         }),
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           color: (theme) => theme.palette.common.black[190],
//           borderRadius: '4px',
//           borderColor: (theme) => theme.palette.black[10],
//         },
//         filled: {
//           background: '#ECECEC',
//         },
//       },
//     },
//     MuiFormControlLabel: {
//       styleOverrides: {
//         root: ({ theme }) => ({
//           '& .Mui-checked ~ .MuiTypography-root': {
//             color: theme.palette.primary.main,
//           },
//         }),
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: ({ theme }) => ({
//           // NOTE! It used for breaks in sentence.
//           // We can control spacings and breaks in cms.
//           [theme.breakpoints.up('xs')]: {
//             whiteSpace: 'normal',
//           },
//           [theme.breakpoints.up('lg')]: {
//             whiteSpace: 'pre-line',
//           },
//         }),
//       },
//     },
//   },

//   typography: {
//     fontFamily: inter.style.fontFamily,
//   },
// });

// /**
//  * Typography schema
//  */
// commonTheme = createTheme(commonTheme, {
//   typography: {
//     h1: {
//       fontSize: '72px',
//       lineHeight: '96px',
//       fontWeight: 400,
//     },
//     h1Small: {
//       fontSize: '64px',
//       lineHeight: '90px',
//       fontWeight: 400,
//     },
//     h2: {
//       fontSize: '48px',
//       lineHeight: '64px',
//       fontWeight: 400,
//     },
//     h3: {
//       fontSize: '40px',
//       lineHeight: '48px',
//       fontWeight: 400,
//     },
//     h4: {
//       fontSize: '32px',
//       lineHeight: '40px',
//       fontWeight: 400,
//     },
//     h5: {
//       lineHeight: '32px',
//       fontSize: '24px',
//       fontWeight: 400,
//     },
//     lead: {
//       fontSize: '18px',
//       lineHeight: '24px',
//       fontWeight: 400,
//     },
//     caption: {
//       fontSize: '14px',
//       lineHeight: '24px',
//       fontWeight: 400,
//     },
//     body: {
//       fontSize: '16px',
//       lineHeight: '24px',
//       fontWeight: 400,
//     },
//     small: {
//       fontSize: '12px',
//       lineHeight: '16px',
//       fontWeight: 400,
//     },
//     tiny: {
//       fontSize: '11px',
//       lineHeight: '12px',
//       fontWeight: 400,
//     },
//     backgroundFont: {
//       fontWeight: 900,
//       fontSize: '200px',
//       lineHeight: '197px',
//     },
//     backgroundFontSmall: {
//       fontWeight: 900,
//       fontSize: '140px',
//       lineHeight: '142px',
//     },
//     backgroundFontDesktop: {
//       fontWeight: 900,
//       fontSize: '110px',
//       lineHeight: '142px',
//     },
//     backgroundFontMobile: {
//       fontWeight: 900,
//       fontSize: '80px',
//       lineHeight: '92px',
//     },
//     backgroundFontMobileSmall: {
//       fontWeight: 900,
//       fontSize: '50px',
//       lineHeight: '48px',
//     },
//     backgroundFontMobileTiny: {
//       fontWeight: 900,
//       fontSize: '45px',
//       lineHeight: '48px',
//     },
//   },
// });

// /**
//  * Created to inherit typography schema
//  */
// commonTheme = createTheme(commonTheme, {
//   typography: {
//     h1Bold: {
//       ...commonTheme.typography.h1,
//       fontWeight: 700,
//     },
//     h1SmallBold: {
//       ...commonTheme.typography.h1Small,
//       fontWeight: 700,
//     },
//     h1Montserrat: {
//       ...commonTheme.typography.h1,
//       fontFamily: montserrat.style.fontFamily,
//       fontSize: '64px',
//       fontWeight: 800,
//     },
//     h2Bold: {
//       ...commonTheme.typography.h2,
//       fontWeight: 700,
//     },
//     h2MontserratExbold: {
//       ...commonTheme.typography.h2,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 800,
//     },
//     h2Montserrat: {
//       ...commonTheme.typography.h2,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 700,
//     },
//     h2RegMontserrat: {
//       ...commonTheme.typography.h2,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 400,
//     },
//     h3Bold: {
//       ...commonTheme.typography.h3,
//       fontWeight: 700,
//     },
//     h3Montserrat: {
//       ...commonTheme.typography.h3,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 700,
//     },
//     header3RegMontserrat: {
//       ...commonTheme.typography.h3,
//       fontFamily: montserrat.style.fontFamily,
//     },
//     h4Bold: {
//       ...commonTheme.typography.h4,
//       fontWeight: 700,
//     },
//     header4BoldMontserrat: {
//       ...commonTheme.typography.h4,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 700,
//     },
//     header4ExboldMontserrat: {
//       ...commonTheme.typography.h4,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 800,
//     },
//     header4RegMontserrat: {
//       ...commonTheme.typography.h4,
//       fontFamily: montserrat.style.fontFamily,
//     },
//     h5Bold: {
//       ...commonTheme.typography.h5,
//       fontWeight: 700,
//     },
//     header5BoldMontserrat: {
//       ...commonTheme.typography.h5,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 700,
//     },
//     header5MedMontserrat: {
//       ...commonTheme.typography.h5,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 500,
//     },
//     h5RegMontserrat: {
//       ...commonTheme.typography.h5,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 400,
//     },
//     header5MedUnderlinedMontserrat: {
//       ...commonTheme.typography.h5,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 500,
//       textDecoration: 'underline',
//     },
//     leadBold: {
//       ...commonTheme.typography.lead,
//       fontWeight: 700,
//     },
//     subtitle2Montserrat: {
//       ...commonTheme.typography.lead,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 700,
//     },
//     subtitle2RegMontserrat: {
//       ...commonTheme.typography.lead,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 400,
//     },
//     subtitle2MedMontserrat: {
//       ...commonTheme.typography.lead,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 500,
//     },
//     leadUnderline: {
//       ...commonTheme.typography.lead,
//       textTransform: 'underline',
//     },
//     captionBold: {
//       ...commonTheme.typography.caption,
//       fontWeight: 700,
//     },
//     bodyBold: {
//       ...commonTheme.typography.body,
//       fontWeight: 700,
//     },
//     bodyItalic: {
//       ...commonTheme.typography.body,
//       fontStyle: 'italic',
//     },
//     bodyUnderline: {
//       ...commonTheme.typography.body,
//       textDecoration: 'underline',
//     },
//     bodyUppercase: {
//       ...commonTheme.typography.body,
//       textTransform: 'uppercase',
//     },
//     bodyBoldMontserrat: {
//       ...commonTheme.typography.body,
//       fontFamily: montserrat.style.fontFamily,
//       fontWeight: 700,
//     },
//     preTitleMontserrat: {
//       ...commonTheme.typography.small,
//       fontFamily: montserrat.style.fontFamily,
//     },
//     smallBold: {
//       ...commonTheme.typography.small,
//       fontWeight: 700,
//     },
//     smallItalic: {
//       ...commonTheme.typography.small,
//       fontStyle: 'italic',
//     },
//     smallUnderline: {
//       ...commonTheme.typography.small,
//       textDecoration: 'underline',
//     },
//     smallUppercase: {
//       ...commonTheme.typography.small,
//       textTransform: 'uppercase',
//     },
//     tinylBold: {
//       ...commonTheme.typography.small,
//       fontWeight: 700,
//     },
//     tinyItalic: {
//       ...commonTheme.typography.small,
//       fontStyle: 'italic',
//     },
//     tinyUnderline: {
//       ...commonTheme.typography.small,
//       textDecoration: 'underline',
//     },
//     tinyUppercase: {
//       ...commonTheme.typography.small,
//       textTransform: 'uppercase',
//     },
//     smallMontserrat: {
//       ...commonTheme.typography.tiny,
//       fontFamily: montserrat.style.fontFamily,
//     },
//     bebas: {
//       ...commonTheme.typography.h1,
//       fontFamily: bebas_neue.style.fontFamily,
//       fontSize: '138px',
//       fontWeight: 400,
//       textTransform: 'uppercase',
//     },
//     bebasSmall: {
//       ...commonTheme.typography.h1,
//       fontFamily: bebas_neue.style.fontFamily,
//       fontSize: '55px',
//       textTransform: 'uppercase',
//     },
//     ptSansNarrow: {
//       ...commonTheme.typography.h1,
//       fontFamily: pt_sans_narrow.style.fontFamily,
//       fontSize: '138px',
//       textTransform: 'uppercase',
//     },
//     ptSansNarrowSmall: {
//       ...commonTheme.typography.h1,
//       fontFamily: pt_sans_narrow.style.fontFamily,
//       fontSize: '50px',
//       textTransform: 'uppercase',
//     },
//   },
// });

// export default commonTheme;
