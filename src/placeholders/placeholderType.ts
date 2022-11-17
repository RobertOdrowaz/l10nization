import { QuickPickItem } from 'vscode';

export enum PlaceholderType {
  String = 'String'
}

export function getPlaceholderTypes() {
  return Object.keys(PlaceholderType).filter((p) => isNaN(Number(p)));
}

export function getPlaceholderType(placeholderTypeValue: string) {
  return Object.values(PlaceholderType).filter(
    (p) => p === placeholderTypeValue
  )[0] as PlaceholderType;
}

export class PlaceholderTypeItem implements QuickPickItem {
  label: string;

  constructor(label: string) {
    this.label = label;
  }
}
