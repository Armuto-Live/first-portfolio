import { createTheme,responsiveFontSizes } from "@mui/material";

const disableRipple="true";

let theme=createTheme({
    typography:{
        h1:{
            fontSize:"14rem",
        }
    },
    button:{
        '&hover':{
            color:"black",
        }
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    disableRipple,
                    fontSize:"20px",
                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    color:"#00ffff",
                    fontWeight:"600",
                }
            },
        },
    }
})

theme=responsiveFontSizes(theme);
export default theme;