import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>乁( ⁰͡ Ĺ̯ ⁰͡ ) ㄏ</h1>
            <h2>Sorry...</h2>
            <p>Content for this page does not exist.</p>
            <Link to="/">Return Home.</Link>
        </div>
    )
}

export default NotFound;