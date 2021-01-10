let two_ops_calc = new BaseModule({
  name: 'two_ops_calc',
  desc: '计算下列算式',
  default_num: 24,
  generate: function(config, total_cnt) {
    let library = new Set();
    let max_num = config['max_num'];

    while (library.size < total_cnt) {
      let op_id = getRandomInt(0, 2);
      let formula;
      if (op_id === 0) {
        let left = getRandomInt(1, max_num - 1);
        let right = getRandomInt(1, max_num - left);
        formula = [left, '+', right, '=', left + right];
      }
      else if (op_id === 1) {
        let left = getRandomInt(2, max_num);
        let right = getRandomInt(1, left);
        formula = [left, '-', right, '=', left - right];
      }
      library.add(formula.join(','));
    }

    let output = '<table width="100%">';
    let count = 0;
    library.forEach(function(s) {
      if (count % 6 === 0) {
        output += "<tr>";
      }
      let formula = s.split(',');
      formula[getRandomInt(0, 3) * 2] = '____';
      output += "<td>" + formula.join(' ')  + "</td>";
      if (++count % 6 === 0) {
        output += "</tr>";
      }
    });
    output += "</tr></table>"
    return output;
  }
}).register();