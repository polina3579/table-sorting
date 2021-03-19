jQuery(function() {
	var tableData=`
	<tr>
		<td>168406033111</td>
		<td>2019-08-20</td>
		<td>2020-04-30</td>
		<td>7B6AB29B.28A8.C5B2.C58D</td>
		<td>66590B5F.7329.3319.BA42</td>
		<td>mauris@Phasellusornare.net</td>
		<td>sw4s6usrj</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>161805012851</td>
		<td>2019-08-20</td>
		<td>2020-04-30</td>
		<td>857ED324.A049.AAE4.1E6A</td>
		<td>34D64B17.0365.F35F.7764</td>
		<td>purus@nonsollicitudina.ca</td>
		<td>w6uws5jjh</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>165907176910</td>
		<td>2019-08-20</td>
		<td>2020-04-30</td>
		<td>341585E8.8F42.E736.5C85</td>
		<td>EFB5F017.1F57.1C37.1F9C</td>
		<td>elit.Aliquam@in.edu</td>
		<td>w56he7jdy</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>161010304572</td>
		<td>2020-01-25</td>
		<td>2022-01-23</td>
		<td>525F5CB7.6AC6.455F.D173</td>
		<td>7F486E61.E334.390D.1C68</td>
		<td>mi.Duis@Nullaegetmetus.edu</td>
		<td>45y6ye56ys</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>162207086485</td>
		<td>2020-09-08</td>
		<td>2018-08-08</td>
		<td>5F1215B0.8CBD.E0EA.460C</td>
		<td>7F486E61.E334.390D.1C68</td>
		<td>rutrum@scelerisqueloremipsum.edu</td>
		<td>w46ywhths</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>160610119984</td>
		<td>2022-02-05</td>
		<td>2017-05-14</td>
		<td>BA8A3379.A761.B037.FE33</td>
		<td>7F486E61.E334.390D.1C68</td>
		<td>montes.nascetur.ridiculus@etnetus.co.uk</td>
		<td>45y6ye56ys</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>167709033737</td>
		<td>2019-09-24</td>
		<td>2017-07-29</td>
		<td>52B8F0EB.62B0.A1CB.87A1</td>
		<td>E38D828A.E008.B950.A71C</td>
		<td>cubilia@atiaculisquis.edu</td>
		<td>zdfbsr4</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>167802154620</td>
		<td>2020-01-15</td>
		<td>2017-07-29</td>
		<td>86A18696.2E0E.2C8E.6D6E</td>
		<td>0BED2354.E542.1B58.C0DD</td>
		<td>mattis.Integer.eu@idanteNunc.co.uk</td>
		<td>zdfbsytbgf</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>165511217662</td>
		<td>2020-08-12</td>
		<td>2017-07-29</td>
		<td>34D23509.3DB5.3891.95BB</td>
		<td>09D795F2.F30F.18D3.C68B</td>
		<td>iaculis@nuncestmollis.edu</td>
		<td>saergbzgbc</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>163205280591</td>
		<td>2017-05-11</td>
		<td>2017-05-02</td>
		<td>F253F730.B38B.2EC2.5879</td>
		<td>5626EE70.110C.4678.66C3</td>
		<td>velit@nislelementum.ca</td>
		<td>w5gsfgbxvb</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>164005278140</td>
		<td>2021-09-04</td>
		<td>2017-07-29</td>
		<td>025BF0A6.1B53.2847.4952</td>
		<td>E97549E5.4F39.D290.9DDD</td>
		<td>Sed@nuncidenim.org</td>
		<td>wshtbsfgnxg</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>169604098393</td>
		<td>2021-09-07</td>
		<td>2020-08-09</td>
		<td>56583A8A.8524.9F00.18BD</td>
		<td>FD3FC5AF.049F.3078.851C</td>
		<td>urna.convallis@Duisgravida.net</td>
		<td>e7irukyjdhg</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>169004156783</td>
		<td>2020-11-17</td>
		<td>2019-02-15</td>
		<td>C3429B2F.A5CA.123F.ACBF</td>
		<td>B651A9FC.B2CC.F06B.74F4</td>
		<td>et.malesuada.fames@nuncestmollis.co.uk</td>
		<td>a34w4hsth</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>169312158182</td>
		<td>2022-03-04</td>
		<td>2021-14-24</td>
		<td>30A18815.AB24.0F79.9B0E</td>
		<td>EA677F2C.11F0.D920.80D5</td>
		<td>lorem@at.org</td>
		<td>5tadgsfg</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>163711083711</td>
		<td>2019-04-25</td>
		<td>2020-06-23</td>
		<td>8E512BF1.553D.813A.0F44</td>
		<td>CB62CF5C.556D.CCF5.549F</td>
		<td>nunc.interdum@pharetra.net</td>
		<td>w45hwsydhg</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>167305135530</td>
		<td>2020-06-07</td>
		<td>2022-02-28</td>
		<td>4B4110E6.CD0C.DC69.A3E3</td>
		<td>3620438E.B9F9.B7A1.C12D</td>
		<td>non@Nullamvelit.com</td>
		<td>7+13541</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>168103202720</td>
		<td>2018-12-05</td>
		<td>2020-15-25</td>
		<td>806DCF6E.1EA7.5113.E2E0</td>
		<td>CFBE11F0.4C08.BD77.9438</td>
		<td>non.magna.Nam@QuisquevariusNam.net</td>
		<td>1-2fhaourgf</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>169706230464</td>
		<td>2018-13-23</td>
		<td>2020-17-27</td>
		<td>59DD9565.F982.24A6.7B65</td>
		<td>EF86EA5E.6E1C.774C.DAFD</td>
		<td>neque.Sed.eget@orciinconsequat.net</td>
		<td>w459thg9uerg</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>168406033111</td>
		<td>2019-08-20</td>
		<td>2020-04-30</td>
		<td>7B6AB29B.28A8.C5B2.C58D</td>
		<td>66590B5F.7329.3319.BA42</td>
		<td>mauris@Phasellusornare.net</td>
		<td>adg345345</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>161805012851</td>
		<td>2019-01-28</td>
		<td>2019-03-10</td>
		<td>857ED324.A049.AAE4.1E6A</td>
		<td>34D64B17.0365.F35F.7764</td>
		<td>purus@nonsollicitudina.ca</td>
		<td>adg345345</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>165907176910</td>
		<td>2020-01-18</td>
		<td>2022-01-02</td>
		<td>857ED324.A049.AAE4.1E6A</td>
		<td>EFB5F017.1F57.1C37.1F9C</td>
		<td>elit.Aliquam@in.edu</td>
		<td>95687uj0prtg</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>164005278140</td>
		<td>2021-09-04</td>
		<td>2017-05-02</td>
		<td>857ED324.A049.AAE4.1E6A</td>
		<td>E97549E5.4F39.D290.9DDD</td>
		<td>urna.convallis@Duisgravida.net</td>
		<td>95687uj0prtg</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>169604098393</td>
		<td>2021-09-07</td>
		<td>2020-08-09</td>
		<td>56583A8A.8524.9F00.18BD</td>
		<td>FD3FC5AF.049F.3078.851C</td>
		<td>urna.convallis@Duisgravida.net</td>
		<td>adg345345</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>012851161805</td>
		<td>2018-08-20</td>
		<td>2018-04-30</td>
		<td>192.A049.AAE4.1E6A</td>
		<td>127.0365.F35F.7764</td>
		<td>purou@ssnsollicitudina.ca</td>
		<td>ws5jjhw6u</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>176910165907</td>
		<td>2018-08-20</td>
		<td>2018-04-30</td>
		<td>192.8F42.E736.5C85</td>
		<td>127.1F57.1C37.1F9C</td>
		<td>elit.Aliquna@mm.edu</td>
		<td>he7jdyw56</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>304572161010</td>
		<td>2019-01-25</td>
		<td>2022-01-23</td>
		<td>192.6AC6.455F.D173</td>
		<td>127.E334.390D.1C68</td>
		<td>mi.Duui@ssllaegetmetus.edu</td>
		<td>6ye56ys45y</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>086485162207</td>
		<td>2019-09-08</td>
		<td>2018-08-08</td>
		<td>192.8CBD.E0EA.460C</td>
		<td>127.E334.390D.1C68</td>
		<td>rutrcu@mmelerisqueloremipsum.edu</td>
		<td>ywhthsw46</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>119984160610</td>
		<td>2022-02-05</td>
		<td>2017-05-14</td>
		<td>192.A761.B037.FE33</td>
		<td>127.E334.390D.1C68</td>
		<td>montes.nascetur.ridicultu@ssnetus.co.uk</td>
		<td>6ye56ys45y</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>033737167709</td>
		<td>2018-09-24</td>
		<td>2017-07-29</td>
		<td>192.62B0.A1CB.87A1</td>
		<td>127.E008.B950.A71C</td>
		<td>cubilti@aaiaculisquis.edu</td>
		<td>bsr4zdf</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>154620167802</td>
		<td>2019-01-15</td>
		<td>2017-07-29</td>
		<td>192.2E0E.2C8E.6D6E</td>
		<td>127.E542.1B58.C0DD</td>
		<td>mattis.Integer.de@uuanteNunc.co.uk</td>
		<td>bsytbgfzdf</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>217662165511</td>
		<td>2019-08-12</td>
		<td>2017-07-29</td>
		<td>192.3DB5.3891.95BB</td>
		<td>127.F30F.18D3.C68B</td>
		<td>iacului@ssncestmollis.edu</td>
		<td>rgbzgbcsae</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>280591163205</td>
		<td>2017-05-11</td>
		<td>2017-05-02</td>
		<td>192.B38B.2EC2.5879</td>
		<td>127.110C.4678.66C3</td>
		<td>velii@ttslelementum.ca</td>
		<td>sfgbxvbw5g</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>278140164005</td>
		<td>2021-09-04</td>
		<td>2017-07-29</td>
		<td>192.1B53.2847.4952</td>
		<td>127.4F39.D290.9DDD</td>
		<td>Sue@ddncidenim.org</td>
		<td>tbsfgnxgwsh</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>098393169604</td>
		<td>2021-09-07</td>
		<td>2018-08-09</td>
		<td>192.8524.9F00.18BD</td>
		<td>127.049F.3078.851C</td>
		<td>urna.convallui@ssisgravida.net</td>
		<td>rukyjdhge7i</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>156783169004</td>
		<td>2019-11-17</td>
		<td>2017-02-15</td>
		<td>192.A5CA.123F.ACBF</td>
		<td>127.B2CC.F06B.74F4</td>
		<td>et.malesuada.famue@ssncestmollis.co.uk</td>
		<td>w4hstha34</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>158182169312</td>
		<td>2022-03-04</td>
		<td>2021-14-24</td>
		<td>192.AB24.0F79.9B0E</td>
		<td>127.11F0.D920.80D5</td>
		<td>lorte@mm.org</td>
		<td>dgsfg5ta</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>083711163711</td>
		<td>2018-04-25</td>
		<td>2018-06-23</td>
		<td>192.553D.813A.0F44</td>
		<td>127.556D.CCF5.549F</td>
		<td>nunc.interdhu@mmaretra.net</td>
		<td>hwsydhgw45</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>135530167305</td>
		<td>2019-06-07</td>
		<td>2022-02-28</td>
		<td>192.CD0C.DC69.A3E3</td>
		<td>127.B9F9.B7A1.C12D</td>
		<td>nuo@nnllamvelit.com</td>
		<td>35417+1</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>202720168103</td>
		<td>2017-12-05</td>
		<td>2018-15-25</td>
		<td>192.1EA7.5113.E2E0</td>
		<td>127.4C08.BD77.9438</td>
		<td>non.magna.Nua@mmisquevariusNam.net</td>
		<td>fhaourgf1-2</td>
	<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>230464169706</td>
		<td>2017-13-23</td>
		<td>2018-17-27</td>
		<td>192.F982.24A6.7B65</td>
		<td>127.6E1C.774C.DAFD</td>
		<td>neque.Sed.egre@ttciinconsequat.net</td>
		<td>9thg9uergw45</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>033111168406</td>
		<td>2019-08-20</td>
		<td>2020-04-30</td>
		<td>192.28A8.C5B2.C58D</td>
		<td>127.7329.3319.BA42</td>
		<td>maurhi@ssasellusornare.net</td>
		<td>345345adg</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>012851161805</td>
		<td>2019-01-28</td>
		<td>2019-03-10</td>
		<td>192.A049.AAE4.1E6A</td>
		<td>127.0365.F35F.7764</td>
		<td>purou@ssnsollicitudina.ca</td>
		<td>345345adg</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>176910165907</td>
		<td>2020-01-18</td>
		<td>2022-01-02</td>
		<td>192.A049.AAE4.1E6A</td>
		<td>127.1F57.1C37.1F9C</td>
		<td>elit.Aliquna@mm.edu</td>
		<td>87uj0prtg956</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>278140164005</td>
		<td>2021-09-04</td>
		<td>2017-05-02</td>
		<td>192.A049.AAE4.1E6A</td>
		<td>127.4F39.D290.9DDD</td>
		<td>urna.convallui@ssisgravida.net</td>
		<td>87uj0prtg956</td>
		<td><input type="checkbox"></td>
	</tr>
	<tr>
		<td>098393169604</td>
		<td>2021-09-07</td>
		<td>2020-08-09</td>
		<td>192.8524.9F00.18BD</td>
		<td>127.049F.3078.851C</td>
		<td>urna.convallui@ssisgravida.net</td>
		<td>345345adg</td>
		<td><input type="checkbox"></td>
	</tr>
	`;
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

			$('#append_data').on('click', function() {
				var newTable = jQuery(document.createElement('table')).html(self.originHtml);
				newTable.find('tbody').append(tableData)
				self.originHtml = newTable.html();
				newTable.remove();
				self.table.find('tbody').append(tableData);
				self.createFrequencyDataMap();
				self.addCustomSorting();
				self.table.trigger('update');
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
