import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confirmarDialogo',
  templateUrl: './confirmarDialogo.component.html',
  styleUrls: ['./confirmarDialogo.component.css']
})
export class ConfirmarDialogoComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ConfirmarDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje:any
  ) { }

  ngOnInit() {
    console.log("mesaje en el modal",this.mensaje)

  }

  onClickNO(){
    this.dialogRef.close()
  }
}
