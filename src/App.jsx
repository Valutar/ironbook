import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import usersFile from "./users.json"
import linkedin from './linkedin.png'


function App() {
  const [users, setUsers] = useState(usersFile);
  const [searchPerson, setSearchPerson] = useState('');
  const [students, setStudents] = useState('');
  const [teachers, setTeachers] = useState('');
  const [campus, setCampus] = useState('');



  const handleSearchChange = event => {setSearchPerson(event.target.value);
  const handleSearch = () => {
    const usersFilter = users.filter(user => {
    return (
      user.firstName.toLowerCase().indexOf(searchPerson.toLowerCase()) === 0 ||
      user.lastName.toLowerCase().indexOf(searchPerson.toLowerCase()) === 0
      );
    });
    setUsers(usersFilter);
  };
  }

  const handlestudentsChange = event => {
    setStudents(event.target.checked);
    if (!students) setUsers(users.filter(user => user.role === 'student'));
    if (students) setUsers(usersFile);
  };
  const handleteachersChange = event => {
    setTeachers(event.target.checked);
    if (!teachers) setUsers(users.filter(user => user.role === 'teacher'));
    if (teachers) setUsers(usersFile);
  };




  return (
    <div className="App">
      <div>
      <input
        type="text" placeholder="Search" value={searchPerson} onChange={handleSearchChange}
      />
      </div>
      <div> 
      <input
        type="checkbox" value={students} onChange={handlestudentsChange}
      />
        <label>Student</label>
      <input
        type="checkbox" value={teachers} onChange={handleteachersChange}
      />
        <label>Teachers</label>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td>
                {user.linkedin && (
                  <a href={user.linkedin}>
                  <img src={linkedin} alt="LinkedIn icon" height="20" />
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App