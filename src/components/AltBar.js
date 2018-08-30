import {Bar} from 'react-chartjs-2';

class AltBar extends Bar {
    getRuler = function() {
      var me = this;
      var scale = me.getIndexScale();
      var options = scale.options;
      var stackCount = me.getStackCount();
      var fullSize = scale.isHorizontal()? scale.width : scale.height;
      var tickSize = fullSize / scale.ticks.length;
      var categorySize = tickSize * options.categoryPercentage;
      var fullBarSize = categorySize / stackCount;
      var barSize = fullBarSize * options.barPercentage;

      barSize = Math.min(
        helpers.getValueOrDefault(options.barThickness, barSize),
        helpers.getValueOrDefault(options.maxBarThickness, Infinity));

      return {
        fullSize: fullSize,
        stackCount: stackCount,
        tickSize: tickSize,
        categorySize: categorySize,
        categorySpacing: tickSize - categorySize,
        fullBarSize: fullBarSize,
        barSize: barSize,
        barSpacing: fullBarSize - barSize,
        scale: scale
      };
    };

    calculateBarIndexPixels = function(datasetIndex, index, ruler) {
      var me = this;
      var scale = ruler.scale;
      var options = scale.options;
      var isCombo = me.chart.isCombo;
      var stackIndex = me.getStackIndex(datasetIndex);
      var base = scale.getPixelForValue(null, index, datasetIndex, isCombo);
      var size = ruler.barSize;

      var dataset = me.chart.data.datasets[datasetIndex];
      if(dataset.weights) {
        var total = dataset.weights.reduce((m, x) => m + x, 0);
        var perc = dataset.weights[index] / total;
        var offset = 0;
        for(var i = 0; i < index; i++) {
          offset += dataset.weights[i] / total;
        }
        var pixelOffset = Math.round(ruler.fullSize * offset);
        var base = scale.isHorizontal() ? scale.left : scale.top;
        base += pixelOffset;

        size = Math.round(ruler.fullSize * perc);
        size -= ruler.categorySpacing;
        size -= ruler.barSpacing;
      }

      base -= isCombo? ruler.tickSize / 2 : 0;
      base += ruler.fullBarSize * stackIndex;
      base += ruler.categorySpacing / 2;
      base += ruler.barSpacing / 2;

      return {
        size: size,
        base: base,
        head: base + size,
        center: base + size / 2
      };
    }
}

export default AltBar