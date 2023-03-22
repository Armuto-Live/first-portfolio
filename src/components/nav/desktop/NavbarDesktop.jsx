import React from "react";
import Typography from "@mui/material/Typography";
import { Toolbar, Grid, Button } from "@mui/material";

function NavbarDesktop() {
  return (
    <>
      <Toolbar sx={{ background: "#171717" }}>
        <Grid container justifyContent="center">
          <Grid item md={7}>
            <Grid container justifyContent="space-between">
              <Grid item md={2}>
                <Button variant="text" disableRipple>
                  L / A
                </Button>
              </Grid>
              <Grid item md={10}>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Button>
                    <Typography variant="body1">Portfolio</Typography>
                  </Button>
                  <Button>
                    <Typography variant="body1">About</Typography>
                  </Button>
                  <Button>
                    <Typography variant="body1">Services</Typography>
                  </Button>
                  <Button>
                    <Typography variant="body1">Skills</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}

export default NavbarDesktop;
