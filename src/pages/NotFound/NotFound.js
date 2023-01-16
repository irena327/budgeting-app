import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { auth } from './../../firebase';
import "./NotFound.css";

function NotFound() {
    const history = useHistory();
    
    // get current user info
    const [user, setUser] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged(user2 => {
           if(user2) {
            setUser(user2);
           } else {
            history.push("/");
           }
        });
     }, []);

    return (
        <div>
            Still in progress :)
            <p>
               <Button type="primary"
                size="large"
                className="Home" 
                href={"/home"}>
                    Go Home
                </Button>
            </p>
        </div>
    );
}

export default NotFound;
