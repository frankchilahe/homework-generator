let eng_words = new BaseModule({
  name: 'eng_words',
  desc: '朗读并写出下列单词的中文释义（可用拼音）',
  default_num: 10,
  generate: function(config, total_cnt) {
    let all_words = config.words.join().split(',');
    let library = new Set();
    total_cnt = total_cnt < all_words.length ? total_cnt : all_words.length;

    while (library.size < total_cnt) {
      library.add(all_words[getRandomInt(0, all_words.length)]);
    }

    let output = '<table width="100%">';
    let count = 0;
    library.forEach(function(s) {
      if (count % 5 === 0) {
        output += "<tr>";
      }
      output += "<td>" + s + " ______</td>";
      if (++count % 5 === 0) {
        output += "</tr>";
      }
    });
    output += "</tr></table>"
    return output;
  }
}).register();