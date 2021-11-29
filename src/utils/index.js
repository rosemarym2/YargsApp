const movieArr = [];

class Movie {
    constructor(title, actor, year){
        this.title = title;
        this.actor = actor;
        this.year = year;
    }

    add() {
        movieArr.push(this);
    }
}   

module.exports = {
    Movie,
    movieArr,
};