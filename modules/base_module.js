let BaseModule = function(obj) {
  this.name = obj.name || '';
  this.desc = obj.desc || '';
  this.default_num = obj.default_num || 10;
  this.generate = obj.generate || function() {};
  this.module_config = InstalledModules[this.name];
};

BaseModule.prototype.render = function(data) {
  let result = '<h4>' + this.desc + '</h4>' + data;
  $('#' + this.name + ' div[name="result"]').html(result);
};

BaseModule.prototype.generate = function(config, total_cnt) {
  return '';
}

BaseModule.prototype.process = function() {
  let total_cnt = $('#' + this.name + ' input[name="cnt"]').val()
    || this.default_num
    || 10;
  let data = this.generate(this.module_config.config, total_cnt);
  this.render(data);
};

BaseModule.prototype.register = function() {
  $('#' + this.name).html(
    '<div class="no-print"><button name="gen" class="btn btn-default">' +
    '生成' + this.module_config.description + '</button>' +
    '<label>题数：</label><input name="cnt" type="number" value="' +
    (this.default_num || 10) + '"></input></div><div name="result" class="row"/>');
  $('#' + this.name + ' button[name="gen"]').click(() => {
    this.process();
  });
  return this;
};