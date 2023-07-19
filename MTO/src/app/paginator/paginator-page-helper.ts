export class PaginatorPageHelper {
  public static getSkipItemsNumberByPage(
    page: number,
    itemsPerPage: number
  ): number {
    return (page - 1) * itemsPerPage;
  }

  public static getTotalPagesNumber(
    totalItemsNumber: number,
    itemsPerPage: number
  ): number {
    return Math.ceil(totalItemsNumber / itemsPerPage);
  }

  public static getCurrentPage(
    skippedItems: number,
    itemsPerPage: number
  ): number {
    return Math.ceil(skippedItems / itemsPerPage) + 1
  }
}
