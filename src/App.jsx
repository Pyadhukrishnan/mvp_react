// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ButtonComponent from "./themes/components/ButtonComponent/ButtonComponent";
import InputField from "./themes/components/InputField/InputField";
import LoadingPage from "./themes/components/LoadingPage/LoadingPage";
import Navbar from "./themes/components/Navbar/Navbar";
import OtpInput from "./themes/components/OtpInput/OtpInput";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ButtonComponent
        content={"hh"}
        onClick={() => {
          console.log("hi");
        }}
      />
      <OtpInput />
      <InputField/>
      <LoadingPage />
    </>
  );
}

export default App;
