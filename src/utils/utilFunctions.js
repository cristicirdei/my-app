export const getTotalPagesRead = (books) => {
  let pages = 0;

  books.map((b) => {
    pages = pages + b.length;
    return pages;
  });

  return pages;
};

export const getBooksPerMonth = (books) => {
  let books_per_month = new Array(12).fill(0);

  books.map((b) => {
    books_per_month[parseInt(b.read[b.read.length - 1].end.slice(5, 7)) - 1] =
      books_per_month[parseInt(b.read[b.read.length - 1].end.slice(5, 7)) - 1] +
      1;
    return books_per_month;
  });

  return books_per_month;
};

export const getPagesPerMonth = (books_) => {
  const books = structuredClone(books_);
  let pages_per_month = new Array(12).fill(0);

  books.splice(5, 1);
  books.splice(7, 1);

  books.map((b, index) => {
    pages_per_month[parseInt(b.read[b.read.length - 1].end.slice(5, 7)) - 1] =
      pages_per_month[parseInt(b.read[b.read.length - 1].end.slice(5, 7)) - 1] +
      b.length;

    return pages_per_month;
  });

  return pages_per_month;
};
