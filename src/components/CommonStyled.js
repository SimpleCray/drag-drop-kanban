import { Box, Button, Card, Container, Stack, styled, Typography } from '@mui/material';
import { themes } from '../theme';

export const StyledBackground = styled(Container)({
    backgroundColor: themes.light.colorWhite,
});

export const KanbanHeader = styled(Typography)({
    fontSize: '32px',
    color: themes.light.colorDarkOrchid,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '30px',
});

export const KanbanListContainer = styled(Card)({
    width: '300px',
    minHeight: '200px',
});

export const CardContainer = styled(Box)({
    padding: '20px',
});
