import {Injectable} from "@angular/core";
import {delay, Observable, of} from "rxjs";
import {OsUsageContent} from "../models/os-usage.content";
import {OsUsageContentItem} from "../models/os-usage-content-item";

@Injectable({
  providedIn: 'root',
})
export class OsUsageApi {
  // TODO: It is a mock logic. It have to be replaced by a backend request
  public getContent(skip: number, take: number): Observable<OsUsageContent> {
    const totalPagesNumber: number = 10;
    if (skip >= totalPagesNumber) skip = totalPagesNumber - take;

    let items: OsUsageContentItem[] = [];
    for (let i = 0; i < take && i + skip < totalPagesNumber; i++) {
      let item: OsUsageContentItem = new OsUsageContentItem(
        `OsUsageContentItem: ${skip + i + 1}`
      );
      items.push(item);
    }

    let content: OsUsageContent = new OsUsageContent(
      totalPagesNumber,
      skip,
      items
    );

    return of(content).pipe(delay(100));
  }
}
