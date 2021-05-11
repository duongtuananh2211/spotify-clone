import { Paper, Slide, Theme, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useUser } from "reactfire";
import appearance from "configs/appearance";

interface IProps {}

const FooterPaper = withStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    height: appearance.FOOTER_HEIGHT,
    width: "100%",
    bottom: 0,
    left: 0,
    zIndex: 2000,
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 0,
    borderTop: `1px solid ${theme.palette.primary.main}`,
  },
}))(Paper);

const Footer: React.FC<IProps> = () => {
  const [open, setOpen] = useState(false);

  const user = useUser();

  useEffect(() => {
    setTimeout(() => setOpen(true), 1000);
  }, []);

  if (!user.data) return null;

  return (
    <Slide in={open} direction="up">
      <FooterPaper elevation={5}></FooterPaper>
    </Slide>
  );
};

export default Footer;
