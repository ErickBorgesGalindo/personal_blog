import { MainArticle } from "./MainArticle";
import { AboutMe } from "./AboutMe";
import { FeaturedToday } from "./FeaturedToday";
import { Categories } from "./Categories";
import { LatestTweets } from "./LatestTweets";
import '../styles/homescreen.css';
import { PopularPost } from "./PopularPost";
import { ArticlePrev } from "./ArticlePrev";
import { ButtonSearch } from "../components/ButtonSearch";

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

const artPrev=[
    {
        category: 'Lifestyle', 
        title:'The Two Most Powerfull Warriors Are Patience and Time',
        writer: 'ErickBorge', 
        date: 'October 5, 1999', 
        comentaries: 0, 
        resume:'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image:'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'Course', 
        title:'You Will Become as Small as Your Controlling Desire',
        writer: 'ErickBorge', 
        date: 'October 5, 1999', 
        comentaries: 0, 
        resume:'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        category: 'TechNews', 
        title:'The Two Most Powerfull Warriors Are Patience and Time',
        writer: 'ErickBorge', 
        date: 'October 5, 1999', 
        comentaries: 0, 
        resume:'Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no ...',
        image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
];

export function HomeScreen() {
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
                <ButtonSearch/>
            </div>
            <div className='hs-extrainfo'>
                <AboutMe/>
                <FeaturedToday
                    category={featuredtoday[0].category}
                    title={featuredtoday[0].title}
                    date={featuredtoday[0].date}
                />
                <Categories/>
                <LatestTweets/>
                <PopularPost/>
            </div>
        </article>
    );
};