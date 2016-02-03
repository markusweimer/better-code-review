var self = require("sdk/self");
var data = self.data;
var pageMod = require("sdk/page-mod");

// Setup the pulls page
pageMod.PageMod({
  include: "https://github.com/apache/reef/pulls*",
  contentScriptFile: [data.url("jquery-2.2.0.min.js"), 
    data.url("common.js"),
    data.url("pulls.js")]
});