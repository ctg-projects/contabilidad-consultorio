export interface MenuItem {
  label: string;
  description: string;
  route_path: string;
  icon_img: string;
  src_img: string;
}

export interface MenuState {
  menuItems: MenuItem[];
}

export const initialMenuState: MenuState = {
  menuItems: []
};
