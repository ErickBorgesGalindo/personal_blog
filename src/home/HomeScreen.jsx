import { MainArticle } from "./MainArticle";
import { AboutMe } from "./AboutMe";
import { FeaturedToday } from "./FeaturedToday";
import { Categories } from "./Categories";
import { LatestTweets } from "./LatestTweets";
import '../styles/homescreen.css';

const mainArticle = [
    {
        image : 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
        category: 'Lifestyle',
        title: 'The Greatest Thing in The World is to Know How to Belong to Oneself',
        writer: 'Erick Borges',
        date: 'October 05, 1999',
        coments: 4,
        resume: 'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no control boxes under seats for the in-flight entertainment system, which means it’s all open for you to stretch your legs. The planes will offer improved built-in broadband connectivity that’ll allow passengers to use their phones and tablets.',
    }
];

const featuredtoday=[
    {
        category: 'Course',
        title: 'Shoot for the Moon and if You Miss You Will Still Be Among the Stars',
        date: 'October 5, 1999',
    }
];

export function HomeScreen() {
    return (
        <article>
            <MainArticle 
                category={mainArticle[0].category}
                title={mainArticle[0].title}
                writer={mainArticle[0].writer}
                date={mainArticle[0].date}
                coments={mainArticle[0].coments}
                resume={mainArticle[0].resume}
                />
            <div className='hs-extrainfo'>
                <AboutMe/>
                <FeaturedToday
                    category={featuredtoday[0].category}
                    title={featuredtoday[0].title}
                    date={featuredtoday[0].date}
                />
                <Categories/>
                <LatestTweets/>
            </div>
        </article>
    );
};