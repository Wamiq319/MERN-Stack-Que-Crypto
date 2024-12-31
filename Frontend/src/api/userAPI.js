import axios from "axios";

const fetchUserByWallet = async (walletAddress) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/users/${walletAddress}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user");
  }
};

export { fetchUserByWallet };
