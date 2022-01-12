
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return(
       <div>
           <h1 className={headerStyles.title}>
               <span>SUPPORT</span> DASHBOARD
           </h1>
           <p className={headerStyles.description}>
        Invoice Number: 
      </p>
       </div>
    )
}

export default Header