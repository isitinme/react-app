import React from 'react';
import { Link } from 'react-router-dom';
import { mainHeader, mainContent, mainFooter } from './style.css';

export const Layout = ({ children }) => (
    <>
        <header className={mainHeader}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <hr />
        <main className={mainContent} >
            { children }
        </main>
        <hr />
        <footer className={mainFooter} >
            <h4>@copy; Alex Prytula</h4>
        </footer>
    </>
);
