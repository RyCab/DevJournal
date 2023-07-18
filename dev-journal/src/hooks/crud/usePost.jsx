import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const baseURL = process.env.REACT_APP_BASE_URL;
console.log("usePostBASEURL");
console.log(baseURL);

const usePost = (urlSegment) => {
  const authContext = useContext(AuthContext);

  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const postData = async (data) => {
    console.log("Data ", data)
    try {
      setLoading(true);
      console.log("BASEURL");
      console.log(baseURL);
      console.log("urlSeg");
      console.log(urlSegment);
      console.log(`Post ${baseURL}${urlSegment}`);
      const response = await axios.post(
        `${baseURL}${urlSegment}`,
        data,
        authContext.token
          ? {
              headers: {
                Authorization: `Bearer ${authContext.token}`,
              },
            }
          : null
      );
      setResponseData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { postData, responseData, loading, error };
};

export default usePost;
