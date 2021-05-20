import { Page } from "../models/page"

export class PageHelper {

  public static buildPage<T>(pageNumber: number, size: number, collecton: T[]): Page<T> {
    let content: T[] = []
    if (collecton.length > 0 && collecton.length >= (pageNumber * size)) {
      content = collecton.slice(pageNumber * size, (pageNumber * size + size))
    }
    const totalPages = Math.ceil(collecton.length / size)
    const page: Page<T> = {
      content,
      pageable: {
        sort: {
          sorted: true
        },
        offset: 0,
        pageNumber,
        pageSize: size,
        paged: true
      },
      totalElements: collecton.length,
      totalPages,
      last: pageNumber === totalPages,
      size,
      number: pageNumber,
      sort: {
        sorted: true
      },
      first: pageNumber === 0,
      numberOfElements: content.length,
      empty: content.length === 0
    }
    return page
  }
  
}