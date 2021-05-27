/**
    *Buscando e contando dados em Arrays *
        
    *Baseado no Array de livros por categoria abaixo, faça os seguintes desafios 

        *Contar o numero de categorias e o numero de livros em cada categoria
        * contar o numero de autores
        * mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
        * 
 */

const booksByCategory = [
    {
        category:"Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O Homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Liyosaki e Sharon L. Lechter"
            }
        ],
    },
    {
        category:"Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    }
]

const totalCategories = (booksByCategory.length)                 //Conta o numero de categorias
for(let category of booksByCategory){                           // Para category da função booksByCategory...
    console.log('Total de livros da categoria',category.category) //printa na tela
    console.log(category.books.length)                              // mostra o tamanho do array de books.
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
            if(book.author == 'Augusto Cury'){
                console.log('Livro:',book)
            }
        }
    }

    console.log("Total de autores:", authors.length)
    
}

function booksOfAuthor(author){
    let books = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

countAuthors();
booksOfAuthor('Stephen R. Covey')
