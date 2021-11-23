export default function (server) {
  const authors = server.createList('author', 3);

  server.create('post', 1, {
    author: authors[0],
  });
}
