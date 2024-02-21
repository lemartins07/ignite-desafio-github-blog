// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')

const app = express()

app.use(cors())

const postData = [
  {
    url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1',
    repository_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog',
    labels_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/labels{/name}',
    comments_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/comments',
    events_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/events',
    html_url:
      'https://github.com/lemartins07/ignite-desafio-github-blog/issues/1',
    id: 2119488664,
    node_id: 'I_kwDOLMO43c5-VNSY',
    number: 1,
    title: '#1 JavaScript data types and data structures',
    user: {
      login: 'lemartins07',
      id: 40571653,
      node_id: 'MDQ6VXNlcjQwNTcxNjUz',
      avatar_url: 'https://avatars.githubusercontent.com/u/40571653?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/lemartins07',
      html_url: 'https://github.com/lemartins07',
      followers_url: 'https://api.github.com/users/lemartins07/followers',
      following_url:
        'https://api.github.com/users/lemartins07/following{/other_user}',
      gists_url: 'https://api.github.com/users/lemartins07/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/lemartins07/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/lemartins07/subscriptions',
      organizations_url: 'https://api.github.com/users/lemartins07/orgs',
      repos_url: 'https://api.github.com/users/lemartins07/repos',
      events_url: 'https://api.github.com/users/lemartins07/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/lemartins07/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2024-02-05T21:29:39Z',
    updated_at: '2024-02-05T21:29:39Z',
    closed_at: null,
    author_association: 'OWNER',
    active_lock_reason: null,
    body: '**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n[Dynamic typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```javascript\r\nlet foo = 42; // foo is now a number\r\nfoo = ‘bar’; // foo is now a string\r\nfoo = true; // foo is now a boolean\r\n```',
    reactions: {
      url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/reactions',
      total_count: 0,
      '+1': 0,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/timeline',
    performed_via_github_app: null,
    state_reason: null,
    score: 1.0,
  },
  {
    url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1',
    repository_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog',
    labels_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/labels{/name}',
    comments_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/comments',
    events_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/events',
    html_url:
      'https://github.com/lemartins07/ignite-desafio-github-blog/issues/1',
    id: 2119488664,
    node_id: 'I_kwDOLMO43c5-VNSY',
    number: 2,
    title: '#2 JavaScript data types and data structures',
    user: {
      login: 'lemartins07',
      id: 40571653,
      node_id: 'MDQ6VXNlcjQwNTcxNjUz',
      avatar_url: 'https://avatars.githubusercontent.com/u/40571653?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/lemartins07',
      html_url: 'https://github.com/lemartins07',
      followers_url: 'https://api.github.com/users/lemartins07/followers',
      following_url:
        'https://api.github.com/users/lemartins07/following{/other_user}',
      gists_url: 'https://api.github.com/users/lemartins07/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/lemartins07/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/lemartins07/subscriptions',
      organizations_url: 'https://api.github.com/users/lemartins07/orgs',
      repos_url: 'https://api.github.com/users/lemartins07/repos',
      events_url: 'https://api.github.com/users/lemartins07/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/lemartins07/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2024-02-05T21:29:39Z',
    updated_at: '2024-02-05T21:29:39Z',
    closed_at: null,
    author_association: 'OWNER',
    active_lock_reason: null,
    body: '**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n[Dynamic typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```javascript\r\nlet foo = 42; // foo is now a number\r\nfoo = ‘bar’; // foo is now a string\r\nfoo = true; // foo is now a boolean\r\n```',
    reactions: {
      url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/reactions',
      total_count: 0,
      '+1': 0,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/timeline',
    performed_via_github_app: null,
    state_reason: null,
    score: 1.0,
  },
  {
    url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1',
    repository_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog',
    labels_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/labels{/name}',
    comments_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/comments',
    events_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/events',
    html_url:
      'https://github.com/lemartins07/ignite-desafio-github-blog/issues/1',
    id: 2119488664,
    node_id: 'I_kwDOLMO43c5-VNSY',
    number: 3,
    title: '#3 JavaScript data types and data structures',
    user: {
      login: 'lemartins07',
      id: 40571653,
      node_id: 'MDQ6VXNlcjQwNTcxNjUz',
      avatar_url: 'https://avatars.githubusercontent.com/u/40571653?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/lemartins07',
      html_url: 'https://github.com/lemartins07',
      followers_url: 'https://api.github.com/users/lemartins07/followers',
      following_url:
        'https://api.github.com/users/lemartins07/following{/other_user}',
      gists_url: 'https://api.github.com/users/lemartins07/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/lemartins07/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/lemartins07/subscriptions',
      organizations_url: 'https://api.github.com/users/lemartins07/orgs',
      repos_url: 'https://api.github.com/users/lemartins07/repos',
      events_url: 'https://api.github.com/users/lemartins07/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/lemartins07/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2024-02-05T21:29:39Z',
    updated_at: '2024-02-05T21:29:39Z',
    closed_at: null,
    author_association: 'OWNER',
    active_lock_reason: null,
    body: '**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n[Dynamic typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```javascript\r\nlet foo = 42; // foo is now a number\r\nfoo = ‘bar’; // foo is now a string\r\nfoo = true; // foo is now a boolean\r\n```',
    reactions: {
      url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/reactions',
      total_count: 0,
      '+1': 0,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/timeline',
    performed_via_github_app: null,
    state_reason: null,
    score: 1.0,
  },
  {
    url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1',
    repository_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog',
    labels_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/labels{/name}',
    comments_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/comments',
    events_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/events',
    html_url:
      'https://github.com/lemartins07/ignite-desafio-github-blog/issues/1',
    id: 2119488664,
    node_id: 'I_kwDOLMO43c5-VNSY',
    number: 4,
    title: '#4 JavaScript data types and data structures',
    user: {
      login: 'lemartins07',
      id: 40571653,
      node_id: 'MDQ6VXNlcjQwNTcxNjUz',
      avatar_url: 'https://avatars.githubusercontent.com/u/40571653?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/lemartins07',
      html_url: 'https://github.com/lemartins07',
      followers_url: 'https://api.github.com/users/lemartins07/followers',
      following_url:
        'https://api.github.com/users/lemartins07/following{/other_user}',
      gists_url: 'https://api.github.com/users/lemartins07/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/lemartins07/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/lemartins07/subscriptions',
      organizations_url: 'https://api.github.com/users/lemartins07/orgs',
      repos_url: 'https://api.github.com/users/lemartins07/repos',
      events_url: 'https://api.github.com/users/lemartins07/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/lemartins07/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2024-02-05T21:29:39Z',
    updated_at: '2024-02-05T21:29:39Z',
    closed_at: null,
    author_association: 'OWNER',
    active_lock_reason: null,
    body: '**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n[Dynamic typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```javascript\r\nlet foo = 42; // foo is now a number\r\nfoo = ‘bar’; // foo is now a string\r\nfoo = true; // foo is now a boolean\r\n```',
    reactions: {
      url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/reactions',
      total_count: 0,
      '+1': 0,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/timeline',
    performed_via_github_app: null,
    state_reason: null,
    score: 1.0,
  },
  {
    url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1',
    repository_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog',
    labels_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/labels{/name}',
    comments_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/comments',
    events_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/events',
    html_url:
      'https://github.com/lemartins07/ignite-desafio-github-blog/issues/1',
    id: 2119488664,
    node_id: 'I_kwDOLMO43c5-VNSY',
    number: 5,
    title: '#5 JavaScript data types and data structures',
    user: {
      login: 'lemartins07',
      id: 40571653,
      node_id: 'MDQ6VXNlcjQwNTcxNjUz',
      avatar_url: 'https://avatars.githubusercontent.com/u/40571653?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/lemartins07',
      html_url: 'https://github.com/lemartins07',
      followers_url: 'https://api.github.com/users/lemartins07/followers',
      following_url:
        'https://api.github.com/users/lemartins07/following{/other_user}',
      gists_url: 'https://api.github.com/users/lemartins07/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/lemartins07/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/lemartins07/subscriptions',
      organizations_url: 'https://api.github.com/users/lemartins07/orgs',
      repos_url: 'https://api.github.com/users/lemartins07/repos',
      events_url: 'https://api.github.com/users/lemartins07/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/lemartins07/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2024-02-05T21:29:39Z',
    updated_at: '2024-02-05T21:29:39Z',
    closed_at: null,
    author_association: 'OWNER',
    active_lock_reason: null,
    body: '**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n[Dynamic typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```javascript\r\nlet foo = 42; // foo is now a number\r\nfoo = ‘bar’; // foo is now a string\r\nfoo = true; // foo is now a boolean\r\n```',
    reactions: {
      url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/reactions',
      total_count: 0,
      '+1': 0,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/timeline',
    performed_via_github_app: null,
    state_reason: null,
    score: 1.0,
  },
  {
    url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1',
    repository_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog',
    labels_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/labels{/name}',
    comments_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/comments',
    events_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/events',
    html_url:
      'https://github.com/lemartins07/ignite-desafio-github-blog/issues/1',
    id: 2119488664,
    node_id: 'I_kwDOLMO43c5-VNSY',
    number: 6,
    title: '#6 JavaScript data types and data structures',
    user: {
      login: 'lemartins07',
      id: 40571653,
      node_id: 'MDQ6VXNlcjQwNTcxNjUz',
      avatar_url: 'https://avatars.githubusercontent.com/u/40571653?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/lemartins07',
      html_url: 'https://github.com/lemartins07',
      followers_url: 'https://api.github.com/users/lemartins07/followers',
      following_url:
        'https://api.github.com/users/lemartins07/following{/other_user}',
      gists_url: 'https://api.github.com/users/lemartins07/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/lemartins07/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/lemartins07/subscriptions',
      organizations_url: 'https://api.github.com/users/lemartins07/orgs',
      repos_url: 'https://api.github.com/users/lemartins07/repos',
      events_url: 'https://api.github.com/users/lemartins07/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/lemartins07/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2024-02-05T21:29:39Z',
    updated_at: '2024-02-05T21:29:39Z',
    closed_at: null,
    author_association: 'OWNER',
    active_lock_reason: null,
    body: '**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n[Dynamic typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```javascript\r\nlet foo = 42; // foo is now a number\r\nfoo = ‘bar’; // foo is now a string\r\nfoo = true; // foo is now a boolean\r\n```',
    reactions: {
      url: 'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/reactions',
      total_count: 0,
      '+1': 0,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      'https://api.github.com/repos/lemartins07/ignite-desafio-github-blog/issues/1/timeline',
    performed_via_github_app: null,
    state_reason: null,
    score: 1.0,
  },
]

app.get('/user', (req, res) => {
  res.json({
    login: 'lemartins07',
    avatar_url: 'https://avatars.githubusercontent.com/u/40571653?v=4',
    bio: "I'm just a web developer student focused on learn NodeJs, ReactJs and React Native.",
    company: '',
    followers: 8,
    name: 'Leandro Martins',
    html_url: 'https://github.com/lemartins07',
  })
})

app.get('/posts', (req, res) => {
  const search = req.query.search

  console.log(search)

  const filteredPosts = search
    ? postData.filter(
        (post) => post.title.includes(search) || post.body.includes(search),
      )
    : postData

  res.json(filteredPosts)
})

app.get('/posts/:number', (req, res) => {
  const postNumber = req.params.number

  const post = postData.find((post) => post.number === parseInt(postNumber))

  // Verifica se o post foi encontrado
  if (post) {
    res.json(post) // Retorna o post como JSON
  } else {
    res.status(404).send('Post não encontrado') // Retorna status 404 se o post não for encontrado
  }
})

app.listen(3000, () => {
  console.log('Servidor Express iniciado na porta 3000')
})
