import {OsUsageContentItem} from "./os-usage-content-item";

export class OsUsageContent {
  constructor(
    public totalItemsNumber: number = 100,
    public skippedItems: number = 10,
    public items: OsUsageContentItem[] = [],
  ) {
  }
}
