import {PaginatorPage} from "./paginator-page";
import {PaginatorShownItemsInfo} from "./paginator-shown-items-info";

export class PaginatorData {
  public totalPages: number = 0;
  public currentPage: number = 0;
  public pageInfos: PaginatorPage[] = [];
  public shownItemsInfo: PaginatorShownItemsInfo = new PaginatorShownItemsInfo();
}
