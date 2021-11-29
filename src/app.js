const yargs = require ("yargs");

const { Movie, movieArr } = require("./utils");

const app = (args) => {
    switch(process.argv[2]){
        case "add":
            const movie = new Movie(args.title, args.actor, args.year)
            movie.add();
            console.log(movieArr)
            break;
        case "add multi":
            const movie1 = new Movie(args.title1, args.actor1, args.year1);
            const movie2 = new Movie(args.title2, args.actor2, args.year2);
            const movie3 = new Movie(args.title3, args.actor3, args.year3);
            const movie4 = new Movie(args.title4, args.actor4, args.year4);
            const movie5 = new Movie(args.title5, args.actor5, args.year5);
            const movie6 = new Movie(args.title6, args.actor6, args.year6);
            movie1.add();
            movie2.add();
            movie3.add();
            movie4.add();
            movie5.add();
            movie6.add();
            console.log(movieArr);
            break;
        default:
            console.log("Incorrect Command");
            break;
    }
};

app(yargs.argv);
