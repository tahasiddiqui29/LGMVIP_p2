import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    console.log(response);
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
    console.log(jsonresponse.data);
  };

  return (
    <>
      <div class="menu">
        <nav>
          <h1>Sunflower </h1>
          <ul>
            <li>
              <button onClick={loadUsers}>Get Data</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main">
        <h2 class="card_title">Users List </h2>
        <u1 class="cards">
          {users.map(({ id, first_name, last_name, email, avatar }) => (
            <li key={id} class="cards_item">
              <div class="card">
                <div class="card_content">
                  <p class="card_text">
                    {" "}
                    Name: {first_name} {last_name}
                  </p>
                  <p class="card_text"> Email : {email} </p>
                  <p class="card_text"> avatar : {avatar} </p>
                </div>
              </div>
            </li>
          ))}
        </u1>
      </div>
    </>
  );
};

export default App;