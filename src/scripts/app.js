require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
//require views
require('./views/index.js');
require('./views/guide.js');
require('./views/my.js');
require('./views/more.js');
require('./views/fine.js');
require('./views/video.js');
require('./views/cook.js')


// 定义默认视图
SPA.config({
  indexView: 'index'
});
