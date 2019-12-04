(function(window, undefined) {
  'use strict';
  
  // Dashboard
  $(document).ready(function () {

    var $primary = '#ED6D05';
    var $primary100 = '#ed6d05';
    var $primary80 = '#fb913b';
    var $primary60 = '#ffbf00';
    var $primary40 = '#fdd55c';
    var $primary20 = '#ffe495';
    var $primary10 = '#fff0c5';
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

  // Donut Chart Spending
  // ---------------------
  var donustSpendingChart = {
    chart: {
      width: 270,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    series: [44, 55, 13],
    labels: ["Public Transport", "Cafe & Resturants", "Business Projects"],
    stroke: {
      width: 0
    },
    colors: [$danger, $success, $warning, $primary],
    plotOptions: {
      pie: {
        donut: {
          size: '95%',
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Rubik',
              color: $gray_light,
              offsetY: 30
            },
            value: {
              show: true,
              fontSize: '32px',
              fontFamily: 'Rubik',
              color: undefined,
              offsetY: -20,
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: 'Total',
              color: $gray_light,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce(function (a, b) {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    },
    legend: {
      show: false
    }
  }

  var donustChartSpending = new ApexCharts(
    document.querySelector("#donut-chart-spending"),
    donustSpendingChart
  );

  donustChartSpending.render();


    // Activity - Heat Map Chart
    // -----------------------------------
    function generateData(count, yrange) {
      var i = 0,
        series = [];
      while (i < count) {
        var x = 'w' + (i + 1).toString(),
          y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
    var heatChartOptions = {
      chart: {
        height: 280,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        heatmap: {
          enableShades: false,
          radius: 5,
          colorScale: {
            ranges: [{
              from: 0,
              to: 10,
              color: $primary10
            },
            {
              from: 11,
              to: 20,
              color: $primary20
            },
            {
              from: 21,
              to: 30,
              color: $primary40
            },
            {
              from: 31,
              to: 40,
              color: $primary60
            },
            {
              from: 41,
              to: 50,
              color: $primary80
            },
            {
              from: 51,
              to: 60,
              color: $primary100

            }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Sunday',
        data: generateData(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: 'Monday',
        data: generateData(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: 'Tuesday',
        data: generateData(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: 'Wednesday',
        data: generateData(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: 'Thursday',
        data: generateData(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: 'Friday',
        data: generateData(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: 'Saturday',
        data: generateData(24, {
          min: 0,
          max: 60
        })
      }],
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      legend: {
        horizontalAlign: 'left', 
      },
      yaxis: {
        labels: {
          style: {
            color: $gray_light,
            fontSize: '14px'
          }
        }
      }
    }
    var heatChart = new ApexCharts(
      document.querySelector("#sales-heatmap-chart"),
      heatChartOptions);
    heatChart.render();

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



  });

})(window);

$(window).on("load", function() {
  var $primary = '#ED6D05';
  var y = {
      chart: {
          height: 40,
          type: "line",
          toolbar: {
              show: !1
          },
          sparkline: {
              enabled: !0
          }
      },
      grid: {
          show: !1,
          padding: {
              bottom: 5,
              top: 5,
              left: 10,
              right: 0
          }
      },
      colors: $primary,
      dataLabels: {
          enabled: !1
      },
      stroke: {
          width: 3,
          curve: "smooth"
      },
      series: [{
          data: [30, 60, 30, 80, 20, 70]
      }],
      fill: {
          type: "gradient",
          gradient: {
              shade: "dark",
              type: "horizontal",
              gradientToColors: $primary,
              opacityFrom: 0,
              opacityTo: .9,
              stops: [0, 30, 70, 100]
          }
      },
      xaxis: {
          show: !1,
          labels: {
              show: !1
          },
          axisBorder: {
              show: !1
          }
      },
      yaxis: {
          show: !1
      }
  };
  new ApexCharts(document.querySelector("#warning-line-chart"), y).render();
});