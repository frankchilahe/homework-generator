let chinese_word_combine = new BaseModule({
  name: 'chinese_word_combine',
  desc: '用下列汉字组词并书写',
  default_num: 12,
  generate: function(config, total_cnt) {
    let all_chars = config.characters.join('');
    let library = new Set();

    while (library.size < total_cnt) {
      library.add(all_chars[getRandomInt(0, all_chars.length)]);
    }

    let output = '<table width="100%">';
    let count = 0;
    library.forEach(function(s) {
      if (count % 6 === 0) {
        output += "<tr>";
      }
      output += "<td>" + s + " ______</td>";
      if (++count % 6 === 0) {
        output += "</tr>";
      }
    });
    output += "</tr></table>"
    return output;
  }
}).register();