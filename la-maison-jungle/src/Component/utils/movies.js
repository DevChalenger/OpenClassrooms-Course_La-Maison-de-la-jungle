const movies = [
  {
    id: "1",
    image: "https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    image: "https://images-na.ssl-images-amazon.com/images/I/71-J6giZEQL.jpg",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    image: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    image: "https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    image:
      "https://media.services.cinergy.ch/media/box1600/22a9819e02b2623ca3459768f1e6033d353e031c.jpg",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    image:
      "https://static.posters.cz/image/750/affiches-et-posters/pulp-fiction-cover-i1288.jpg",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
  },
  {
    id: "7",
    image:
      "https://static.posters.cz/image/750/affiches-et-posters/pulp-fiction-cover-i1288.jpg",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
  },
  {
    id: "8",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51VQ890AJML._AC_SY445_.jpg",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    image:
      "https://www.telerama.fr/sites/tr_master/files/4b88fb8f-a1f8-4432-a222-17c30c201e6d_2.jpg",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "10",
    image:
      "http://addict-culture.com/wp-content/uploads/2014/10/gone-girl-poster.jpg",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
