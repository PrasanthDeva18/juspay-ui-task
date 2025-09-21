export interface MenuItem {
  label: string;
  icon?: any;
  children?: MenuItem[];
  favorite?: boolean;
  isHeading?: boolean;
}
