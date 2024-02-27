import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return(
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>x-tric</span>
                    <span>많은 가입 부탁드립니다.</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="left">
                            <div className="title">
                                <a href="/">조직도</a>
                            </div>
                            <p>회원가입 시 댓글과 게시판 이용가능</p>
                        </div>
                        <div className="right">
                            <h3>social</h3>
                            <ul>
                             {footerText.map((footer,key)=>(
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>footer.desc</em>
                                </li>
                             ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__right">
                        리액트를 이용하여 제작되었습니다.
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;

