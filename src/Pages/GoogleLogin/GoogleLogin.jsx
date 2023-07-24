import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();

  //   const location = useLocation();
  //   const navigate = useNavigate();

  //   const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-xl cursor-pointer">
        <FcGoogle size={32} />
        <p className="font-bold">Continue with Google</p>
      </div>
    </div>
  );
};

export default GoogleLogin;
