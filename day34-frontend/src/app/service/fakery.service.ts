import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeryService {

  constructor(private httpClient: HttpClient) { }

  private fakeryUrl = "https://jsonfakery.com/photos/random/4"

  // async getFakeryPhotos() { 

  //   try { 
  //     const photos = await axios.get(this.fakeryUrl)
  //     return photos.data 
  //   } catch (error) { 
  //     console.error(error)
  //   }

  // }

  getFakeryPhotos(): Observable<any[]> { 
    return this.httpClient.get<any[]>(this.fakeryUrl);
  }

}
