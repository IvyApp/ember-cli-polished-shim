'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: 'polished',

  treeForAddon: function(tree) {
    var polishedPath = path.dirname(require.resolve('polished'));
    var polishedTree = this.treeGenerator(polishedPath);

    polishedTree = new Funnel(polishedTree, {
      include: [
        '**/*.js'
      ]
    });

    if (!tree) {
      return this._super.treeForAddon.call(this, polishedTree);
    }

    var trees = mergeTrees([polishedTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
