import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false,
      data: null
    }
  },
  actions: {
    setUser(user) {
      this.user = user;
      this.isLoggedIn = true;
    },
    clearUser() {
      this.isLoggedIn = false;
      this.user = null;
    },
    async registerUser(email, password) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          this.setUser(userCredential.user);
        })
        .catch((error) => {
          throw error;
        });
    },
    async logginUser(email, password) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          this.setUser(userCredential.user);
        })
        .catch((error) => {
          throw error;
        });
    },
    async logoutUser() {
      await signOut(auth).then(() => {
        // Sign-out successful.
        this.clearUser();
      }).catch((error) => {
        // An error happened.
        throw error;
      });
    }
  },
})

export default useAuthStore;