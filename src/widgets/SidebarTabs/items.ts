import { Home, LibraryMusic, Search } from "@material-ui/icons";

const items: {
  title: string;
  path: string;
  icon: any;
}[] = [
  {
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    title: "Search",
    path: "/search",
    icon: Search,
  },
  {
    icon: LibraryMusic,
    path: "collection/playlists",
    title: "Your Library",
  },
];

export default items;
