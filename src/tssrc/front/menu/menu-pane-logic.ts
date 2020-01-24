import { UiMenuItem, SeparatorMenuItem } from "../../shared/menu/ui-menu-item";

export function flattenCommandGroup(items: UiMenuItem[]): UiMenuItem[] {
  if (!items) return [];
  const flattened: UiMenuItem[] = [];
  let lastItemWasGroup = false;
  let groupJustEnded = false;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // --- Provide separator between groups
    if (
      (i > 0 && item.items.length > 0 !== lastItemWasGroup) ||
      groupJustEnded
    ) {
      flattened.push(new SeparatorMenuItem());
    }

    lastItemWasGroup = item.items.length > 0;
    groupJustEnded = false;

    if (item.items.length > 0) {
      for (let j = 0; j < item.items.length; j++) {
        const subitem = item.items[j];
        flattened.push(subitem);
      }
      groupJustEnded = true;
    } else {
      flattened.push(item);
    }
  }
  console.log(flattened);
  return flattened;
}
