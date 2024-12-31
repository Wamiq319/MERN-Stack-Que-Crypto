import { useState, useEffect } from "react";
import axios from "axios";

const useUser = (walletAddress) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!walletAddress) return; // Skip if no wallet address is provided

    const fetchUser = async () => {
      setLoading(true);
      setError(""); // Reset error before each request

      try {
        // Make the GET request to fetch or create the user by wallet address
        const response = await axios.get(
          `http://localhost:3000/users/${walletAddress}`
        );
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("An error occurred while fetching user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [walletAddress]); // Run the effect when walletAddress changes

  return { user, loading, error };
};

export default useUser;
