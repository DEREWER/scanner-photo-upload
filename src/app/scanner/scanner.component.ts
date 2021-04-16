import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  title = 'app';
  selectedFiles: Observable<any[]> = null;
  direction: './assets';
  len = 0;

  onFileSelected(event): void {
    this.selectedFiles = event.target.files;
    this.len = event.target.files.length;
    console.log(this.selectedFiles);
  }

  onUpload(): Observable<any[]> {
    return this.http.post<any>(this.direction, this.selectedFiles);
  }

  ngOnInit(): void {
  }

}
