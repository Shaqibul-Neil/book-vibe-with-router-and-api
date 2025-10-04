const getFromLocalStorage = () => {
  const storedBooksStr = localStorage.getItem("readList");
  if (storedBooksStr) {
    const storedBooks = JSON.parse(storedBooksStr);
    return storedBooks;
  }
  return [];
};
const addToStorage = (id) => {
  const storedBookData = getFromLocalStorage();
  if (storedBookData.includes(id)) return alert("Book Exist");
  storedBookData.push(id);
  const storedBooks = JSON.stringify(storedBookData);
  localStorage.setItem("readList", storedBooks);
  console.log(storedBooks);
};
export { addToStorage };
