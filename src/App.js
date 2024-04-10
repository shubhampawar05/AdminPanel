import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/loginpage/Login';
import SignUpPage from './pages/signUpPage/SignUpPage';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from './firbase/config';

function App() {
  const [fireData , setFireData]=useState([]);
  console.log(fireData);
  useEffect(()=>{
    const getFireStoreData = async ()=>{
      try {
        const fireCollectionref = collection(db,"abcd1234");
        const fireCollectionSnashot = await getDocs(fireCollectionref);
        const fireCollectionData = fireCollectionSnashot.docs.map((doc)=>{
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        console.log(fireCollectionData);
        setFireData(fireCollectionData)
      } catch (error) {
        console.log(error);
      }
    }
    getFireStoreData();
  },[])


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/users' element={<List/>}/>
      <Route path='/users/:userId' element={<Single/>}/>
      <Route path='/users/new' element={<New/>}/>
      <Route path='/product' element={<List/>}/>
      <Route path='/product/:productId' element={<Single/>}/>
      <Route path='/product/new' element={<New/>}/>
    </Routes>
   </BrowserRouter>
     
   
  );
}

export default App;
