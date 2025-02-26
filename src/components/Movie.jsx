function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div className="card"> 
    <div id={id} className="movie__card">
        <div className="card__img">
            {
                poster === 'N/A' ? 
                <img src={`https://placehold.jp/250x330.png`} alt="movieImg"/> :
                <img src={poster} className="movieImg" alt="movieImg" />
            }
        </div>
        <div className="card__content">
            <p className="card__title">{title}</p>
            <div className="card__desc">
                <span className="card__type">{type}</span>
                <span className="card__year">{year}</span>
            </div>
        </div>
    </div>
</div>
        
}

export {Movie}