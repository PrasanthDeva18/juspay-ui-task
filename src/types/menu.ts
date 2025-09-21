export interface MenuItem {
  label: string;
  icon?: any;
  children?: MenuItem[];
  path?: string;
  favorite?: boolean;
  isHeading?: boolean;
}
