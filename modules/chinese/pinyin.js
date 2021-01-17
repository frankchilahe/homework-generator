let chinese_pinyin = new BaseModule({
  name: 'chinese_pinyin',
  desc: '写出下列汉字的拼音',
  default_num: 12,
  generate: function(config, total_cnt) {
    let all_chars = config.characters.join('');
    let library = new Set();
    total_cnt = total_cnt < all_chars.length ? total_cnt : all_chars.length;

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