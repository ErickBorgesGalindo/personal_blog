import React from "react";
import { ArticlePrev } from "../home/ArticlePrev";
import { SocialNetwork } from "../components/SocialNetwork";
import { Categories } from "../home/Categories";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PopularPost } from "../home/PopularPost";
import '../styles/technews.css';

const socials = [
    { cta: 'Follow Us', user: '@alecs510', icon: <FaXTwitter />, link: 'https://twitter.com/ErickBGalindo' },
    { cta: 'Follow Us', user: '@alecs_borges', icon: <FaInstagram />, link: 'https://www.instagram.com/alecs_borges/' },
    { cta: 'Follow Us', user: 'Erick Borges', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/erick-borges-galindo/' },
];

const articles = [
    {
        category: 'TechNews',
        title: 'Estructura de datos',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 0,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'TechNews',
        title: 'Fundamentos de Programación',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 0,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'TechNews',
        title: 'Curso de C',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 0,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'TechNews',
        title: 'Curso de Java',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 0,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'TechNews',
        title: 'Programación Orientada a Objetos (POO)',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 0,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
];

export function TechNews() {
    return (
        <div className="tn-container">
            <div className="tn-main-section">
                <div className="tn-title">
                    <span>In</span>
                    <h2>TechNews</h2>
                </div>
                <div className='tn-articles'>
                    {articles.map((article) => (
                        <ArticlePrev
                            image={article.image}
                            category={article.category}
                            title={article.title}
                            writer={article.writer}
                            date={article.date}
                            coments={article.comentaries}
                            resume={article.resume}
                        />
                    ))}
                </div>
            </div>
            <div className='tn-second-section'>
                <div className='tn-social'>
                    <h4> Stay Connected </h4>
                    {socials.map((social) => (
                        <SocialNetwork
                            cta={social.cta}
                            user={social.user}
                            icon={social.icon}
                            link={social.link}
                        />
                    ))}
                </div>
                <div className="tn-popular">
                    <PopularPost />
                </div>
                <div className="tn-categories">
                    <Categories />
                </div>
            </div>
        </div>
    );
}