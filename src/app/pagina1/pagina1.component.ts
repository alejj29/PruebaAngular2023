import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarDialogoComponent } from '../confirmarDialogo/confirmarDialogo.component';
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

   nombre= '';
   telefono= null;


  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    const dialogref=this.dialog.open(ConfirmarDialogoComponent,{
      width:'350px',
      data:{nombre:this.nombre,telefono:this.telefono }
    });
    dialogref.afterClosed().subscribe(res=>{
      console.log(res)
    });
  }

}
