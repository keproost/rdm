//DATATABLE
(function (window, document, $) {
  var tabledevices = $('#table-devices').DataTable({
    "searching": true,
    "lengthChange": true,
    "paging": true,
    "bInfo": true,
    "responsive": true, 
    'columnDefs': [
      { 
        "orderable": false, 
        "targets": [6, 5], 
      },
      { "responsivePriority": 1, targets: 0 },
      { "responsivePriority": 1, targets: -1},
      { "responsivePriority": 1, targets: 1 },
      { "responsivePriority": 2, targets: 5 },
      { "responsivePriority": 10000, targets: 3},
      {
        'targets': 0,
        'render': function (data, type, row, meta) {
          if (type === 'display') {
            data = '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>'; //body checkbox
          }
          return data;
        },
        'checkboxes': {
          'selectRow': true,
          'selectAllRender': '<div class="checkbox"><input type="checkbox" class="dt-checkboxes" checked=""><label></label></div >'  //head checkbox
        }
      }],
      'select': {
        style: 'true',
        selector: 'tr',
        blurable: true
    },
    'order': [[1, 'asc']]
  });


})(window, document, jQuery);

$(document).ready(function () {

  var $primary = '#ED6D05';
  var $gray_light = '#828D99';

  // Activity device pool -  Line Chart - Primary
  // ------------------------------
  var followerChartPrimaryOptions = {
    chart: {
      height: 100,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    colors: [$primary],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
    },
    series: [{
      data: [24, 16, 27, 23, 12, 20, 23]
    }],
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: $gray_light,
        }
      },
      axisBorder: {
        height: 0.5,
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    }
  }

  var followerChartPrimary = new ApexCharts(
    document.querySelector("#follower-primary-chart"),
    followerChartPrimaryOptions
  );
  followerChartPrimary.render();


});


