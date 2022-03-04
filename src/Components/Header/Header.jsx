import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <header>
            <Link to="/"><h1>MY TO-DO LIST</h1></Link>
            <div className="links">
                <Link to="/new">New</Link>
                {/* <Link to="/completed">Completed</Link> */}
            </div>
        </header>
    );
}