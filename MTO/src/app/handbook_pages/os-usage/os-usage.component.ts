import {Component} from '@angular/core';
import {OsUsageApi} from "./api/os-usage-api";
import {OsUsageContent} from "./models/os-usage.content";
import {OsUsageContentItem} from "./models/os-usage-content-item";
import {ItemsHandler} from "../../utils/items-handler";

@Component({
  selector: 'os-usage',
  templateUrl: './os-usage.component.html',
  styleUrls: ['./os-usage.component.scss']
})
export class OsUsageComponent {
  public itemsPerPage: number = 3;
  public model: OsUsageContent = new OsUsageContent();

  public totalPages: number = 1;
  public currentPage: number = 1;
  public nextPages!: number[];
  public previousPages!: number[];

  constructor(
    private readonly api: OsUsageApi
  ) {
    this.loadContentByPage(this.currentPage);
  }

  // Data handling

  public removeItem(item: OsUsageContentItem): void {
    let index: number = this.model.items.indexOf(item);
    // Item not found
    if (index < 0) {
      return;
    }

    this.model.items.splice(index, 1);
  }

  public loadContentByPage(page: number): void {
    if (page < 1) page = 1;
    else if (page > this.totalPages) page = this.totalPages;

    let skip: number = ItemsHandler.getSkipItemsNumberByPage(page, this.itemsPerPage);
    this.loadContent(skip, this.itemsPerPage);
  }

  private loadContent(skip: number, take: number): void {
    this.api
      .getContent(skip, take)
      .subscribe(content => {
        this.totalPages = ItemsHandler.getTotalPagesNumber(content.totalItemsNumber, this.itemsPerPage);
        this.currentPage = ItemsHandler.getCurrentPage(content.skippedItems, this.itemsPerPage);
        this.previousPages = ItemsHandler.getPreviousPages(this.currentPage);
        this.nextPages = ItemsHandler.getNextPages(this.currentPage, this.totalPages);

        this.model = content;
      });
  }
}
