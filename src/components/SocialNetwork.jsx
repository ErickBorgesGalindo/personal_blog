import '../styles/socialnetwork.css';

export function SocialNetwork({cta, user, icon}) {
    return (
        <a className='ls-media'>
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