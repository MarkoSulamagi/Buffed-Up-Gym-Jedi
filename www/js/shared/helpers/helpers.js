"use strict";

function Helpers() {
}

Helpers.empty = function(variable) {
  return (variable == undefined || variable == null || variable == "");
};

Helpers.notEmpty = function(variable) {
  return (variable != undefined && variable != null && variable != "");
};
