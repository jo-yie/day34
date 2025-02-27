import { Component } from '@angular/core';
import { FakeryService } from '../../service/fakery.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  photos: any[] = []

  constructor(private fakeryService: FakeryService) {}

  ngOnInit() {
    this.fakeryService.getFakeryPhotos().subscribe({
      next: (data) => this.photos = data,
      error: (err) => console.error(err)
    });

  }

}
