import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
      const res = await fetch(url)
      const usersData = await res.json()
      setUsers(usersData)
      console.log(usersData);
  }

  useEffect(() => {
      fetchUsers()
      
  }, [])

  return (
      <>
        <h3>Github Users</h3>
        <ul className='users'>
            {users.map(user => {
            return (
                    <li key={user.id}>
                        <img src={user.avatar_url} alt={user.avatar_url} />
                        <div>
                            <h4>{user.login}</h4>
                            <a href={user.html_url}>Profile</a>
                        </div>
                    </li>
            )
            })}
        </ul>
      </>
  )
};

export default UseEffectFetchData;
