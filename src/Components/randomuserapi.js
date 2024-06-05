import React, { useEffect, useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setUser(data.results[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <div>...loading</div>;
  if (error) return <div>...error occurred: {error.message}</div>;

  return (
    <div className="container">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <button onClick={fetchUser}>Next User</button>
    </div>
  );
};

export default RandomUser;
