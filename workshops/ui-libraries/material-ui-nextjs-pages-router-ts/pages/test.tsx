import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const TestPage = () => {
  const theme = useTheme();

  return (
    <>
      <Typography
        sx={{
          typography: {
            xs: "h6",
            md: "h5",
            lg: "h3",
          },
        }}
      >
        Test
      </Typography>
      <Box
        sx={{
          margin: {
            xs: 1,
            sm: 2,
          },
        }}
      >
        QWERTY
      </Box>
    </>
  );
};

export default TestPage;
