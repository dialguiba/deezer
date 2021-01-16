import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [song, setSong] = useState({});

  useEffect(() => {
    axios.get(`https://api.deezer.com/user/me?access_token=${token}`).then((res) => {
      setUser(res.data);
    });
  }, [token]);

  return <UserContext.Provider value={{ value1: [token, setToken], value2: [user, setUser], value3: [song, setSong] }}>{props.children}</UserContext.Provider>;
};
