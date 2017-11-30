module.exports = (dato, root, i18n) => {
  console.log(dato.covers);
  root.directory("src/manuals", (articlesDir) => {
    // ...iterate over the "Blog post" records...
    dato.covers.forEach((article) => {
      // ...and create a markdown file for each article!
      articlesDir.createPost(
        `${article.sku}.md`, "yaml", {
          frontmatter: {
            sku: article.sku,
            template: article.template,
            name: article.sku,
            brand: article.row01,
            logo: article.row02,
            series: article.row03,
            year: article.row04,
            manual1: article.row05,
            manual2: article.row06,
            carimage: article.row07,
            downloadid: article.row08
          },
          content: article.row01
        }
      );
    });
  });
};
