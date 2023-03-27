const Author = ({ name, date, avatar }) => {
    return (
        <div >
        <div className="author">
            <img
                className="author-img"
                src={avatar}
                alt={`${name.toLowerCase()} avatar`}

            />
            <p className="author-name">{name}</p>
            
        </div>
        <div>
        <p className="poll-date">{date}</p>
        </div>
        </div>
    );
};

export default Author;