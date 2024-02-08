import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () =>{
    return(
        <>
            <Skip />
            <Header />
            <Main>
                <Intro/>
                <Skill/>
                <Site/>
                <Port/>
                <Contact/>

            </Main>
            <Footer/>
        </>
    )
}

export default HomeView;

//페이지를 나타내는 HomeView 다음과컴포넌트는 홈페이지의 UI를 구성
//각 컴포넌트들은 기능별로 분리되어 관리되므로, 코드의 가독성과 유지보수성이 좋아집니다.
