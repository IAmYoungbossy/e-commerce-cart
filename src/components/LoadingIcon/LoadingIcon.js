import "./LoadingIcon.css";
import { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";

const LoadingIcon = () => {
  const { state } = useContext(CheckoutContext);
  return (
    <div
      className={`${state.isLoading ? "loading-div" : "hide"}`}
    >
      <span
        className={`loading-icon ${
          state.isLoading ? "loading" : ""
        }`}
      >
        PaateeNg
      </span>
    </div>
  );
};

export default LoadingIcon;
