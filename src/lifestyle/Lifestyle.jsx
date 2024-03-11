import React from "react";
import { ArticlePrev } from "../home/ArticlePrev";
import { SocialNetwork } from "../components/SocialNetwork";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PopularPost } from "../home/PopularPost";
import '../styles/lifestyle.css';

const articles = [
    {
        category: 'Lifestyle',
        title: 'The Two Most Powerfull Warriors Are Patience and Time',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 0,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'Lifestyle',
        title: 'You Will Become as Small as Your Controlling Desire',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 0,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'Lifestyle',
        title: 'The Two Most Powerfull Warriors Are Patience and Time',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 0,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
];

const socials = [
    { cta: 'Follow Us', user: '@alecs510', icon: <FaXTwitter />, link: 'https://twitter.com/ErickBGalindo' },
    { cta: 'Follow Us', user: '@alecs_borges', icon: <FaInstagram />, link: 'https://www.instagram.com/alecs_borges/' },
    { cta: 'Follow Us', user: 'Erick Borges', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/erick-borges-galindo/' },
];

export function Lifestyle() {

    return (
        <div className='ls-container'>
            <div className='ls-main-section'>
                <div className='ls-title'>
                    <span>In</span>
                    <h2>Lifestyle</h2>
                </div>
                <div className='ls-articles'>
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
            <div className='ls-second-section'>
                <div className='ls-social'>
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
                <div className="ls-popular">
                    {/* <PopularPost/> */}
                </div>
            </div>
            
        </div>
    );
}