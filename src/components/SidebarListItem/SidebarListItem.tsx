import { createStyles, ListItem, Theme, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const textColor = grey[400];
const selectedTextColor = "#fff";
const hoverTextColor = grey[200];

const style = (theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 5,
      padding: theme.spacing(0.5),
      paddingLeft: theme.spacing(3),
      "& .MuiListItemText-root span": {
        color: `${textColor} !important`,
      },
      "& .MuiListItemIcon-root": {
        color: `${textColor} !important`,
      },
      "&:hover": {
        "& .MuiListItemText-root span": {
          color: `${hoverTextColor} !important`,
        },
        "& .MuiListItemIcon-root": {
          color: `${hoverTextColor} !important`,
        },
      },
    },
    selected: {
      backgroundColor: `${theme.palette.grey[700]} !important`,

      "& .MuiListItemText-root span": {
        color: `${selectedTextColor} !important`,
      },
      "& .MuiListItemIcon-root": {
        color: `${selectedTextColor} !important`,
      },
    },
  });

export default withStyles(style)(ListItem);
