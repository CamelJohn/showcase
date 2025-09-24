import { Link, Outlet } from 'react-router-dom';
import styles from './main-layout.module.css';
import React from 'react';

interface ILink {
  to: string;
  label: string;
}

interface IMainLayoutProps {
  title: string;
  links: ILink[];
}

export const MainLayout: React.FC<IMainLayoutProps> = ({ title, links }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <nav className={styles.nav}>
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet /> {/* child routes render here */}
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}