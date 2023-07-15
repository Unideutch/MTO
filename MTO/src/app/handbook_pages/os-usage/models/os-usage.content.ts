import {OsUsageContentItem} from "./os-usage-content-item";

export class OsUsageContent {
  constructor(
    public totalPages: number = 1,
    public currentPage: number = 1,
    public items: OsUsageContentItem[] = [],
  ) {
  }
}
