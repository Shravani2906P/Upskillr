import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    skillsOffered: '',
    skillsWanted: '',
    availability: '',
  });
  const [profilePic, setProfilePic] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) formData.append(key, form[key]);
    if (profilePic) formData.append('profilePic', profilePic);

    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registered! You can now log in.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <input name="skillsOffered" placeholder="Skills Offered (comma separated)" onChange={handleChange} />
        <input name="skillsWanted" placeholder="Skills Wanted (comma separated)" onChange={handleChange} />
        <input name="availability" placeholder="Availability (comma separated)" onChange={handleChange} />
        <input type="file" accept="image/*" onChange={e => setProfilePic(e.target.files[0])} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
