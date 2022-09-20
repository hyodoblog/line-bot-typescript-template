import admin from 'firebase-admin'

if (admin.apps.length === 0) {
  admin.initializeApp()
}

// Auth

export const auth = admin.auth()

// Firestore

export const db = admin.firestore()

export { admin }
