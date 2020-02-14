import { BrowserWindow } from "electron";
import { __DARWIN__ } from "../../main/utils/electron-utils";
import { MenuItemBase } from "./ui-menu-item";
import { mainProcessStore } from "@/main/mainProcessStore";
import { outputShowOutputAction, outputShowConsoleAction, outputShowErrorsAction } from "../state/redux-main-canvas-state";

export class AboutCommand extends MenuItemBase {
  constructor() {
    super("show-about", "About ZX Spectrum IDE...");
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class OptionsCommand extends MenuItemBase {
  constructor() {
    super("show-preferences", __DARWIN__ ? "Preferences..." : "O&ptions...");
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class NewProjectCommand extends MenuItemBase {
  constructor() {
    super("create-project", __DARWIN__ ? "New Project..." : "&New project...");
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class OpenProjectCommand extends MenuItemBase {
  constructor() {
    super("open-project", __DARWIN__ ? "Open Project..." : "&Open project...");
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class CloseProjectCommand extends MenuItemBase {
  constructor() {
    super("close-project", __DARWIN__ ? "Close Project" : "Close project");
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class ShowExplorerCommand extends MenuItemBase {
  constructor() {
    super("show-project", __DARWIN__ ? "Show Explorer" : "Show explorer");
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class ShowSpectrumEmulatorCommand extends MenuItemBase {
  constructor() {
    super(
      "show-spectrum-emulator",
      __DARWIN__ ? "ZX Spectrum Emulator" : "ZX Spectrum emulator"
    );
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class ShowRegistersCommand extends MenuItemBase {
  constructor() {
    super("show-registers", __DARWIN__ ? "Z80 Registers" : "Z80 registers");
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class ShowDisassemblyCommand extends MenuItemBase {
  constructor() {
    super(
      "show-disassembly",
      __DARWIN__ ? "Z80 Disassembly" : "Z80 disassembly"
    );
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class ShowMemoryCommand extends MenuItemBase {
  constructor() {
    super(
      "show-memory",
      __DARWIN__ ? "ZX Spectrum Memory" : "ZX Spectrum memory"
    );
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

export class ShowOutputCommand extends MenuItemBase {
  constructor() {
    super("show-output", __DARWIN__ ? "Show Output" : "Show output");
  }

  onExecute(_window: BrowserWindow) {
    mainProcessStore.dispatch(outputShowOutputAction());
  }
}

export class ShowErrorsCommand extends MenuItemBase {
  constructor() {
    super("show-errors", __DARWIN__ ? "Show Errors" : "Show errors");
  }

  onExecute(_window: BrowserWindow) {
    mainProcessStore.dispatch(outputShowErrorsAction());
  }
}

export class ShowConsoleCommand extends MenuItemBase {
  constructor() {
    super("show-console", __DARWIN__ ? "Show Console" : "Show console");
  }

  onExecute(_window: BrowserWindow) {
    mainProcessStore.dispatch(outputShowConsoleAction());
  }
}

export class ToggleDevToolsCommand extends MenuItemBase {
  constructor() {
    super(
      "toggle-dev-tools",
      __DARWIN__ ? "Toggle Developer Tools" : "&Toggle developer tools"
    );
  }

  onExecute(window: BrowserWindow) {
    window.webContents.toggleDevTools();
  }
}
