import { Injectable } from '@angular/core';
import { Firestore, collection, query, collectionData } from '@angular/fire/firestore';
import { Observable, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}


  getData(collectionName: string): Observable<any[]> {
    // Sammlung referenzieren
    const userCollection = collection(this.firestore, collectionName);
    console.log('CollectionReference:', userCollection); // Debugging-Log

    // Query erstellen
    const q = query(userCollection);
    console.log('Query:', q); // Debugging-Log

    // Echtzeitdaten abrufen
    return collectionData(q, { idField: 'id' });
  }
}
