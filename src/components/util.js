import { Responsive } from "semantic-ui-react";
const Util = () => {
  const getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
    
  };
};
export default Util;
