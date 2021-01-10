let three_ops_calc = new BaseModule({
  name: 'three_ops_calc',
  desc: '计算下列算式',
  default_num: 12,
  generate: function(config, total_cnt) {
    let library = new Set();
    let max_num = config.max_num;
  
    while (library.size < total_cnt) {
      let op_id = getRandomInt(0, 4);
      let formula;
      if (op_id === 0) {
        let num1 = getRandomInt(1, max_num - 2);
        let num2 = getRandomInt(1, max_num - num1 - 1);
        let num3 = getRandomInt(1, max_num - num1 - num2);
        formula = [num1, '+', num2, '+', num3, '=', num1 + num2 + num3];
      }
      else if (op_id === 1) {
        let num1 = getRandomInt(max_num / 2.5, max_num);
        let num2 = getRandomInt(1, num1 - 1);
        let num3 = getRandomInt(1, num1 - num2);
        formula = [num1, '-', num2, '-', num3, '=', num1 - num2 - num3];
      }
      else if (op_id === 2) {
        let num1 = getRandomInt(1, max_num - 1);
        let num2 = getRandomInt(1, max_num - num1);
        let num3 = getRandomInt(1, num1 + num2);
        formula = [num1, '+', num2, '-', num3, '=', num1 + num2 - num3];
      }
      else if (op_id === 3) {
        let num1 = getRandomInt(max_num / 2.5, max_num);
        let num2 = getRandomInt(1, num1);
        let num3 = getRandomInt(1, max_num - num1 + num2);
        formula = [num1, '-', num2, '+', num3, '=', num1 - num2 + num3];
      }
      library.add(formula.join(','));
    }
  
    let output = '<table width="100%">';
    let count = 0;
    library.forEach(function(s) {
      if (count % 4 === 0) {
        output += "<tr>";
      }
      let formula = s.split(',');
      formula[getRandomInt(0, 4) * 2] = '____';
      output += "<td>" + formula.join(' ') + "</td>";
      if (++count % 4 === 0) {
        output += "</tr>";
      }
    });
    output += "</tr></table>";
    return output;
  }
}).register();