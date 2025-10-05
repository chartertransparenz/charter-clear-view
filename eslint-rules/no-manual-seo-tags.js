// ESLint Rule: Prevent manual SEO meta tags outside prerender scripts
// Use this to enforce that SEO tags are only managed via prerender scripts

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent manual SEO meta tags outside prerender scripts',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      noManualMeta: 'Use prerender scripts for SEO meta tags. The Meta component should only be used for non-SEO tags (viewport, theme-color, etc.).',
    },
  },
  create(context) {
    return {
      JSXElement(node) {
        const elementName = node.openingElement.name.name;
        const filename = context.getFilename();
        
        // Skip if in prerender scripts
        if (filename.includes('scripts/prerender')) {
          return;
        }
        
        // Check for Meta or Helmet components
        if (elementName === 'Meta' || elementName === 'Helmet') {
          context.report({
            node,
            messageId: 'noManualMeta',
          });
        }
      },
    };
  },
};
