import React from "react";
import { ArticlePrev } from "../home/ArticlePrev";
import { SocialNetwork } from "../components/SocialNetwork";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import '../styles/lifestyle.css';

const artPrev = [
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
    { cta:'Follow Us', user:'@alecs510', icon: <FaXTwitter /> },
    { cta:'Follow Us', user:'@alecs_borges', icon: <FaInstagram /> },
    { cta:'Follow Us', user:'Erick Borges', icon: <FaLinkedinIn />},
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
                    <ArticlePrev
                        image={artPrev[1].image}
                        category={artPrev[1].category}
                        title={artPrev[1].title}
                        writer={artPrev[1].writer}
                        date={artPrev[1].date}
                        coments={artPrev[1].comentaries}
                        resume={artPrev[1].resume}
                    />
                    <ArticlePrev
                        image={artPrev[2].image}
                        category={artPrev[2].category}
                        title={artPrev[2].title}
                        writer={artPrev[2].writer}
                        date={artPrev[2].date}
                        coments={artPrev[2].comentaries}
                        resume={artPrev[2].resume}
                    />
                    <ArticlePrev
                        image={artPrev[0].image}
                        category={artPrev[0].category}
                        title={artPrev[0].title}
                        writer={artPrev[0].writer}
                        date={artPrev[0].date}
                        coments={artPrev[0].comentaries}
                        resume={artPrev[0].resume}
                    />
                    <ArticlePrev
                        image={artPrev[1].image}
                        category={artPrev[1].category}
                        title={artPrev[1].title}
                        writer={artPrev[1].writer}
                        date={artPrev[1].date}
                        coments={artPrev[1].comentaries}
                        resume={artPrev[1].resume}
                    />
                    <ArticlePrev
                        image={artPrev[2].image}
                        category={artPrev[2].category}
                        title={artPrev[2].title}
                        writer={artPrev[2].writer}
                        date={artPrev[2].date}
                        coments={artPrev[2].comentaries}
                        resume={artPrev[2].resume}
                    />

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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}