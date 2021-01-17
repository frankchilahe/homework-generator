let multiplication = new BaseModule({
  name: 'multiplication',
  desc: '计算下列算式',
  default_num: 18,
  generate: function(config, total_cnt) {
    let library = new Set();
    total_cnt = total_cnt < 81 ? total_cnt : 81;

    while (library.size < total_cnt) {
      let left = getRandomInt(1, 10);
      let right = getRandomInt(1, 10);
      library.add(left + ' x ' + right + ' = ');
    }

    let output = '<table width="100%">';
    let count = 0;
    library.forEach(function(s) {
      if (count % 6 === 0) {
        output += "<tr>";
      }
      output += "<td>" + s + "</td>";
      if (++count % 6 === 0) {
        output += "</tr>";
      }
    });
    output += "</tr></table>"
    return output;
  }
}).register();