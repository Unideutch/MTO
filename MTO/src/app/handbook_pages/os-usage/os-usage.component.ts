import {Component} from '@angular/core';
import {OsUsageApi} from "./api/os-usage-api";
import {OsUsageContent} from "./models/os-usage.content";
import {OsUsageContentItem} from "./models/os-usage-content-item";
import {PaginatorItemsInfoHandler} from "../../paginator/paginator-items-info-handler";
import {PaginatorPageInfoHandler} from "../../paginator/paginator-page-info-handler";
import {PaginatorPage} from "../../paginator/paginator-page";

@Component({
  selector: 'os-usage',
  templateUrl: './os-usage.component.html',
  styleUrls: ['./os-usage.component.scss']
})
export class OsUsageComponent {
  public itemsPerPage: number = 10;
  public model: OsUsageContent = new OsUsageContent();

  public totalPages: number = 1;
  public currentPage: number = 1;
  public pageInfos: PaginatorPage[] = [];

  constructor(
    private readonly api: OsUsageApi
  ) {
    this.loadContentByPage(this.currentPage);
  }

  // Data handling

  public removeItem(item: OsUsageContentItem): void {
    this.api.deleteItem(item.id).subscribe(() => this.loadContentByPage(this.currentPage));
  }

  public loadContentByPage(page: number): void {
    if (page < 1) {
      page = 1;
    } else if (page > this.totalPages) {
      page = this.totalPages;
    }

    let skip: number = PaginatorItemsInfoHandler.getSkipItemsNumberByPage(page, this.itemsPerPage);
    this.loadContent(skip, this.itemsPerPage);
  }

  private loadContent(skip: number, take: number): void {
    this.api
      .getContent(skip, take)
      .subscribe(content => {
        this.totalPages = PaginatorItemsInfoHandler.getTotalPagesNumber(content.totalItemsNumber, this.itemsPerPage);
        this.currentPage = PaginatorPageInfoHandler.getCurrentPage(content.skippedItems, this.itemsPerPage);
        this.pageInfos = PaginatorPageInfoHandler.buildPageInfos(this.currentPage, this.totalPages);

        this.model = content;
      });
  }
}
