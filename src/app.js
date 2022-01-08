const express = require('express');
const cors = require('cors');
const logger = require('./logger');

const app = express();

app.use(cors());
app.use(express.json());

const posts = [
  {
    id: 1,
    body: 'body 1',
    title: 'Hello this is my first post',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    id: 2,
    body: 'body 2',
    title: 'Yoyoyoyo',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
];

// routes

app.get('/posts', (req, res) => {
  setTimeout(() => {
    res.json({ data: posts });
  }, 3000);
});

app.get('/post/:id', (req, res) => {
  const id = Number(req.params.id);

  const post = posts.filter((post) => post.id === id);

  if (!post.length) {
    res.status(404);

    res.json('post not found');
  }

  res.json(post);
});

app.post('/post', (req, res) => {
  const newId = posts.length + 1;

  posts.push({
    id: newId,
    title: req.body.title,
    text: req.body.text,
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  });

  res.json('ok');
});

app.listen(5000, () => {
  logger.info('server is listening on port 3000');
});
