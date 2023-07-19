import {Component} from '@angular/core';
import {OsUsageApi} from "./api/os-usage-api";
import {OsUsageContent} from "./models/os-usage.content";
import {OsUsageContentItem} from "./models/os-usage-content-item";
import {PaginatorPageHelper} from "../../paginator/paginator-page-helper";
import {PaginatorDataBuilder} from "../../paginator/builders/paginator-data-builder";
import {PaginatorData} from "../../paginator/models/paginator-data";

@Component({
  selector: 'os-usage',
  templateUrl: './os-usage.component.html',
  styleUrls: ['./os-usage.component.scss']
})
export class OsUsageComponent {
  public itemsPerPage: number = 10;
  public model: OsUsageContent = new OsUsageContent();
  public paginator: PaginatorData = new PaginatorData();

  constructor(
    private readonly api: OsUsageApi
  ) {
    this.loadContentByPage(this.paginator.currentPage);
  }

  public removeItem(item: OsUsageContentItem): void {
    this.api.deleteItem(item.id)
      .subscribe(() => this.loadContentByPage(this.paginator.currentPage));
  }

  public loadContentByPage(page: number): void {
    if (page < 1) page = 1;
    else if (page > this.paginator.totalPages) page = this.paginator.totalPages;

    let skip: number = PaginatorPageHelper.getSkipItemsNumberByPage(page, this.itemsPerPage);
    this.loadContent(skip, this.itemsPerPage);
  }

  private loadContent(skip: number, take: number): void {
    this.api
      .getContent(skip, take)
      .subscribe(content => {
        this.paginator = PaginatorDataBuilder.build(
          this.itemsPerPage,
          content.skippedItems,
          content.items.length,
          content.totalItemsNumber
        );

        this.model = content;
      });
  }
}
