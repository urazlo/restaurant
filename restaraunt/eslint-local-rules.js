module.exports = {
  "no-data-name": {
    create: function(context) {
      return {
        Identifier(node) {
          if (
            node.name === "data" &&
            (node.parent.type === "VariableDeclarator" ||
              node.parent.computed ||
              node.parent.object === node)
          ) {
            context.report(node, 'Do not use the variable name "data"');
          }
        }
      };
    }
  }
  // "no-more-than-one-style-tag": {
  //   create: function(context) {
  //     if (!context.getFilename().endsWith(".vue")) return {};
  //     // console.log(context.getSourceLines());
  //     let w1 = "<style";
  //     let w2 = "</style>";
  //     let cnt = 0;
  //     context.getSourceLines().forEach(line => {
  //       if (line.indexOf(w1) !== -1) {
  //         cnt += 1;
  //       }
  //       if (line.indexOf(w2) !== -1) {
  //         cnt += 1;
  //       }
  //     });
  //     if (cnt > 2) {
  //       context.report(
  //         context.getSourceCode().ast,
  //         "More than one style tag - not BEM compatible"
  //       );
  //     }
  //
  //     return {};
  //   }
  // }
};
