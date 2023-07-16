export class ItemsHandler {
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

  static getCurrentPage(
    skippedItems: number,
    itemsPerPage: number
  ): number {
    return Math.ceil(skippedItems / itemsPerPage) + 1
  }

  public static getPreviousPages(
    currentPage: number,
    maxPreviousPages: number = 5
  ): number[] {
    let previousPages: number[] = [];
    let max: number = Math.min(currentPage - 1, maxPreviousPages);
    for (let page = 0; page < max; page++) {
      previousPages.push(currentPage - page - 1);
    }

    return previousPages.reverse();
  }

  public static getNextPages(
    currentPage: number,
    totalPagesNumber: number,
    maxNextPages: number = 5
  ): number[] {
    let nextPages: number[] = [];
    let max: number = Math.min(totalPagesNumber - currentPage - 1, maxNextPages);
    for (let i = 0; i < max; i++) {
      nextPages.push(i + currentPage + 1);
    }

    return nextPages;
  }
}
