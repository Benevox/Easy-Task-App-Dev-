import axios from 'axios';

const signup = async (data, signInNewUser, navigate) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}api/auth/register`, data);
    signInNewUser(response.data);
    navigate("/onboarding");
  } catch (error) {
    console.error(error);
  }
};

export default signup;
