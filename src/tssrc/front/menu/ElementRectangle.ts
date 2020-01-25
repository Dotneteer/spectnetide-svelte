/**
 * Represents the boundaries of an HTML element
 */
export interface ElementRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * Represents the boundaries of a MenuItem instance
 */
export interface MenuItemRectangle extends ElementRectangle {
  index: number;
}