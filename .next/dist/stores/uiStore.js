"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIStore = exports.Language = undefined;

var _mobxStateTree = require("mobx-state-tree");

var Language = (exports.Language = _mobxStateTree.types.model({
  id: _mobxStateTree.types.string,
  title: _mobxStateTree.types.string,
  shortTitle: _mobxStateTree.types.string
})); // @ts-check

var UIStore = (exports.UIStore = _mobxStateTree.types
  .model("UIStore", {
    collapsedSidebar: false,
    languages: _mobxStateTree.types.map(Language)
  })
  .views(function(self) {
    return {
      get blog() {
        return (0, _mobxStateTree.getParent)(self);
      },
      get allLanguages() {
        return self.languages.values();
      }
    };
  })
  .actions(function(self) {
    return {
      toggleSidebar: function toggleSidebar() {
        self.collapsedSidebar = !self.collapsedSidebar;
      },
      closeSidebar: function closeSidebar() {
        self.collapsedSidebar = false;
      },
      openSidebar: function openSidebar() {
        self.collapsedSidebar = true;
      }
    };
  }));
