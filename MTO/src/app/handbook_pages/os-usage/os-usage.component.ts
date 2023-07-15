import {Component} from '@angular/core';
import {OsUsageApi} from "./api/os-usage-api";
import {OsUsageContent} from "./models/os-usage.content";
import {OsUsageContentItem} from "./models/os-usage-content-item";

@Component({
  selector: 'os-usage',
  templateUrl: './os-usage.component.html',
  styleUrls: ['./os-usage.component.scss']
})
export class OsUsageComponent {
  public model: OsUsageContent = new OsUsageContent();
  public previousPages!: number[];
  public nextPages!: number[];

  constructor(
    private readonly api: OsUsageApi
  ) {
    this.loadContent(2);
  }

  public removeItem(item: OsUsageContentItem): void {
    let index: number = this.model.items.indexOf(item);
    // Item not found
    if (index < 0) {
      return;
    }

    this.model.items.splice(index, 1);
  }

  public loadContent(page: number): void {
    this.api
      .loadPage(page)
      .subscribe(content => {
        this.previousPages = [];
        for (let page: number = 0; page < content.currentPage - 1; page++) {
          this.previousPages.push(page + 1);
        }

        this.nextPages = [];
        for (let page: number = content.currentPage + 1; page <= content.totalPages; page++) {
          this.nextPages.push(page);
        }

        this.model = content;
      });
  }
}
