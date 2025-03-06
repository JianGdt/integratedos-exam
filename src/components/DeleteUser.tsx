import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteUser({ id } : ComponentProps.Users){
    const handleDelete = async () => {
      try {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        toast("User deleted successfully");
      } catch (error) {
        console.error(error);
      }
    };
  
    return <button onClick={handleDelete}>Delete User</button>;
  };