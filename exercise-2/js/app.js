/*
Запустите сервер, открыв в папке js-lesson27 терминал
и написа в нем:
json-server --watch- db.json

Напишите код, который работает так:
Пользователь заполняет форму и нажав Submit -
добавляет книгу в базу данных, отправив AJAX-запрос методом POST по адресу:
"http://localhost:3000/books" объект вида:
{
    "name": "Book name",
    "author": "Books author",
    "isbn": "Book isbn"
}

Если добавление прошло успешно, вы получите ответ в виде:

{
    "id: 34,
    "name": "Book name",
    "author": "Books author",
    "isbn": "Book isbn"
}

полученный объект должен добавиться в
таблицу с id="book-list" в виде такой разметки:

<tr>
    <td>Book name</td>
    <td>Books author</td>
    <td>Book isbn</td>
    <td><a href="#" class="btn btn-info btn-sm"><i class="fas fa-edit"></i></a></td>
    <td><a href="#" class="btn btn-danger btn-sm btn-delete">X</a></td>
</tr>
*/ 


