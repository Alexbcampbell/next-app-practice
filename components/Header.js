
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return(
       <div>
           <h1 className={headerStyles.title}>
               <span>Article</span> Dashboard
           </h1>
           <p className={headerStyles.description}> 
      </p>
       </div>
    )
}

export default Header