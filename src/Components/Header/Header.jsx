import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css'

function Header(props) {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <i className={`fab fa-unsplash ${style.unsplash}`}></i>
                    <h3>ImageStock</h3>
                </div>

                <div className={style.nav}>
                    <div className={style.linkContainer}>
                        <i className="fas fa-search"></i>
                        <Link to='/' className={style.link}>Поиск</Link>
                    </div>
                    <div className={style.linkContainer}>
                        <i className="fas fa-heart"></i>
                        <Link to='/favourite' className={style.link}>Избранные</Link>
                    </div>
                    <div className={style.linkContainer}>
                        <i className="fas fa-history"></i>
                        <Link to='/history' className={style.link}>История поиска</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;