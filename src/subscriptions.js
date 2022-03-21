import NavbarComp from './navbar'

function SubscriptionsComp(props)
{
    return(
        <div>
            <NavbarComp  active='/subscriptions' callBack={x => props.history.push(x)} />

            Hello From UsersComp
        </div>
    )
}

export default SubscriptionsComp