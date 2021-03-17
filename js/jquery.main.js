jQuery(function() {
	jQuery('.table-sorter').frequencyTableSorter({
		onInit: function(self) {
			var frequencySortSelect = jQuery('#frequency_sort');

			$('#reset_sort').on('click', function() {
				frequencySortSelect.prop('selectedIndex', 0);
				self.resetTableSorting();
			});

			$('#reset_sort_hard').on('click', function() {
				frequencySortSelect.prop('selectedIndex', 0);
				self.hardResetTableSorting();
			});

			frequencySortSelect.on('change', function(e) {
				self.hardResetTableSorting();
				var headerCell = self.table.find('th[data-frequency="'+this.value+'"]');
				var sort = [ [headerCell.index(), 1] ];
				headerCell.addClass(self.options.frequencySortingClass);
				self.table.trigger('updateAll', [ true ]).trigger('sorton', [ sort ] );
			});
		}
	});
});

/*
 * jQuery FrequencyTableSorter plugin
 */
;(function($){
	function FrequencyTableSorter(options) {
		this.options = $.extend({
			frequencySortingClass: 'sorter-frequencySort',
			multiSelect: '[type="checkbox"]'
		}, options);
		this.init();
	}
	FrequencyTableSorter.prototype = {
		init: function() {
			if(this.options.table) {
				this.findElements();
				this.makeCallback('onInit', this);
			}
		},
		findElements: function() {
			var self = this;
			this.table = $(this.options.table);
			this.originHtml = this.table.html();
			this.lastChecked = null;
			this.createFrequencyDataMap();
			this.addCustomSorting();
			this.table.tablesorter();
			this.table.on('click', this.options.multiSelect, function(e) {
				self.multiSelect(e, this);
			});
		},
		resetTableSorting: function() {
			var self = this;
			this.table.trigger('sortReset', [ self.makeCallback('onSortReset', self) ] );
		},
		hardResetTableSorting: function() {
			var self = this;
			self.table.trigger('destroy').html(self.originHtml).tablesorter();
		},
		addCustomSorting: function() {
			var self = this;
			$.tablesorter.addParser({
				id: 'frequencySort',
				is: function() {
					return false;
				},
				format: function(cellText, table, cell, columnIndex) {
					return self.frequencyDataMap[columnIndex][cellText];
				},
				type: 'numeric',
			});
		},
		getTableCellsByIndex: function(index) {
			return this.table.find('td:nth-child('+(index+1)+')');
		},
		getTableCellsValuesArray: function(items) {
			return items.reduce((result, item) => {
				const itemText = item.innerText;
				const existItem = result.find(({ text }) => text === itemText);
				if (existItem) {
					existItem.quantity++;
				} else {
					result.push({
						text: itemText,
						quantity: 1,
					});
				}
				return result;
			}, []);
		},
		getTableCellsValuesMap: function(items) {
			return items.reduce((result, item, index) => {
				return {
					...result,
					[item.text]: index,
				};
			}, {});
		},
		sortByValues: function(itemA, itemB) {
			if (itemA.quantity < itemB.quantity ){
				return 1;
			}
			if (itemA.quantity > itemB.quantity){
				return -1;
			}
			return 0;
		},
		createFrequencyDataMap: function() {
			var self = this;
			var tableDataMap = {};
			var headerCells = this.table.find('th');
			headerCells.filter('th:not(".sorter-false")').each(function() {
				var headerCell = $(this);
				var columnIndex = headerCells.index(headerCell);
				var items = self.getTableCellsByIndex(columnIndex);
				var values = self.getTableCellsValuesArray(Array.from(items));
				values.sort(self.sortByValues);
				tableDataMap[columnIndex] = self.getTableCellsValuesMap(values.reverse());
			});
			this.frequencyDataMap = tableDataMap;
		},
		multiSelect: function(e, _this) {
			if (!this.lastChecked) {
				this.lastChecked = _this;
				return;
			}
			if (e.shiftKey) {
				var multiSelectControls = this.table.find(this.options.multiSelect);
				var start = multiSelectControls.index(_this);
				var end = multiSelectControls.index(this.lastChecked);
				multiSelectControls.slice(
					Math.min(start,end),
					Math.max(start,end)+ 1
				).prop('checked', this.lastChecked.checked);
			}
			this.lastChecked = _this;
		},
		makeCallback: function(name) {
			if(typeof this.options[name] === 'function') {
				var args = Array.prototype.slice.call(arguments);
				args.shift();
				this.options[name].apply(this, args);
			}
		},
		destroy: function() {
			this.table.trigger('destroy');
			this.makeCallback('onDestroy', this);
			this.table.removeData('FrequencyTableSorter');
		}
	};

	// jquery plugin
	$.fn.frequencyTableSorter = function(opt){
		return this.each(function(){
			$(this).data('FrequencyTableSorter', new FrequencyTableSorter($.extend(opt,{table:this})));
		});
	};

	// adding custom sorting type
}(jQuery));
