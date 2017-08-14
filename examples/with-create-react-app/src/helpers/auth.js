import { firebaseAuth } from '../fire'

export function logout () {
  console.log("signing out")
  return firebaseAuth().signOut()
}

export function login () {
  console.log("signing in")
  var provider = new firebaseAuth.GoogleAuthProvider();
  return firebaseAuth().signInWithRedirect(provider);


}
