var monthlistTpl = [
  '<input type="radio" name="<%= name %>" id="<%= id %>" value="<%= value %>" class="btn" <% if(checked){%> checked="checked" <% } %>>',
  '<label for="<%= id %>"><%= month %>月</label>'
].join(''),
monthEventDateTpl = [
  '<li data-role="list-divider" id="<%= id %>"><%= month %>月</li>'
].join(''),
monthEventTpl = [
  '<li><a href="<%= url %>"><%= data %></a></li>'
].join('');
function initCal(selector, calFormat) {

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var cal = $(selector);

  cal.fullCalendar({
    theme : true,
    firstDay : 1,
    firstHour : 9,
    contentHeight : 500,
    header : {
      left : 'today',
      center : 'title',
      right : 'month,agendaWeek,agendaDay'
    },
    allDayText : '全天活动',
    editable : false,//
    titleFormat : calFormat,
    eventClick : function(calEvent, jsEvent, view) {
      var date = calEvent.start, view = cal.fullCalendar('getView'), name = view.name;
      if (name == 'agendaDay') {
        return true;
      } else {
        cal.fullCalendar('gotoDate', date.getFullYear(), date.getMonth(),
            date.getDate());
        cal.fullCalendar('changeView', 'agendaDay');
        return false;
      }
    },
    events : [ {
      title : '中秋节',
      start : new Date(y, m, 1),
      color : 'red',
      url : "#frame"
    }, {
      title : '交大安泰学术周',
      start : new Date(y, m, d - 5),
      end : new Date(y, m, d - 2),
      color : '#00ABFF',
      url : "#frame"
    }, {
      id : 999,
      title : 'MBA高级训练营',
      start : new Date(y, m, d - 3, 16, 0),
      allDay : false,
      color : '#00ABFF',
      url : "#frame"
    }, {
      id : 999,
      title : '中国CEO创新管理训练班',
      start : new Date(y, m, d + 4, 16, 0),
      allDay : false,
      color : '#00ABFF',
      url : "#frame"
    }, {
      title : '中国CEO创新管理训练班',
      start : new Date(y, m, d + 1, 10, 30),
      allDay : false,
      color : '#00ABFF',
      url : "#frame"
    }, {
      title : '中国制造业转型战略研讨',
      start : new Date(y, m, d + 1, 12, 0),
      end : new Date(y, m, d, 14, 0),
      allDay : false,
      color : '#00ABFF',
      url : "#frame"
    }, {
      title : '创新计划',
      start : new Date(y, m, d + 1, 19, 0),
      end : new Date(y, m, d + 1, 22, 30),
      allDay : false,
      color : '#00ABFF',
      url : "#frame"
    }, {
      title : '中国CEO创新管理训练班',
      start : new Date(y, m, 28),
      end : new Date(y, m, 29),
      color : '#00E42E',
      url : "#frame"
    } ]
  });
}

function createMonthList(){
  var $mlist = $('#monthList').html(''),
    currentMonth = new Date().getMonth(), month = currentMonth;
  for(var i = 0; i < 12; i++){
    if(month == 12){
      month = 1;
    }else{
      month ++;
    }
    var $btn = $(_.template(monthlistTpl, {
      name : 'i',
      id : i,
      cls : 'btn',
      value : month + '月', //'off'
      checked : i == 0 ? 'checked' : '',//''
      month : month
    }));
    $mlist.append($btn);
    
  }
  $mlist.find('.btn').checkboxradio();
  $mlist.controlgroup({ 'type':'horizontal'});
}

function createEventList(){
  var $elist = $('#eventList').html(''),
    currentMonth = new Date().getMonth(), month = currentMonth;
  for(var i = 0; i < 12; i++){
    if(month == 12){
      month = 1;
    }else{
      month ++;
    }
    var $divider = $(_.template(monthEventDateTpl, {
      id : 'm_' + i,
      month : month
    }));
    $elist.append($divider);
    for(var e = 0; e < 2; e++){
      var $event = $(_.template(monthEventTpl, {
        url : '#frame',
        data : '测试' + e
      }));
      $elist.append($event);
    }
  }
  $elist.listview('refresh');
}

$.mobile.ajaxEnabled = false;
$(document).on('ready', function() {
  // initCal('#cal-teach');
  $().UItoTop();
}).on(
    'pagechange',
    function() {
      if (window.location.hash == '#listview') {
        createMonthList();
        $("#monthList input").click(function() {
          var top, letter = $(this).val(), divider = $("#eventList").find(
              "li.ui-li-divider:contains(" + letter + ")");
          if (divider.length > 0) {
            top = divider.offset().top - 55;//55 is offset
            console.log(top);
            $.mobile.silentScroll(top);
          } else {
            return false;
          }
        });
        createEventList();
      } else {
        $('#cal-teach').empty();
        initCal('#cal-teach', {
          month : 'yyyy MMMM（教学日历）', // September 2009
          week : "MMM d{ '&#8212;'[ MMM] d}（教学日历）", // Sep 7 - 13 2009
          day : 'yyyy, MMM d, dddd（教学日历）'
        });
      }
    });
$('#teachCalNext').on('vclick', function() {
  $('#cal-teach').fullCalendar('next');
});
$('#teachCalPrev').on('vclick', function() {
  $('#cal-teach').fullCalendar('prev');
});