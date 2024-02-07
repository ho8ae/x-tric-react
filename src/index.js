//index.js : 이 파일은 리액트 애플리케이션의 다른 컴포넌트들을 실제 
//DOM에 렌더링하는 역할을 합니다. 주로 'ReactDOM.render()' 메서드를 통해 'App' 컴포넌트를 실제 DOM에 마운트 합니다.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


//. 여기서 document.getElementById("root")는 HTML 파일에서 id가 "root"인 요소를 선택하는 것으로, 리액트 애플리케이션이 이 요소 내부에 렌더링될 것입니다.


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)