import { Bars } from "react-loader-spinner";
const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="rgb(37 99 235)"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
export default Loader;
