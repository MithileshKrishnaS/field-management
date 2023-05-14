import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterValue'
})
export class FilterValuePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      // check if job_id, assigned names or status is present on search text 
      const job_id = item.job_id.toString().toLowerCase().includes(searchText);
      const assigned_names = item.assigned_to.filter((each:any) => each.name.toLowerCase().includes(searchText));
      const status = item.status.toString().toLowerCase().includes(searchText);
      return job_id || assigned_names.length > 0 || status;
    });
  }

}
