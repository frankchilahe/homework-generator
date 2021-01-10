let eng_sentences = new BaseModule({
  name: 'eng_sentences',
  desc: '朗读并写出下列句子的中文释义（可用拼音）',
  default_num: 6,
  generate: function(config, total_cnt) {
    let all_sentences = config.sentences;
    let library = new Set();

    while (library.size < total_cnt) {
      library.add(all_sentences[getRandomInt(0, all_sentences.length)]);
    }
  
    let output = '<table width="100%">';
    let count = 0;
    library.forEach(function(s) {
      if (count % 2 === 0) {
        output += "<tr>";
      }
      output += "<td>" + s + " ________________</td>";
      if (++count % 2 === 0) {
        output += "</tr>";
      }
    });
    output += "</tr></table>"
    return output;
  }
}).register();