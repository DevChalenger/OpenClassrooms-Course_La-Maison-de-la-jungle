import { useEffect } from "react";
function Welcome() {
  useEffect(() => {
    alert("Welcome! ☀️");
  }, []);
  return <div>Welcome</div>;
}
export default Welcome;
