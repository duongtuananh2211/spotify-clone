import React, { useCallback, useMemo } from "react";
import { List, ListItemIcon, ListItemText } from "@material-ui/core";
import SidebarListItem from "components/SidebarListItem";
import items from "./items";

interface IProps {}

const SidebarTabs: React.FC<IProps> = () => {
  const location = useMemo(() => window.location.pathname, []);

  const isMatched = useCallback(
    (path: string) => {
      if (location === path) return true;

      if (path === "/") return false;

      return false;
    },
    [location]
  );

  return (
    <List>
      {items.map(({ icon: Icon, path, title }) => (
        <SidebarListItem selected={isMatched(path)} key={path} button>
          <ListItemIcon color="primary">
            <Icon />
          </ListItemIcon>
          <ListItemText>{title}</ListItemText>
        </SidebarListItem>
      ))}
    </List>
  );
};

export default SidebarTabs;
