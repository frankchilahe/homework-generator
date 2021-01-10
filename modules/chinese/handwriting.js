let chinese_handwriting = new BaseModule({
  name: 'chinese_handwriting',
  desc: '在田字格中书写下列汉字',
  default_num: 5,
  generate: function(config, total_cnt) {
    let all_chars = config.characters.join('');
    let library = new Set();
    
    while (library.size < total_cnt) {
      library.add(all_chars[getRandomInt(0, all_chars.length)]);
    }

    let output = '<table id="handwriting">';
    library.forEach(function(c) {
      output += '<tr><td align="center"><div class="char">' + c +
        '</div><img src="resource/empty.jpeg"/></td>';
      for (let i = 0; i < 11; ++i) {
        output += '<td><img src="resource/empty.jpeg"/></td>';
      }
      output += '</tr>';
    });
    output += '</table></div>';
    return output;
  }
}).register();