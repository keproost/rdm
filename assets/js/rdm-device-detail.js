//Tables
(function (window, document, $) {

  var devicedetailtablepolicies = $('#device-detail-table-policies').DataTable({
    "searching": true,
    "lengthChange": true,
    "paging": true,
    "bInfo": true,
    "responsive": true, 
    'columnDefs': [
      { "orderable": false, "targets": [2, 3] },
      { "visible": false, "targets": 0 }
    ],
    'order': [[1, 'asc']]
  });

  var devicedetailtablegroups = $('#device-detail-table-groups').DataTable({
    "searching": true,
    "lengthChange": true,
    "paging": true,
    "bInfo": true,
    "responsive": true, 
    'columnDefs': [
      { "orderable": false, "targets": [2, 3] },
      { "visible": false, "targets": 0 }
    ],
    'order': [[1, 'asc']]
  });

  var devicedetailtableapprepo = $('#device-detail-table-apprepo').DataTable({
    "searching": true,
    "lengthChange": true,
    "paging": true,
    "bInfo": true,
    "responsive": true, 
    'columnDefs': [
      { "orderable": false, "targets": [5,7] },
      { "responsivePriority": 1, targets: 0 },
      { "responsivePriority": 1, targets: -1},
      { "responsivePriority": 1, targets: 1 },
      { "responsivePriority": 1, targets: 7 },
      { "responsivePriority": 5000, targets: 3},
      { "responsivePriority": 5000, targets: 4},
      { "responsivePriority": 10000, targets: 2},
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

//Statistics
(function(window, undefined) {
    'use strict';
  
  $(document).ready(function () {

    var $primary = '#ED6D05';
    var $primary100 = '#ed6d05';
    var $primary80 = '#fb913b';
    var $primary60 = '#ffbf00';
    var $primary40 = '#fdd55c';
    var $primary20 = '#ffe495';
    var $primary10 = '#fff0c5';
    var $secondary = '#F49800';
    var $success = '#39DA8A';
    var $danger = '#FF5B5C';
    var $warning = '#FDAC41';
    var $info = '#00CFDD';
    var $label_color = '#304156';
    var $danger_light = '#FFDEDE';
    var $gray_light = '#828D99';
    var $bg_light = "#f2f4f4";

    // Global app usage -  Radial Statistics
    // -----------------------
    var multiRadialOptions = {
      chart: {
        height: 300,
        type: "radialBar",
      },
      colors: [$primary, $warning, $danger],
      series: [75, 80, 85],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "55%"
          },
          track: {
            margin: 10,
            background: '#fff',
          },
          dataLabels: {
            name: {
              fontSize: '15px',
              color: [$gray_light],
              fontFamily: "IBM Plex Sans",
              offsetY: 25,
            },
            value: {
              fontSize: '32px',
              fontFamily: "Rubik",
              offsetY: -15,
            },
            total: {
              show: true,
              label: 'Instagram',
              color: $gray_light
            }
          }
        }
      },
      stroke: {
        lineCap: "round",
      },
      labels: ['Comments', 'Sharing', 'Replies']
    };

    var multiradialChart = new ApexCharts(
      document.querySelector("#radial-chart-multi"),
      multiRadialOptions
    );
    multiradialChart.render();

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
      colors: [$secondary],
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


    // Notification - List Group
    //--------------------------
    $('.readable-mark-icon').on('click', function () {
      $(this).addClass('mark-as-read').attr('data-original-title', 'Mark as Unread').children('i').removeClass('text-light-primary').addClass('text-light-secondary');
      $('.readable-mark-icon.mark-as-read').siblings('.list-left').find('.list-title').addClass('text-bold-500');
    });
    // Default mark-as-read shown
    $('.readable-mark-icon.mark-as-read').siblings('.list-left').find('.list-title').addClass('text-bold-500');

  
    // Perfect Scrollbar
    //------------------
    // Widget - User Details -Perfect Scrollbar X
    if ($('.widget-user-details .table-responsive').length > 0) {
      var user_details = new PerfectScrollbar('.widget-user-details .table-responsive');
    }

    // Widget - Card Overlay - Perfect Scrollbar X - on initial level
    if ($('.widget-overlay-content .table-responsive').length > 0) {
      var card_overlay = new PerfectScrollbar('.widget-overlay-content .tab-pane.active .table-responsive');
    }

    // Widget - Card Overlay - Perfect Scrollbar X - on active tab-pane
    $('.widget-overlay-content a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var card_overlay = new PerfectScrollbar('.widget-overlay-content .tab-pane.active .table-responsive');
    })

    // Widget - timeline perfect scrollbar initialization
    if ($(".widget-timeline").length > 0) {
      var widget_chat_scroll = new PerfectScrollbar(".widget-timeline", { wheelPropagation: false });
    }
    // Widget - chat area perfect scrollbar initialization
    if ($(".widget-chat-scroll").length > 0) {
      var widget_chat_scroll = new PerfectScrollbar(".widget-chat-scroll", { wheelPropagation: false });
    }
    // Widget - earnings perfect scrollbar initialization
    if ($(".widget-earnings-scroll").length > 0) {
      var widget_earnings = new PerfectScrollbar(".widget-earnings-scroll",
        // horizontal scroll with mouse wheel
        {
          suppressScrollY: true,
          useBothWheelAxes: true
        });
    }

  // Radial Followers Chart - Primary
  // --------------------------------
  var radialPrimaryoptions = {
    chart: {
      height: 250,
      type: "radialBar"
    },
    series: [100],
    colors: [$info],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        size: 70,
        hollow: {
          size: "70%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false
          },
          value: {
            colors: [$label_color],
            fontSize: "20px",
            show: true,
            offsetY: 8,
            fontFamily: "Rubik"
          }
        }
      }
    },
    stroke: {
      lineCap: "round",
    }
  };
  var radialPrimaryChart = new ApexCharts(
    document.querySelector("#radial-chart-primary"),
    radialPrimaryoptions
  );

  radialPrimaryChart.render();


  });

})(window);
