import { ITheme } from "./theme-core";
import { IconInfo } from "./IconInfo";
import { IGlobalStyleHandler } from "./IGlobalStylehandler";
import { IconDefs } from "./IconDefs";
import { ILiteEvent, LiteEvent } from "../utils/LiteEvent";

/**
 * Implements the theme service
 */
class ThemeServiceClass {
  private _themes: ITheme[] = [];
  private _activeThemeName: string | null = null;
  private _activeTheme: ITheme | null;
  private readonly _icons = new Map<string, IconInfo>();
  private _globalStyleHandler: IGlobalStyleHandler | null;
  private _themeContainer: HTMLElement | null;
  private _themeChanged = new LiteEvent<ITheme>();

  /**
   * Initializes the servise using the provided list of themes and active
   * theme name
   * @param {ITheme[]} themes List of available themes
   * @param {string} themeName Name of the active theme
   */
  constructor() {
      this.reset();
  }

  /**
   * Resets the service to its initial state.
   */
  reset() {
    this._themes = [];
    this._activeThemeName = null;
    this._activeTheme = null;
    this._icons.clear();
    IconDefs.forEach(def => this._icons.set(def.name, def));
    this._globalStyleHandler = null;
    this._themeContainer = null;
    this._themeChanged.release(); 
  }

  /**
   * This event is raised whenever the current theme changes
   */
  get themeChanged(): ILiteEvent<ITheme> {
    return this._themeChanged;
  }

  /**
   * Gets the active theme
   */
  getActiveTheme(): ITheme {
    return this._activeTheme;
  }

  /**
   * Gets the value of the specified property
   * @param {string} propName Property name
   */
  getProperty(propName: string): string {
    return this._activeTheme.properties[propName];
  }

  /**
   * Sets the theme to the specified one
   * @param {string} name Active theme name
   */
  setTheme(name: string) {
    this._activeThemeName = name;
    this._activeTheme = this._getTheme(name);
    this._themeChanged.fire(this._activeTheme);
  }

  /**
   * Registers a new theme
   * @param {ITheme} theme New theme definition
   */
  registerTheme(theme: ITheme) {
    this._themes.push(theme);
  }

  /**
   * Updates the specified theme
   * @param {string} name Theme name
   * @param {{ [key: string]: string; }} properties Theme properties to merge into an existing theme
   */
  updateTheme(name: string, properties: { [key: string]: string }) {
    const theme = this._getTheme(name);
    theme.properties = {
      ...theme.properties,
      ...properties
    };

    if (name === this._activeThemeName) {
      this._themeChanged.fire(theme);
    }
  }

  /**
   * Gets the specified icon information
   * @param name Icon name
   */
  getIcon(name: string): IconInfo {
    const iconInfo = this._icons.get(name);
    if (!iconInfo) {
      throw new Error(`Icon not found: '${name}'`);
    }
    return iconInfo;
  }

  /**
   * Registers the specified icon information
   * @param iconInfo Icon information
   */
  registerIcon(iconInfo: IconInfo) {
    this._icons.set(iconInfo.name, iconInfo);
  }

  /**
   * Registers a global style handler
   * @param handler Handler to register
   */
  registerGlobalStyleHandler(handler: IGlobalStyleHandler): void {
    this._globalStyleHandler = handler;
  }

  /**
   * Retrieves the global style handler
   */
  getGlobalStyleHandler(): IGlobalStyleHandler | undefined {
    return this._globalStyleHandler;
  }

  /**
   * Registers the element that is the theme container.
   * @param container Theme container element
   */
  registerThemeContainer(container: HTMLElement): void {
    this._themeContainer = container;
  }

  /**
   * Gets the theme container
   */
  getThemeContainer(): HTMLElement | undefined {
    return this._themeContainer;
  }

  /**
   * Gets the theme with the specified name
   * @param {string} name Theme name
   */
  private _getTheme(name: string) {
    const theme = this._themes.find(t => t.name === name);
    if (!theme) {
      throw new Error(`Theme not found: '${name}'`);
    }
    return theme;
  }
}

/**
 * The singleton ThemeService instance
 */
export const ThemeService = new ThemeServiceClass();
