import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/Login');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-200 px-4'>
      <div className='w-full max-w-md bg-white shadow-2xl rounded-2xl p-8'>
        <h1 className='text-4xl font-bold text-center text-slate-800 mb-6'>
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <input
            type='text'
            placeholder='Username'
            id='username'
            onChange={handleChange}
            className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 transition'
          />
          <input
            type='email'
            placeholder='Email'
            id='email'
            onChange={handleChange}
            className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 transition'
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            onChange={handleChange}
            className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 transition'
          />

          <button
            disabled={loading}
            type='submit'
            className='bg-slate-700 text-white font-semibold py-3 rounded-lg uppercase hover:bg-slate-800 transition duration-200 disabled:opacity-70'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        {error && (
          <p className='text-red-500 text-sm text-center mt-4'>
            {error}
          </p>
        )}

        <p className='text-center mt-6 text-sm text-gray-600'>
          Already have an account?
          <Link to="/login" className='text-blue-600 font-medium ml-1 hover:underline'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
