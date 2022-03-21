let axios = require('axios')
exports.getAllMoviesData = async function () {

    let resp = await axios.get('http://localhost:8000/api/members')
    let allmembers = resp.data;
    resp = await axios.get('http://localhost:8000/api/subscriptions')
    let Allsubscriptions = resp.data;
    // console.log(Allsubscriptions)

    resp = await axios.get('http://localhost:8000/api/movies')
    let Allmovies = resp.data;


    let dataShaping = []

    Allmovies.forEach(function (element, key) {
        let temp = [];
        let movieInSubKey = -1;
        Allsubscriptions.forEach(x => {
            x.movies.forEach(y => {
                if (y.id == element._id) {
                    temp.push({
                        memberId: x.memberId,
                        name: allmembers.find(z => z._id == x.memberId).name,
                        dateWatched: y.dateWatched
                    });

                }
            })
        })

        dataShaping.push({
            id: element._id,
            name: element.name,
            premiered: element.premiered,
            image: element.image,
            genres: element.genres,
            subscriptionWatched: temp
        })

    });
    let jfile = require('jsonfile')
    // jfile.writeFile('./path.json', dataShaping)
    return dataShaping
}

// this.getAllMoviesData().then(x => x[0].subscriptionWatched.forEach(y => console.log(y)))
// this.getAllMoviesData().then(x => console.log(x[1]))
exports.addMovie = async function (obj) {
    let genres = []

    for (let i = 0; i < obj.genres.length; i++) 
    {
        if (obj.genres[i] == ',') 
        {
            for (let y = i; y < obj.genres.length; y++)
            { 
                if (obj.genres[y] == ',') 
                {
                    genres.push(obj.genres.substring(i,y))
                }
            }
        }
    }
   

    item = {
        name: obj.name,
        premiered: obj.premiered,
        image: obj.image,
        genres: obj.genres
    }
    let status = await axios.post('http://localhost:8000/api/movies/add', item)
    return status;
}
exports.getMovie = async function (id) {
    let resp = await axios.get('http://localhost:8000/api/movies/' + id)
    let data = resp.data;
    return data;
}
exports.editMovie=async function (id,obj)
{
    console.log(obj)

    let genres = []

    for (let i = 0; i < obj.genres.length; i++) 
    {
        if (obj.genres[i] == ',') 
        {
            for (let y = i; y < obj.genres.length; y++)
            { 
                if (obj.genres[y] == ',') 
                {
                    genres.push(obj.genres.substring(i,y))
                }
            }
        }
    }

    item = {
        name: obj.name,
        premiered: obj.premiered,
        image: obj.image,
        genres: obj.genres
    }
    console.log(id)

    let status = await axios.put('http://localhost:8000/api/movies/update/'+id, item)
    return status;
}
exports.deleteMovie= async function (id)
{
    let status = await axios.delete('http://localhost:8000/api/movies/delete/'+id)
    return status;
}