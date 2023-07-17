import {PaginatorShownItemsInfo} from "../models/paginator-shown-items-info";

export class PaginatorShownItemsInfoHandler {
  public static buildShownItemsInfo(
    skippedItemsNumber: number,
    takenItemsNumber: number,
    totalItemsNumber: number
  ): PaginatorShownItemsInfo {
    const result = new PaginatorShownItemsInfo();

    if (totalItemsNumber < 1) {
      return result;
    }

    result.itemsFrom = skippedItemsNumber + 1;
    result.itemsTo = skippedItemsNumber + takenItemsNumber;
    result.totalItems = totalItemsNumber;

    return result;
  }
}
