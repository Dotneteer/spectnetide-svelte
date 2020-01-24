/**
 * Provides global style handling behavior
 */
export interface IGlobalStyleHandler {
  /**
   * Gets the object that represent global styles in an
   * 'ngClass'-compliant way
   */
  readonly globalStyles: Set<string>;

  /**
   * Adds a new global style name
   * @param style Style rule name
   */
  addGlobalStyle(style: string): void;

  /**
   * Removes the specified global style
   * @param style Style rule name
   */
  removeGlobalStyle(style: string): void;

  /**
   * Clears all global styles
   */
  clearGlobalStyles(): void;
}
