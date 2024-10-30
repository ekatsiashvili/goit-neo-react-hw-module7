import { FallingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ visible }) => {
  return (
    <FallingLines
      visible={visible}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="falling-circles-loading"
      wrapperClass={css.Loader}
    />
  );
};

export default Loader;
