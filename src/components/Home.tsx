import userEvent from "@testing-library/user-event";
import React from "react";
import { Button } from "react-bootstrap";
import { isAsyncFunction } from "util/types";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const {user,logOut}:any = useUserAuth();
  const handleLogout =async()=>{
     try{
         await logOut();
     }catch(err:any){
      console.log(err.message)
     }
  }
  return (
    <>
    <div className="p-4 box mt-3 text-center">
      Hello Welcome <br />
      {user && user.email}
    </div>
    <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  </>
);
};
  


export default Home
