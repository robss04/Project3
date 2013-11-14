$(function(){
  
  Handlebars.registerHelper('niceDate', function(d,fmt) {
    return moment(d).calendar();
  });
  
  
  
  $('#output').on('click', 'ul.article-links li', function(e) {
    showArticle( $(this).data('id') );
  });
  
  $('#output').on('click', 'p.articles-path', function(e) {
    showArticles();
  });
  
  showArticles();
});