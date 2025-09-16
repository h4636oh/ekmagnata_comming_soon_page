import { useState } from "react";

const Join_Waiting_List = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      const response = await fetch('https://formspree.io/f/xldwkqad', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setSuccess('Thank you for joining the waiting list!');
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col gap-4 text-[#FBF6EA] border-2 font-semibold p-4 border-[#FBF6EA] rounded-sm mt-5">
      <p>
        Want to be the first one to experience Ekmāgnatā??
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border-2 px-2 py-1 outline-0 rounded-sm"
          required
        />
        <button
          type="submit"
          className="border-2 rounded-sm px-2 py-1 transition-colors duration-200 bg-transparent text-[#FBF6EA] hover:bg-[#FBF6EA] hover:text-[#734B2B] text-center align-middle hover:border-[#FBF6EA]"
        >
          JOIN
        </button>
      </form>
      {error && <div style={{color: 'red'}}>{error}</div>}
      {success && <div style={{color: 'green'}}>{success}</div>}
    </div>
  );
};

export default Join_Waiting_List