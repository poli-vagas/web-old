// ./initAuth.js
import { init } from 'next-firebase-auth'

export const initAuth = () => {
  init({
    authPageURL: '/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: "AIzaSyCWkBlR8bMBBm5QmqMSgsHixO0Foky6dTo",
      authDomain: "poli-vagas-auth.firebaseapp.com",
      projectId: "poli-vagas-auth",
      storageBucket: "poli-vagas-auth.appspot.com",
      messagingSenderId: "1070791957748",
      appId: "1:1070791957748:web:95ef2e09bc8dac696b12a1",
    },
    cookies: {
      name: 'PoliVagas', // required
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: false,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}
