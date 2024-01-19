import { Outlet, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/redux/authSlice';
import Header from './Header';
import SearchGpt from './SearchGPt/SearchGpt';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gpt = useSelector((store) => store.gpt.toggleSearch);
  const dontGoBack = useSelector((store) => store.gpt.home);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
        const { uid, email, displayName, photoURL } = user;
        // console.log(uid, email, displayName);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');

        // ...
      }
    });
    /** onAuthStateChanged returns a unsubscribe function which can be called when onAuthStateChanged unmounts and when the body will unload it will unsubscribe to the event */
    return () => unsubscribe();
  }, []);

  return (
    <div className='overflow-x-hidden '>
      <Header />
      {gpt && dontGoBack ? <SearchGpt /> : <Outlet />}
    </div>
  );
};

export default Body;
