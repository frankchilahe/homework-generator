let getRandomInt = function(floor, roof) {
  return floor + Math.floor(Math.random() * Math.floor(roof - floor));
}

let load_module_file = function(filename, filetype='js') {
  let fileref;
  if (filetype === "js") {
    fileref = document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
  }
  else if (filetype === "css") {
    fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
  }
  if (typeof fileref !== undefined) {
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
};

$(function() {
  let active_modules = [];
  for (let n in InstalledModules) {
    if (InstalledModules[n].enabled === 1) {
      InstalledModules[n].name = n;
      active_modules.push(InstalledModules[n]);
    }
  }
  active_modules.sort(function(a, b) {return a.sequence - b.sequence});
  active_modules.forEach(function(module) {
    $('body').append('<div id="' + module.name + '" class="container" />');
    load_module_file(module.jsfile);
    if (module.cssfile) {
      load_module_file(module.cssfile, 'css');
    }
  });

  let today = new Date();
  let header = '今日作业';
  if (today.getMonth() === 0 || today.getMonth() === 1) {
    header = '寒假作业';
  }
  else if (today.getMonth() === 6 || today.getMonth() === 7) {
    header = '暑假作业';
  }
  header += ' ' + today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  $('#header').val(header);
});