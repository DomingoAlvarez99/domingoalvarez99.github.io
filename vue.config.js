const Mode = require('frontmatter-markdown-loader/mode');
const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const markdownItTableOfContents = require('markdown-it-table-of-contents');
const markdownItAnchor = require('markdown-it-anchor');

const md = markdownIt({ html: true });

var defaultRender =
  md.renderer.rules.link_open ||
  ((tokens, idx, options, env, self) => {
    return self.renderToken(tokens, idx, options);
  });

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  // If you are sure other plugins can't add `target` - drop check below
  var aIndex = tokens[idx].attrIndex('target');

  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']); // add new attribute
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank'; // replace value of existing attr
  }

  // pass token to default renderer.
  return defaultRender(tokens, idx, options, env, self);
};

md.use(markdownItPrism);
md.use(markdownItAnchor.default);
md.use(markdownItTableOfContents, { includeLevel: [2, 3, 4] });
module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: '/',
  chainWebpack: (config) => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .tap(() => {
        return {
          mode: [Mode.VUE_COMPONENT],
          vue: {
            root: 'markdown-body',
          },
          markdownIt: md,
        };
      });
  },
};
