// script.js

document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.getElementById('bookForm');
  const bookTable = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
  const searchBox = document.getElementById('searchBox');

  // Function to add a new book to the table
  function addBook(title, author) {
      const row = bookTable.insertRow();
      const titleCell = row.insertCell(0);
      const authorCell = row.insertCell(1);
      const actionCell = row.insertCell(2);

      titleCell.textContent = title;
      authorCell.textContent = author;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      deleteButton.onclick = function() {
          bookTable.deleteRow(row.rowIndex - 1);
      };

      actionCell.appendChild(deleteButton);
  }

  // Event listener for form submission
  bookForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;

      if (title && author) {
          addBook(title, author);

          // Clear the form inputs
          bookForm.reset();
      }
  });

  // Function to search books in the table
  function searchBooks() {
      const filter = searchBox.value.toLowerCase();
      const rows = bookTable.getElementsByTagName('tr');

      for (let i = 0; i < rows.length; i++) {
          const cells = rows[i].getElementsByTagName('td');
          const title = cells[0]?.textContent.toLowerCase();
          const author = cells[1]?.textContent.toLowerCase();
          if (title.includes(filter) || author.includes(filter)) {
              rows[i].style.display = '';
          } else {
              rows[i].style.display = 'none';
          }
      }
  }

  // Event listener for search input
  searchBox.addEventListener('keyup', searchBooks);
});
