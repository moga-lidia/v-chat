import React, { useContext, useState, useEffect } from 'react'; //hooks
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

//function to grab context
export const useAuth = () => useContext(AuthContext); //we are creating AuthContext and passing it to useContext HOOK 

export const AuthProvider = ({ children }) => { //react children is rendering all the jsx thay you pass to AuthProvider
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory(); //call history hook

    useEffect(() => {
        //grab the user 
        auth.onAuthStateChanged((user) => {
            setUser(user); //get the user data
            setLoading(false); //no longer loading
            if (user) history.push('/chats'); //renavigating to our chat app
        })
    }, [user, history]); //when thong from dependency array change, then useEffect is recalling

    const value = { user };  //need to create a user object

    //if not loading then show children
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
} 