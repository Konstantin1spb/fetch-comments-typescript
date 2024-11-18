const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<Response> => fetch(url)

interface IPosts {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

getData(COMMENTS_URL)
  .then((response) => response.json())
  .then((data: IPosts[]) => {
    data.map(({id, email}) => {
      console.log(`ID: ${id}, Email: ${email}`)
    })
  })
  .catch(e => e);

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */