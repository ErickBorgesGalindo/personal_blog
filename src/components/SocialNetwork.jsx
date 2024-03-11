import '../styles/socialnetwork.css';

export function SocialNetwork({cta, user, icon, link}) {
    return (
        <a href={link} target='_blank' className='ls-media'>
            <div className='ls-media-name'>
                <span>{cta}</span>
                <p>{user}</p>
            </div>
            <div className='ls-media-icon'>
                <i>{icon}</i>
            </div>
        </a>
    );
}