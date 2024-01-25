import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Error loading user details</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
}

export default UserDetails;
