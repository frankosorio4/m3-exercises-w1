import {Link} from "react-router-dom"
import style from './notFound.module.css'

function NotFound() {

    return (
        <div className={style.container}>
            <h1>Page Not Found</h1>
            <Link style={{ color: 'blue' }} to="/">Back to Home</Link>
        </div>
    )
  }
  
  export default NotFound;