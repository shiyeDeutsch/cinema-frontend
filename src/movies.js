import NavbarComp from './navbar'
 function MoviesComp(props)
{
    return(<div>
            <NavbarComp  active='/movies' callBack={x => props.history.push(x)} />

        <h2>Hello From movies</h2>
    </div>)
}
export default MoviesComp