import { Switch,Route } from 'react-router-dom'
import NavbarComp from './navbar'
function HomePageComp(props) {
    const next = (parm) => {
        props.history.push(parm)
    
      }
    return (
       
        <div>
            <NavbarComp callBack={x => props.history.push(x)} />

            <Switch>
         
            </Switch>
        </div>
    )
}
export default HomePageComp