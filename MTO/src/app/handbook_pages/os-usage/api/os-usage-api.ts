import {Injectable} from "@angular/core";
import {delay, Observable, of} from "rxjs";
import {OsUsageContent} from "../models/os-usage.content";
import {OsUsageContentItem} from "../models/os-usage-content-item";

@Injectable({providedIn: 'root'})
export class OsUsageApi {
  private static items: OsUsageContentItem[] = OsUsageApi.generateFakeData();

  // TODO: It is a mock logic. It have to be replaced by a backend request
  public getContent(skip: number, take: number): Observable<OsUsageContent> {
    if (skip >= OsUsageApi.items.length) {
      skip = OsUsageApi.items.length - take;
    }

    let items: OsUsageContentItem[] = OsUsageApi.items.slice(skip, take + skip);

    let content: OsUsageContent = new OsUsageContent(
      OsUsageApi.items.length,
      skip,
      items
    );

    return of(content).pipe(delay(100));
  }

  private static generateFakeData(): OsUsageContentItem[] {
    let items: OsUsageContentItem[] = [];
    for (let i = 0; i < 100; i++) {
      let item: OsUsageContentItem = new OsUsageContentItem(`Item ${i}`);
      items.push(item);
    }

    return items;
  }
}
