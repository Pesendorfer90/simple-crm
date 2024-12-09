import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) { }

  getData(collectionName: string): Observable<any[]> {
    // Sammlung referenzieren
    const userCollection = collection(this.firestore, collectionName);
    // Echtzeitdaten direkt abrufen, ohne Query
    return collectionData(userCollection, { idField: 'id' });
  }
  
  getUserById(collectionName: string, docId: string): Observable<any> {
    // Referenz auf das Dokument
    const documentRef = doc(this.firestore, `${collectionName}/${docId}`);
    // Echtzeitdaten für das Dokument abrufen
    return docData(documentRef, { idField: 'id' });
  }
  
}
