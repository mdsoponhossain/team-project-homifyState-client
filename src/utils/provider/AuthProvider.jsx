import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-auth/firebaseauthentication";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [searchInfo, setSearchInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo, setInfo] = useState(null)
    //check user
    useEffect(() => {
        const unSubcribe = () => {
            onAuthStateChanged(auth, async cuser => {
                setUser(cuser);
                console.log(cuser);
                const email = cuser?.email;
                if (email) {
                    await axios.post('https://homifyestates.vercel.app/jwt/signIn', { email }, { withCredentials: true })
                    // await axios.post('https://homifyestates.vercel.app/jwt/signIn',{email},{withCredentials:true})
                    // .then(async res=>{
                    //     console.log(res.data);
                    //     .then(res=>{
                    //         setInfo(res.data);
                    //         console.log(res.data)
                    //     })
                    //     .catch(err=>console.log(err.message))
                    // })
                    // .catch(err=> console.log(err.message))
                    // const result =await axios.get(`https://homifyestates.vercel.app/users/${email}`, {withCredentials:true})
                    const result = await axios.get(`https://homifyestates.vercel.app/users/${email}`, { withCredentials: true })
                    setInfo(result.data)
                    console.log(result.data);
                    if (!result.data.email) {
                        signout()
                            .then(() => {
                                axios.post('https://homifyestates.vercel.app/jwt/clear-token', { email: result?.data?.email })
                                .then(()=>{
                                    History.push('/signin')
                                })
                            })
                            .catch(err => console.log(err))
                    }
                    // if (cuser?.photoURL) {
                    //     updateProfile(auth, {
                    //         photoURL: userInfo?.photoURL, displayName: userInfo?.name
                    //     })
                    //         .then(() => toast('Profile Updated'))
                    //         .catch(e => toast(e))
                    // }
                }

                setLoading(false);
            })
        }
        return unSubcribe();
    }, []);

    //signin by email and password
    const creatuserwithemail = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // signin  by email and password
    const signinWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // signin by google account
    const provider = new GoogleAuthProvider();
    const signupWihtGoogle = () => {
        return signInWithPopup(auth, provider);
    };
    //signin by facebook account;
    const fbProvider = new FacebookAuthProvider();
    const signupWithFacebook = () => {
        return signInWithPopup(auth, fbProvider);
    };
    //signout
    const signout = () => {
        return signOut(auth);
    };
    const globaldata = {
        user,
        userInfo,
        loading,
        creatuserwithemail,
        signupWihtGoogle,
        signinWithEmailAndPassword,
        signout,
        signupWithFacebook,
        searchInfo,
        setSearchInfo,
    };
    return (
        <AuthContext.Provider value={globaldata}> {children}</AuthContext.Provider>
    );
};

export default AuthProvider;
