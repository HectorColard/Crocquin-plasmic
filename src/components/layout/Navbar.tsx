"use client";

import { useState } from "react";
import Brand from "@/components/ui/Brand";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <Brand />
            <button
                className="menu-button"
                type="button"
                aria-expanded={menuOpen}
                aria-label="Ouvrir le menu"
                onClick={() => setMenuOpen((value) => !value)}
            >
                <img src={`/assets/e98bf.svg`} alt="" />
            </button>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <a href="#presentation" onClick={() => setMenuOpen(false)}>
                    Présentation
                </a>
                <a href="#methodes" onClick={() => setMenuOpen(false)}>
                    Méthodes
                </a>
                <a href="#tarifications" onClick={() => setMenuOpen(false)}>
                    Tarifications
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                    Contact
                </a>
            </div>
        </nav>
    );
}
