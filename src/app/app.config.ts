import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes), provideAnimationsAsync(),
  provideFirebaseApp(() => initializeApp({ projectId: "simple-crm-ee43e", appId: "1:244297693853:web:cdb50ae1a6fd4a32083274", storageBucket: "simple-crm-ee43e.firebasestorage.app", apiKey: "AIzaSyBLNBkl5oCOR2YrN0nyVHjRMIJaRy2k0KA", authDomain: "simple-crm-ee43e.firebaseapp.com", messagingSenderId: "244297693853" })), provideFirestore(() => getFirestore()),
  provideNativeDateAdapter()]
};
