// Создаем объект personalMovieDB
const personalMovieDB = {
    privat: false,
    movies: {
      "Leon": 8,
      "Pulp Fiction": 9,
      "What we do in the Shadows": 10,
    },
  };
  
  // Создаем функцию для вывода таблицы с фильмами
  function showMoviesTable(movies) {
    // Создаем таблицу
    const table = document.createElement("table");
  
    // Создаем заголовок таблицы
    const headerRow = document.createElement("tr"); // Создает экземпляр элемента для указанного тега 
    const titleHeader = document.createElement("th");
    const ratingHeader = document.createElement("th");
    titleHeader.textContent = "Название фильма";
    ratingHeader.textContent = "Рейтинг";
    headerRow.appendChild(titleHeader); //позволяет вставить в конец какого-либо элемента другой элемент
    headerRow.appendChild(ratingHeader);
    table.appendChild(headerRow);
  
    // Создаем строки таблицы с фильмами и их рейтингами
    for (const [title, rating] of Object.entries(movies)) {
      const row = document.createElement("tr");
      const titleCell = document.createElement("td");
      const ratingCell = document.createElement("td");
      titleCell.textContent = title;
      ratingCell.textContent = rating;
      row.appendChild(titleCell);
      row.appendChild(ratingCell);
      table.appendChild(row);
    }
  
    // Выводим таблицу в документ
    document.body.appendChild(table);
  }
  
  // Проверяем значение privat и выводим таблицу только если privat === false
  if (!personalMovieDB.privat) {
    showMoviesTable(personalMovieDB.movies);
  }
  
