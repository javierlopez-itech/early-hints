/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import { initFlowbite } from 'flowbite';
import './styles/app.css';
import React from 'react';
import { FaBeer, FaCoffee, FaApple, FaAndroid, FaReact } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { createRoot } from 'react-dom/client';

initFlowbite();

const App = () => (
    <div>
        <FaBeer />
        <FaCoffee />
        <FaApple />
        <FaAndroid />
        <FaReact />
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
    </div>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
