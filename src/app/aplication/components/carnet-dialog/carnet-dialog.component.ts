import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import QRCodeStyling from 'qr-code-styling';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-carnet-dialog',
  templateUrl: './carnet-dialog.component.html',
  styleUrls: ['./carnet-dialog.component.scss']
})
export class CarnetDialogComponent implements OnInit {
  @ViewChild("canvas", { static: true }) canvas: ElementRef | undefined ;
  title = 'QR code styling for Angular';
  data = '';
  extension = 'svg';
  qrCode:any = null;
  constructor(
    public dialogRef: MatDialogRef<CarnetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data_in:any,
  ) { }
  

  
  ngOnInit(): void {
    this.data = `${environment.HOST}${this.data_in['element']['_id']}`        
    this.title = this.data_in['element']['fullname']
    console.log(this.data_in['element']['_id'])
    this.qrCode = new QRCodeStyling({
      "width": 250,
      "height": 250,
      "data": this.data,
      "margin": 0,
      "qrOptions": {
        "typeNumber": 0,
        "mode": "Byte",
        "errorCorrectionLevel": "Q"
      },
      "imageOptions": {
        "hideBackgroundDots": true,
        "imageSize": 1,
        "margin": 5
      },
      "dotsOptions": {
        "type": "square",
        "color": "#121112"        
      },
      "backgroundOptions": {
        "color": "#ffffff"
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MC4wNyAyNC4wOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyNTMwNWQ7fS5jbHMtMntmaWxsOiMyZmE4MzY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV80IiBkYXRhLW5hbWU9IkNhcGEgNCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDEuMjcsMjIuOTJsMS4yNy0yLjhINTIuNzVMNTQsMjIuOTJhMS4zMSwxLjMxLDAsMCwwLC43NS42OSwxLjIsMS4yLDAsMCwwLDEsMCwxLjI5LDEuMjksMCwwLDAsLjcxLS43NCwxLjI1LDEuMjUsMCwwLDAsMC0xTDQ4LjgzLDUuMDZhMS4zMiwxLjMyLDAsMCwwLTIuMzgsMEwzOC44OCwyMS44NGExLjIxLDEuMjEsMCwwLDAsMCwxLDEuMzEsMS4zMSwwLDAsMCwuNy43NCwxLjI0LDEuMjQsMCwwLDAsMSwwQTEuMzMsMS4zMywwLDAsMCw0MS4yNywyMi45MlpNNDcuNjQsOC44bDMuOTEsOC42OUg0My43MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NC44MiwyMi45M2wxLjI3LTIuOEg4Ni4zbDEuMjUsMi44YTEuMjksMS4yOSwwLDAsMCwuNzQuNjksMS4yLDEuMiwwLDAsMCwxLDAsMS4yNiwxLjI2LDAsMCwwLC43MS0uNzQsMS4yNSwxLjI1LDAsMCwwLDAtMUw4Mi4zOCw1LjA3YTEuMzIsMS4zMiwwLDAsMC0yLjM4LDBMNzIuNDMsMjEuODVhMS4xNywxLjE3LDAsMCwwLDAsMSwxLjI2LDEuMjYsMCwwLDAsLjY5Ljc0LDEuMjQsMS4yNCwwLDAsMCwxLDBBMS4zMywxLjMzLDAsMCwwLDc0LjgyLDIyLjkzWk04MS4xOSw4LjgxLDg1LjEsMTcuNUg3Ny4yN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02OS43MiwyMS40M2ExLjI5LDEuMjksMCwwLDAtLjk0LS4zOEg2MS42VjUuNmExLjI3LDEuMjcsMCwwLDAtLjM5LS45M0ExLjMxLDEuMzEsMCwwLDAsNTksNS42VjIyLjM2YTEuMjMsMS4yMywwLDAsMCwuMzkuOTMsMS4yNSwxLjI1LDAsMCwwLC45My4zOWg4LjQ4YTEuMjksMS4yOSwwLDAsMCwuOTQtLjM5LDEuMjYsMS4yNiwwLDAsMCwuMzctLjkzQTEuMywxLjMsMCwwLDAsNjkuNzIsMjEuNDNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTUuODEsMjEuNjksNy41OCwxMy4xOGw2LjU0LTYuNTRhMS4yOCwxLjI4LDAsMCwwLC4zOC0uOTMsMS4zLDEuMywwLDAsMC0xLjMyLTEuMzIsMS4xNywxLjE3LDAsMCwwLS43OC4yOEwyLjYxLDE0LjQ1VjUuNWExLjE4LDEuMTgsMCwwLDAtLjM2LS43MywxLjI3LDEuMjcsMCwwLDAtLjkzLS4zOSwxLjIzLDEuMjMsMCwwLDAtLjkzLjM5QTEuMjQsMS4yNCwwLDAsMCwwLDUuNjhWMjIuNDZhMS4yOSwxLjI5LDAsMCwwLC4zOS45MywxLjI3LDEuMjcsMCwwLDAsLjkzLjM5LDEuMzEsMS4zMSwwLDAsMCwuOTMtLjM5LDEuMjMsMS4yMywwLDAsMCwuMzYtLjc1di00LjVMNS43NSwxNWw4LjA4LDguNGExLjMxLDEuMzEsMCwwLDAsLjk0LjM4LDEuMjgsMS4yOCwwLDAsMCwuOTMtLjM4LDEuMzEsMS4zMSwwLDAsMCwuMzgtLjk0QTEuMjEsMS4yMSwwLDAsMCwxNS44MSwyMS42OVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zNC42LDYuOTRBOS42NSw5LjY1LDAsMCwwLDI3LjUsNGE5LjcxLDkuNzEsMCwwLDAtNy4xLDIuOTNBOS42Myw5LjYzLDAsMCwwLDE3LjQ1LDE0YTkuNyw5LjcsMCwwLDAsMi45NSw3LjEsOS42OSw5LjY5LDAsMCwwLDcuMSwyLjk1LDkuNTYsOS41NiwwLDAsMCw3LjEtMi45NUE5LjcyLDkuNzIsMCwwLDAsMzcuNTQsMTQsOS42Miw5LjYyLDAsMCwwLDM0LjYsNi45NFpNMzIuNzMsMTkuMjhoMGE3LjM5LDcuMzksMCwwLDEtMTAuNDYsMEE3LjIsNy4yLDAsMCwxLDIwLjEsMTRhNy4xNSw3LjE1LDAsMCwxLDIuMTYtNS4yMiw3LjQsNy40LDAsMCwxLDEwLjQ3LDBBNy4xMiw3LjEyLDAsMCwxLDM0LjksMTQsNy4yLDcuMiwwLDAsMSwzMi43MywxOS4yOFoiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMiIgY3g9IjM2LjEyIiBjeT0iMi4yIiByPSIyLjIiLz48L2c+PC9nPjwvc3ZnPg==",
      "cornersSquareOptions": {
        "type": "square",
        "color": "#000000"
      },      
      "cornersDotOptions": {
        "type": "square",
        "color": "#31a836"
      },            
    }     
    );

    this.qrCode.append(this.canvas?.nativeElement);


  }
  
  close(){
    this.dialogRef.close();
  }

  onKey(event: any): void {
    this.data = event.target.value;
    this.qrCode.update({
      data: this.data
    });
  }

  onChange(event: any): void {
    console.log(event);
    this.extension = event.target.value;
  }

  download(): void {
    this.qrCode.download({ 
      name:this.data_in['element']['fullname'].replace(' ','_'),
      extension: this.extension
    });
  }

}
