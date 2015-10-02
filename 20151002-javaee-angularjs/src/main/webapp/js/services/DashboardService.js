'use strict';

mySpeedyFleet.factory('DashboardService', function(LabelsService, $filter) {
  return {
    arrayOfCurrency : function(data) {
      var lb = data[0];
      if (data.length > 0) {
        var dataLabels = $.makeArray($(lb).map(function(n) {
          return $filter('caCurrency')(this);
        }));
        return dataLabels;
      }
    },
    pieOptions : function() {
      return {
        seriesDefaults : {
          renderer : jQuery.jqplot.PieRenderer,
          rendererOptions : {
            showDataLabels : true
          }
        },
        legend : {
          show : true,
          location : 'e',
        },
        grid : {
          background : 'transparent',
          borderWidth : 0,
          shadow : false
        },
        seriesColors : [ "#5da423", "#c60f13", "#2ba6cb", "#8A2BE2", "#ff6c3c", "orange" ]
      };
    },
    pieClickableStyle : function(chartCssId) {
      $(chartCssId).bind('jqplotDataMouseOver', function(ev, seriesIndex, pointIndex, data) {
        $(this).css('cursor', 'pointer');
      });
    },
    barOptions : function(datasLabels) {
      return {
        animate : true,
        seriesDefaults : {
          renderer : $.jqplot.BarRenderer,
          pointLabels : {
            show : true,
            labels : datasLabels
          }
        },
        axes : {
          xaxis : {
            renderer : $.jqplot.CategoryAxisRenderer,
            ticks : [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aoû', 'Sep', 'Oct', 'Nov', 'Dec' ]
          },
          yaxis : {
            tickOptions : {
              formatString : "%d€"
            }
          }
        },
        grid : {
          background : 'transparent',
          borderWidth : 0,
          shadow : false
        }
      };
    }
  };
});