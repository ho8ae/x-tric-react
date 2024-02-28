import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>x-tric</div>
                    <div>많은 가입 부탁드립니다! 😄</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">조직도</a>
                        </div>
                        <p className="desc">-회장단<br /> 회장 김소정 : 010-5038-5436 <br />부회장 이태경 : 010-5256-9670 , 조민 010-2360-9748 <br />총무 김서린</p>
                        <p className="desc">-사무부<br /> 김찬영 </p>
                        <p className="desc">-홍보부<br /> 이형민, 임수하 </p>
                        <p className="desc">-강사부<br /> 강명재, 이헌찬, 김태호, 이건희 </p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.dsec}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 🤨김태호 @ho8ae<br />
                    저는 스케이트보드 강사를 맡고 있어요 ㅎㅎ 많은 가입 부탁드립니다
                    <br />
                    엑스트릭 화이팅!
                </div>
            </div>
        </footer>
    )
}

export default Footer;