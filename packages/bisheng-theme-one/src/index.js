module.exports = {
  lazyLoad: true,
  routes: [{
    path: '/',
    component: './template/Archive',
  }, {
    path: '/posts/:post',
    component: './template/Post',
  }, {
    path: '/tags',
    component: './template/TagCloud',
    dataPath: '/',
  }],
};