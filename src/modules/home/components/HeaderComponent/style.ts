import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  padding: 0,
}));

export const HeaderTypography = styled(Typography)(({}) => ({
    fontSize: '2em',
    color: 'black',
  }));

