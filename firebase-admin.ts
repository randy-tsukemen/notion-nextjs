import { getApps, getApp, App, cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = require('serviceAccountKey.json');

let app: App;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceAccount),
    });
} else {
    app = getApp();
}

const adminDb = getFirestore();
const adminAuth = getAuth();

export { app as adminApp, adminDb, adminAuth };