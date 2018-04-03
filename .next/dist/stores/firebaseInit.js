"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/first */

function isNode() {
  return (
    typeof process !== "undefined" &&
    process.release &&
    process.release.name === "node"
  );
}

if (isNode()) {
  global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}

require("@firebase/polyfill");
var firebase = require("@firebase/app").default;
require("@firebase/firestore");
require("@firebase/auth");

try {
  firebase.initializeApp({
    apiKey: process.env.F_API_KEY,
    authDomain: process.env.F_AUTH_DOMAIN,
    projectId: process.env.F_PROJECT_ID
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

var auth = firebase.auth();
var firestore = firebase.firestore();

exports.firebase = firebase;
exports.auth = auth;
exports.firestore = firestore;
