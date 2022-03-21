let axios = require('axios')
exports.getAllSubscriptions = async function () {

    let j = require('jsonfile')
    let resp = await axios.get('http://localhost:8000/api/members')
    let allmembers = resp.data;

    resp = await axios.get('http://localhost:8000/api/subscriptions')
    let Allsubscriptions = resp.data;
    // console.log(Allsubscriptions)
    resp = await axios.get('http://localhost:8000/api/movies/master')
    let AllMovies = resp.data;
    let dataShaping = []



    allmembers.forEach(function (x, y) {
        dataShaping.push({
            id: x._id,
            name: x.name,
            email: x.email,
            city: x.city,
            moviesWatched: Allsubscriptions.filter(v => (v.memberId == x._id)).map(v => ({ movies: v.movies }))
        })
    });

let  allDataShaping={subscriptions:dataShaping, AllMovies:AllMovies}  
//   console.log(allDataShaping)
    return allDataShaping

}

exports.addSubcription = async function (obj) {
    let newSubscription = {
        name: obj.name,
        email: obj.email,
        city: obj.city
    }
    try {
        let resp = await axios.post('http://localhost:8000/api/members/add', newSubscription)
        let status = resp.data;
        return status
    } catch (err) {
        return err;
    }
}
exports.deleteSubcription = async function (id) {
    try {
        let resp = await axios.delete('http://localhost:8000/api/members/delete/' + id)
        return resp.date;
    }
    catch (err) {
        return err
    }
}

exports.getSubscription = async function (id) {
    try {
        let resp = await axios.get('http://localhost:8000/api/members/' + id)
        let member = resp.data;
        return member
    }
    catch (err) {
        return err
    }
}
exports.updateMember = function (id, obj) {
    return new Promise(async (resove, reject) => {
        let editSubscription = {
            name: obj.name,
            email: obj.email,
            city: obj.city
        }
        try {
            let resp = await axios.put('http://localhost:8000/api/members/update/' + id, editSubscription)
            let status = resp.data;
            resove(status)
            // return status;
        }
        catch (err) {
            // return err
            reject(err)
        }
    })

}
// this.updateMember('222',{ dsd: 'sss' }).then(x => console.log(x)).catch(x => console.log(x))