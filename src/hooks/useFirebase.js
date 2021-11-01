import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    
    // Google SignIn 
    const handleGoogleSignIn = () =>{
        setIsLoading(true);
       return signInWithPopup(auth,googleProvider)
        .finally(() => setIsLoading(false));
    }
    

    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth,(user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    } ,[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{ })
        .finally(() => setIsLoading(false));
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const toggleLogin = (e) => {
        setIsLogin(true);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    // Email/Password SignIn 

    const handleRegistration = (e) => {
        // console.log(email,password )
        e.preventDefault();
        if(password.length < 6 ){
            setSuccess('');
            setError('Password should be at least 6 characters');
            return;
        }
        
        isLogin? processLogin(email, password): createNewUser(email, password)
        
    }
    const processLogin = (email,password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('');
            setSuccess('Login Successful');
        })
        .catch(error => {
            setSuccess('');
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }
    const createNewUser = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('');
            setSuccess('Check your email for verification!');
            verifyEmail();
            setUserName();
        })
        .catch(error => {
            setSuccess('');
            setError(error.message)
        })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {
            
        })
    }
    return {
        user,
        name,
        email,
        password,
        handleGoogleSignIn,
        logOut, 
        handleNameChange, 
        handleEmailChange,
        handlePasswordChange, 
        handleRegistration,  
        processLogin,
        createNewUser,
        setUserName,
        verifyEmail,
        toggleLogin,
        error,
        success,
        isLogin,
        isLoading




    }
};

export default useFirebase;