const netflixMovies = [
  { title: "F9: The Fast Saga", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1nI_Z3FYp-mE3L83VBWb60wJpbzFcK2we7_ZeV0W0yLgjE-x3" },
  { title: "The Killer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhEuDb2NqhFUzoM9HbNlDmb47XqLhdIiFMm1eItuIj34yY3KO" },
  { title: "As Ladras", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxQNjUk8SX_xcKmCe-J753JfAKrJ1Gw1KGjo7clsYGsQNxQDzf" },
  { title: "Terror nas Profundezas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LjdwWBAZxE39e97BqG028asTLqSkwaq8wyZUgQGF2-cu9PZu" },
  { title: "Tubarão Mar de Sangue", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8Moa5uGEF50QUxZfDIO9jT73HRog40lvBqp_KTCF1cvxCqs-G" },
  { title: "Paralisia", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDv-CKwtsWxfwG1I7CBPgVz8J8leuP059DWIDSPSzO8TtLOHfW" },
  { title: "O Lado bom de ser Traida", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxJzgNCMa5aHyeBxvVEGSV5CorV9Osjbr08ep4nzZzWdOU3_m_" },
  { title: "Em Confinamento", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjtPfHoPCZWL5IjFziZGwN8WIeXuQvJBiOA99oZQmi8c5spz" },
  { title: "Ferias de Verão", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxXvRZ-aTPweftcRyhtbYdjexSOUGl1Z4tHSWXhhxuBwI_BfPg" },
  { title: "A Família Noel 3", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfMTY6LGVbU_3Maif6Jh7vBc8HVNwRGJKEmdHPmQ3DemIjj96Y" },
];

const primeMovies = [
  { title: "Casa Gucci", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmEgaPiOGyiLtRRWJHWwzvcyeyC23QyhbTwQ6wjiBXhtVXRWJk" },
  { title: "Argentina, 1985", image: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/af/Argentina_1985.jpg/230px-Argentina_1985.jpg" },
  { title: "Triângulo da Tristeza", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRl56LiniQjApEMywImfgjWoKyeT-DajAru17I6vXBtUqp55fuk" },
  { title: "O Regresso", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDRrUpOtnxiTkd9euZY7WRXdrvUnv0mmb58Iwbd0zSspprZX8a" },
  { title: "O Senhor dos Anéis: A Sociedade do Anel", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcpoyk641ovC9v94qS-gGKc6xq-ZZaUNsOx4gv0eXwG0VnW1G8" },
  { title: "X - A Marca da Morte", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvVzDdQN_6rzFJs9dNEVMKpKBrB8dmpf4hvF9X54q6prXMo6_" },
  { title: "Órfã 2: A Origem", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQk8iofExnj38zcT3wXeRtmzwwcP__bCe3QZW_fdGZQ5FG1HP-F" },
  { title: "A Menina Que Matou os Pais", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqMy8Ld73uMX4SeXY750BhJCuhjQaNSkSrmuLjUzGwfXZZcE6" },
  { title: "Clube da Luta", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQniWEvNpxLnjT2IgQ9Q7WrmPwlyRVqTg12aKPezb612FsrtJzg" },
  { title: "The Boys", image: "https://br.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52" },
];

const disneyMovies = [
  { title: "Red: Crescer é uma Fera", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbqzvtXhUMyq7rXyr95zkPGnhCIXBK0BIuhHGtmaHzSsbft0mm" },
  { title: "Tico e Teco: Defensores da Lei", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQE-r0_RHmYEXWYslRK6yPo0rCQWfGBvGP6wSLBqNIWluZZtiTi" },
  { title: "Andor", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5UYdMIYPCbwNGSEdlWUZXH6JXYotxe2_2F3WvuZpcmB2F1aP6" },
  { title: "Mulher-Hulk: Defensora de Heróis", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfytHTFyc0YUzgkn6EYA_u9at5FazZFZfzJiSOzeFACbrpPyIA" },
  { title: "História dos Jedi", image: "https://images.justwatch.com/poster/301434191/s592/tales-of-the-jedi" },
  { title: "Obi-Wan Kenobi", image: "https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg" },
  { title: "Abracadabra 2", image: "https://br.web.img2.acsta.net/pictures/22/09/12/09/10/0257078.jpg" },
  { title: "Lobisomem na Noite", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOCF6oHDe3UFOGoiZEQ0f4_DzvkMBZpAT66WX0hUWIewcUDXI" },
  { title: "Cavaleiro da Lua", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQaEiln5xMzqbY0_AM7-sKycdsMz6cdW-0uydAHidnNIEF4MkWS" },
  { title: "Star Trek", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDkuBnlM_1t7LRlLWXMzG4VofC2ga8jwAtSTt75n8X99IJ_F3y" },
];

function populateMoviesWithImages(platform, movies) {
  const list = document.getElementById(platform + "-list");

  movies.forEach((movie) => {
    const listItem = document.createElement("li");

    const movieImage = document.createElement("img");
    movieImage.src = movie.image;
    movieImage.alt = movie.title;

    const movieTitle = document.createElement("span");
    movieTitle.textContent = movie.title;

    listItem.appendChild(movieImage);
    listItem.appendChild(movieTitle);
    list.appendChild(listItem);
  });
}

populateMoviesWithImages("netflix", netflixMovies.slice(0, 10));
populateMoviesWithImages("prime", primeMovies.slice(0, 10));
populateMoviesWithImages("disney", disneyMovies.slice(0, 10));
