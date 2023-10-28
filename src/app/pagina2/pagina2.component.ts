import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../data/datanew';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid!: IgxGridComponent;

  public data: any[]=[];

  public ngOnInit(): void {
    this.data = DATA;
  }

  constructor(private cdr:ChangeDetectorRef){
    //this.grid.typeof()
  }

  public keydownHandler(event:any) {
    const key = event.keyCode;
    const grid = this.grid;
    const activeElem = grid.navigation.activeNode;

    if (
      (key >= 48 && key <= 57) ||
      (key >= 65 && key <= 90) ||
      (key >= 97 && key <= 122)
    ) {
      // Number or Alphabet upper case or Alphabet lower case

      const columnName = grid.getColumnByVisibleIndex(activeElem.column!).field;
      const cell = grid.getCellByColumn(activeElem.row, columnName);
      if (cell && !grid.crudService.cellInEditMode) {
        grid.crudService.enterEditMode(cell);
        cell.editValue = event.key;
      }
    }

    if (key == 13) {
      let thisRow = activeElem.row;
      const column = activeElem.column;
      const rowInfo = grid.dataView;

      let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

      this.grid.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        this.grid.clearCellSelection();
        this.cdr.detectChanges();
        });
    }
    }

  public activeNodeChange() {
    this.grid.clearCellSelection();
    this.grid.endEdit();
  }

  public getNextEditableRowIndex(currentRowIndex:any, dataView:any, previous:any){
    if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
        return currentRowIndex;
    }
    if(previous){
      return  dataView.findLastIndex((rec:any, index:any) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
    }
    return dataView.findIndex((rec:any, index:any) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
  }

  private isEditableDataRecordAtIndex(dataViewIndex:any, dataView:any) {
    const rec = dataView[dataViewIndex];
    return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData
  }

}
