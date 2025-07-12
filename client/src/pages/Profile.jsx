import { useState } from 'react';
import { createUser } from '../api';

function Profile() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    skillsOffered: '',
    skillsWanted: '',
    availability: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...form,
      skillsOffered: form.skillsOffered.split(','),
      skillsWanted: form.skillsWanted.split(','),
      availability: form.availability.split(',')
    };
    await createUser(data);
    alert('Profile created!');
  };

  return (
    <div className="container">
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'location', 'skillsOffered', 'skillsWanted', 'availability'].map(field => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
          />
        ))}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;

