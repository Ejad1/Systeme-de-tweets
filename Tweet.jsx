import { PropTypes } from "prop-types";

export function Tweet({ name, content, like, onDelete, onLike }) {

    return (
        <div className="tweet">
            <h3>Name : { name }</h3>
            <p>Message : { content }</p>
            <div className="mesBoutons">
                <button onClick={() => onLike()}>{ like } ❤️</button>
                <button onClick={ () => onDelete() } className="delete">❌</button>
            </div>
        </div>
    )
}

// Conditions sur les variables que je dois récupérer
Tweet.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
}
