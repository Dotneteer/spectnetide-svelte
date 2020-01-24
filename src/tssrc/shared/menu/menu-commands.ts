import { UiMenuItem } from "./ui-menu-item";
import { BrowserWindow } from "electron";
import { __DARWIN__ } from "../../main/utils/electron-utils";

export class AboutCommand extends UiMenuItem {
  constructor() {
    super("show-about", "About ZX Spectrum IDE...");
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class OptionsCommand extends UiMenuItem {
  constructor() {
    super("show-preferences", __DARWIN__ ? "Preferences..." : "&Options...");
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class NewProjectCommand extends UiMenuItem {
  constructor() {
    super("create-project", __DARWIN__ ? "New Project..." : "&New project...");
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class OpenProjectCommand extends UiMenuItem {
  constructor() {
    super("open-project", __DARWIN__ ? "Open Project..." : "&Open project...");
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class CloseProjectCommand extends UiMenuItem {
  constructor() {
    super("close-project", __DARWIN__ ? "Close Project" : "Close project");
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class ShowExplorerCommand extends UiMenuItem {
  constructor() {
    super("show-project", __DARWIN__ ? "Show Explorer" : "Show explorer");
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class ShowSpectrumEmulatorCommand extends UiMenuItem {
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

export class ShowRegistersCommand extends UiMenuItem {
  constructor() {
    super("show-registers", __DARWIN__ ? "Z80 Registers" : "Z80 registers");
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class ShowDisassemblyCommand extends UiMenuItem {
  constructor() {
    super(
      "show-disassembly",
      __DARWIN__ ? "Z80 Disassembly" : "Z80 disassembly"
    );
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class ShowMemoryCommand extends UiMenuItem {
  constructor() {
    super(
      "show-memory",
      __DARWIN__ ? "ZX Spectrum Memory" : "ZX Spectrum memory"
    );
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}

export class ToggleDevToolsCommand extends UiMenuItem {
  constructor() {
    super(
      "toggle-dev-tools",
      __DARWIN__ ? "Toggle Developer Tools" : "&Toggle developer tools"
    );
  }

  onExecute(window: BrowserWindow) {
    // TODO: Implement this command
  }
}


