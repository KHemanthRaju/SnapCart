import Lottie from "lottie-react";
import error from "../../animation/404.json";
const NotFound = () => {
  return (
    <>
      <Lottie animationData={error} loop={true} />
    </>
  );
};

export default NotFound;
