
import Links from './links/Links'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
     <div className={styles.logo}>Kidventures on the Road</div>
     <div>
     <Links/>

     </div>
    </div>
  )
}

export default Navbar
