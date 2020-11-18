'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  Vue.chartist = require('chartist');
  Vue.prototype.$chartist = require('chartist');

  Vue.component('Chartist', {
    props: {
      ratio: {
        type: String,
        default: 'ct-square'
      },
      data: {
        type: Object,
        default: function _default() {
          return {
            series: [],
            labels: []
          };
        }
      },
      options: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      type: {
        type: String,
        required: true,
        validator: function validator(val) {
          return val === 'Pie' || val === 'Line' || val === 'Bar';
        }
      },
      eventHandlers: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      responsiveOptions: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      noData: {
        type: Object,
        default: function _default() {
          return {
            message: '',
            class: 'ct-nodata'
          };
        }
      }
    },
    data: function data() {
      return {
        chart: null,
        message: ''
      };
    },

    watch: {
      ratio: 'redraw',
      options: { handler: 'redraw', deep: true },
      responsiveOptions: { handler: 'redraw', deep: true },
      data: { handler: 'redraw', deep: true },
      type: 'draw',
      eventHandlers: 'resetEventHandlers',
      hasNoData: {
        immediate: true,
        handler: function handler(val) {
          if (val) {
            this.setNoData();
          } else {
            this.clear();
          }
        }
      }
    },
    mounted: function mounted() {
      this.draw();
    },

    computed: {
      hasNoData: function hasNoData() {
        return !this.data || !this.data.series || this.data.series.length < 1 || this.type !== 'Pie' && !this.options.distributeSeries && this.data.series.every(function (series) {
          if (Array.isArray(series)) {
            return !series.length;
          }
          return !series.data.length;
        });
      },
      noDataOptions: function noDataOptions() {
        return {
          message: options.messageNoData || this.noData.message,
          class: options.classNoData || this.noData.class
        };
      }
    },
    methods: {
      clear: function clear() {
        this.message = '';
      },
      draw: function draw() {
        this.chart = this.hasNoData ? null : new this.$chartist[this.type](this.$refs.chart, this.data, this.options, this.responsiveOptions);
        this.setEventHandlers();
      },
      redraw: function redraw() {
        this.chart ? this.chart.update(this.data, this.options) : this.draw();
      },
      resetEventHandlers: function resetEventHandlers(eventHandlers, oldEventHandler) {
        if (!this.chart) {
          return;
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oldEventHandler[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            this.chart.off(item.event, item.fn);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = eventHandlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _item = _step2.value;

            this.chart.on(_item.event, _item.fn);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      },
      setEventHandlers: function setEventHandlers() {
        if (this.chart && this.eventHandlers) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.eventHandlers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var item = _step3.value;

              this.chart.on(item.event, item.fn);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      },
      setNoData: function setNoData() {
        this.message = this.noDataOptions.message;
      }
    },
    render: function render(h) {
      var children = this.message || this.$slots.default || [];

      return h('div', {
        ref: 'chart',
        'class': [this.ratio, _defineProperty({}, this.noDataOptions.class, this.hasNoData)]
      }, children);
    }
  });
};
