import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()), provideAnimationsAsync(),
    provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({ projectId: "projetounimarfirebase-eb8a8", appId: "1:712074804816:web:3ff35e93c1a4b3809d1b55", storageBucket: "projetounimarfirebase-eb8a8.firebasestorage.app", apiKey: "AIzaSyDou-aXqA69BH3nfPOKGG_rUQYX9BDsdOs", authDomain: "projetounimarfirebase-eb8a8.firebaseapp.com", messagingSenderId: "712074804816" })), provideFirestore(() => getFirestore())
  ]
};
