import { MainArticle } from "./MainArticle";
import { AboutMe } from "./AboutMe";
import { FeaturedToday } from "./FeaturedToday";
import { Categories } from "./Categories";
import { PopularPost } from "./PopularPost";
import { ArticlePrev } from "./ArticlePrev";
import { ButtonSearch } from "../components/ButtonSearch";
import { LatestTweets } from "./LatestTweets";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/homescreen.css';

const mainArticle = [
    {
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
        category: 'Lifestyle',
        title: 'The Greatest Thing in The World is to Know How to Belong to Oneself',
        writer: 'Erick Borges',
        date: 'October 05, 1999',
        coments: 4,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no control boxes under seats for the in-flight entertainment system, which means it’s all open for you to stretch your legs. The planes will offer improved built-in broadband connectivity that’ll allow passengers to use their phones and tablets.',
    }
];

const featuredtoday = [
    {
        category: 'Course',
        title: 'Shoot for the Moon and if You Miss You Will Still Be Among the Stars',
        date: 'October 5, 1999',
    }
];

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
        category: 'Course',
        title: 'You Will Become as Small as Your Controlling Desire',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 1,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'TechNews',
        title: 'The Two Most Powerfull Warriors Are Patience and Time',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 2,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'Lifestyle',
        title: 'The Two Most Powerfull Warriors Are Patience and Time',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 3,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'Course',
        title: 'You Will Become as Small as Your Controlling Desire',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 4,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'TechNews',
        title: 'The Two Most Powerfull Warriors Are Patience and Time',
        writer: 'ErickBorge',
        date: 'October 5, 1999',
        comentaries: 5,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
];

export function HomeScreen() {
    // ------- Guardar información en react native
    const [category, setCategory] = useState({
        nombre: "Paco",
        articles: 2,
        image: "none",
    });

    console.log(category);

    const handleSubmit = async (e) => {
        const res = await fetch('http://localhost:3000/categories', {
            method: 'POST',
            body: JSON.stringify(category),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        console.log(data);
    };
    //--------------------------------------


    return (
        <article>
            <div className="hs-main">
                <MainArticle
                    category={mainArticle[0].category}
                    title={mainArticle[0].title}
                    writer={mainArticle[0].writer}
                    date={mainArticle[0].date}
                    coments={mainArticle[0].coments}
                    resume={mainArticle[0].resume}
                />
                {articles.map((article) => (
                    <Link key={article.comentaries}>
                        <ArticlePrev
                            image={article.image}
                            category={article.category}
                            title={article.title}
                            writer={article.writer}
                            date={article.date}
                            coments={article.comentaries}
                            resume={article.resume}
                        />
                    </Link>
                ))}
                <ButtonSearch onClick={handleSubmit} />
            </div>
            <div className='hs-extrainfo'>
                <div className="hs-aboutme">
                    <AboutMe />
                </div>
                <div className="hs-featured-today">
                    <FeaturedToday
                        category={featuredtoday[0].category}
                        title={featuredtoday[0].title}
                        date={featuredtoday[0].date}
                    />
                </div>
                <div className="hs-categories">
                    <Categories />
                </div>
                <div className="hs-latestweets">
                    <LatestTweets />
                </div>
                <div className="hs-popular">
                    <PopularPost />
                </div>
            </div>
        </article>

    );
};