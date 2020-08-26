
function getTask() {

  $.ajax ({
    url:'http://157.230.17.132:3018/todos',
    method:'GET',
    succes: function (data) {

      console.log('data', data);

    },
    error: function(err) {

      console.log('err', err);

    }

  })
}





function init() {
  getTask();
}

$(document).ready(init);
