let button = document.getElementById('button');
let result = document.getElementById('result');

button.onclick = function generate(){
 result.value = Math.floor(Math.random() * 100);
};

let refresh = document.getElementById('refresh');
refresh.onclick = function refresh(){
    result.value = '';
}

var arrLang = {
  'eng': {
      'Generator of Numbers': 'Generator of Numbers'
  },
  'rus': {
      'Generator of Numbers': 'Генератор Чисел'
  }
};

$(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });