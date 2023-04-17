import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const User = () => {
  const [database, setDatabase] = useState({});

  const getData = async () => {
    const { data } = await axios.get(
      `https://sarkara-bac5b-default-rtdb.firebaseio.com/usermessage.json`
    );

    setDatabase(data);
  };

  useEffect(() => {
    getData();
  }, [database]);

  // useEffect(() => {
  //   fireDb.child("usermessage").on("value", (snapshot) => {
  //     if (snapshot.val() !== null) {
  //       setDatabase({ ...snapshot.val() });
  //     } else {
  //       setDatabase({});
  //     }
  //   });
  //   return () => {
  //     setDatabase({});
  //   };
  // }, []);

  return (
    <>
      {Object.keys(database).map((id, index) => {
        return (
          <div key={index}>
            <p>id: {id}</p>
            <p>{database[id].name}</p>
            <p>{database[id].phNumber}</p>
            <p>{database[id].email}</p>
            <p>{database[id].message}</p>
          </div>
        );
      })}
    </>
  );
};

export default User;
