let movies = [
    {
        name: "Bahubali",
        img:"/images/bahubali.jpg",
        director: "rajamouli",
        releaseYear:2015,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
           }
        ]
    },
    {
        name: "avatar",
        img:"/images/avatar.jpg",
        director: "james cameron",
        releaseYear:2009,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
       }
        ]
    },
    {
        name: "interstellar",
        img:"/images/interstellar.jpg",
        director: "cristopher nolan",
        releaseYear:2014,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
           }
        ]
    }
];
module.exports = movies;