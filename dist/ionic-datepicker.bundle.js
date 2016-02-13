!function(n,e){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=e);else try{i.innerHTML=e}catch(t){i.innerText=e}}(document,".ionic_datepicker .selected_date_full {\n  color: #387EF5;\n  font-weight: bold;\n  text-align: center;\n  padding-bottom: 5px;\n}\n\n.ionic_datepicker .color_blue {\n  color: rgb(56, 126, 245);\n}\n\n.ionic_datepicker .bg_color_blue {\n  background-color: rgb(56, 126, 245);\n}\n\n.ionic_datepicker .date_col:hover {\n  background-color: rgba(56, 126, 245, 0.5);\n  cursor: pointer;\n}\n\n.ionic_datepicker .date_col:active {\n  background-color: rgba(56, 126, 245, 1);\n  cursor: pointer;\n}\n\n.ionic_datepicker .no_padding {\n  padding: 0;\n}\n\n.ionic_datepicker .date_cell {\n  padding: 5px;\n}\n\n.ionic_datepicker .date_selected {\n  background-color: rgba(56, 126, 245, 1);\n}\n\n.ionic_datepicker .today {\n  background-color: rgba(186, 186, 186, 1);\n}\n\n.ionic_datepicker .pointer_events_none {\n  pointer-events: none !important;\n  color: #AAAAAA;\n}\n\n.ionic_datepicker .select_section {\n  padding: 0;\n}\n\n.ionic_datepicker .select_section label {\n  padding: 12px;\n}\n\n.ionic_datepicker .select_section select {\n  font-size: 12px;\n  font-weight: bold;\n  padding: 2px 10px;\n  direction: ltr;\n  left: 0;\n  width: 100%;\n  max-width: 100%;\n}\n\n.ionic_datepicker .select_section .item-select:after {\n  right: 4px;\n  border-top: 4px solid;\n  border-right: 4px solid rgba(0, 0, 0, 0);\n  border-left: 4px solid rgba(0, 0, 0, 0);\n}\n\n.ionic_datepicker .left_arrow {\n  direction: rtl;\n}\n\n.ionic_datepicker .right_arrow {\n\n}\n.ionic_datepicker_modal_content .ionic_datepicker .selected_date_full {\n  font-size: 20px;\n}\n.ionic_datepicker .font_22px {\n  font-size: 22px;\n}\n.ionic_datepicker_modal_content {\n  padding-top: 10%;\n}\n.ionic_datepicker_modal_content .ionic_datepicker .selected_date_full{\n  padding: 20px;\n}\n.ionic_datepicker .cal-button {\n    padding: 0px !important;\n    font-size: 14px !important;\n}\n.picker-body {\n    height: inherit;\n}\n\n.picker-body .popup-body {\n    overflow: inherit !important;\n}\n@media (min-width: 680px) {\n  .ionic_datepicker_modal_content {\n    padding-top: 0;\n  }\n  .ionic_datepicker_modal_content .ionic_datepicker .selected_date_full {\n    font-size: inherit;\n  }\n  .ionic_datepicker_modal_content .ionic_datepicker .selected_date_full{\n    padding: 10px 0 0 0;\n  }\n}");
(function(module) {
try {
  module = angular.module('ionic-datepicker.templates');
} catch (e) {
  module = angular.module('ionic-datepicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('ionic-datepicker-modal.html',
    '<ion-modal-view class=ionic_datepicker_modal><ion-header-bar ng-class=modalHeaderColor><h1 class=title>{{titleLabel}}</h1></ion-header-bar><ion-content class=ionic_datepicker_modal_content><div class=ionic_datepicker><div class=selected_date_full>{{selectedDateFull | date:dateFormat}}</div><div class=row><div class="col col-10 left_arrow" ng-click="!prevMonthDisable && prevMonth()" ng-class="{\'pointer_events_none\':prevMonthDisable}"><button class="button-clear font_22px"><i class="icon ion-chevron-left" ng-class="{\'color_blue\':(!prevMonthDisable || (!enableDatesFrom.isSet))}"></i></button></div><div class="col col-80 drop_down"><div class="row select_section" style="margin-top: 5px;"><label class="item item-input item-select col col-50 month_select"><select ng-model=currentMonth ng-change=monthChanged(currentMonth) class=month_select ng-options="month as month for month in monthsList" ng-selected="month == currentMonthSelected"></select></label> <label class="item item-input item-select col col-50 year_select"><select ng-model=currentYear ng-change=yearChanged(currentYear) class=year_select ng-options="year as year for year in yearsList" ng-selected="year == year"></select></label></div></div><div class="col col-10 right_arrow" ng-click="!nextMonthDisable && nextMonth()" ng-class="{\'pointer_events_none\':nextMonthDisable}"><button class="button-clear font_22px"><i class="icon ion-chevron-right" ng-class="{\'color_blue\':(!nextMonthDisable || (!enableDatesTo.isSet))}"></i></button></div></div><div class=calendar_grid><div class=row><div class=col ng-repeat="weekName in weekNames track by $index" style="font-weight: bold" ng-bind=weekName></div></div><div><div class=row ng-repeat="row in rows track by $index" style="text-align: center;"><div class="col no_padding date_col" ng-repeat="col in cols track by $index" ng-class="{\'date_selected\': (dayList[row + $index].dateString === selctedDateStringCopy && dayList[row + $index].day != undefined), \'today\' : (dayList[row + $index].dateString == today.dateString )}"><div class=date_cell ng-click="dateSelected(dayList[row + $index])" ng-class="{\'pointer_events_none\':dayList[row + $index].dateDisabled}">{{ dayList[row + $index].date }}</div></div></div></div></div><div class="error_msg padding-horizontal" ng-show="date_selection.submitted === true && date_selection.selected === false" ng-bind=errorMsgLabel></div></div></ion-content><ion-footer-bar ng-class=modalFooterColor><div class="row no_padding"><div class=text-center ng-class="{\'col-33\': !closeOnSelect, \'col-50\': closeOnSelect}" ng-click=closeIonicDatePickerModal()><button class="button button-clear">{{closeLabel}}</button></div><div ng-if=showClear class="col col-33 text-center" ng-click=clearIonicDatePickerModal()><button class="button button-clear">{{clearLabel}}</button></div><div class=text-center ng-class="{\'col-34\': !closeOnSelect, \'col-50\': closeOnSelect}" ng-click=setIonicDatePickerTodayDate()><button class="button button-clear">{{todayLabel}}</button></div><div ng-if=!closeOnSelect class="col-33 text-center" ng-click=setIonicDatePickerDate()><button class="button button-clear">{{setLabel}}</button></div></div></ion-footer-bar></ion-modal-view>');
}]);
})();

(function(module) {
try {
  module = angular.module('ionic-datepicker.templates');
} catch (e) {
  module = angular.module('ionic-datepicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('ionic-datepicker-popup.html',
    '<div class=ionic_datepicker><div class=selected_date_full>{{selectedDateFull | date:dateFormat}}</div><div class="row no_padding"><div class="col col-10 left_arrow" ng-click="!prevMonthDisable && prevMonth()" ng-class="{\'pointer_events_none\':prevMonthDisable}"><button class=button-clear><i class="icon ion-chevron-left" ng-class="{\'color_blue\':(!prevMonthDisable || (!enableDatesFrom.isSet))}"></i></button></div><div class="col col-80 drop_down"><div class="row select_section"><label class="item item-input item-select col col-50 month_select"><select ng-model=currentMonth ng-change=monthChanged(currentMonth) class=month_select ng-options="month as month for month in monthsList" ng-selected="month == currentMonthSelected"></select></label> <label class="item item-input item-select col col-50 year_select"><select ng-model=currentYear ng-change=yearChanged(currentYear) class=year_select ng-options="year as year for year in yearsList" ng-selected="year == year"></select></label></div></div><div class="col col-10 right_arrow" ng-click="!nextMonthDisable && nextMonth()" ng-class="{\'pointer_events_none\':nextMonthDisable}"><button class=button-clear><i class="icon ion-chevron-right" ng-class="{\'color_blue\':(!nextMonthDisable || (!enableDatesTo.isSet))}"></i></button></div></div><div class=calendar_grid><div class=row><div class=col ng-repeat="weekName in weekNames track by $index" style="font-weight: bold" ng-bind=weekName></div></div><div style="height: 180px;"><div class=row ng-repeat="row in rows track by $index" style="text-align: center;"><div class="col no_padding date_col" ng-repeat="col in cols track by $index" ng-class="{\'date_selected\': (dayList[row + $index].dateString === selctedDateStringCopy && dayList[row + $index].day != undefined), \'today\' : (dayList[row + $index].dateString == today.dateString )}"><div class=date_cell ng-click="dateSelected(dayList[row + $index])" ng-class="{\'pointer_events_none\':dayList[row + $index].dateDisabled}">{{ dayList[row + col].date }}</div></div></div></div></div><div class="error_msg padding-horizontal" ng-show="date_selection.submitted === true && date_selection.selected === false" ng-bind=errorMsgLabel></div></div>');
}]);
})();

//By Rajeshwar Patlolla - rajeshwar.patlolla@gmail.com
//https://github.com/rajeshwarpatlolla

(function(){
  'use strict';

  angular.module('ionic-datepicker', ['ionic','ionic-datepicker.templates']);
  
})();
//Based on ionic Datepicker by  Rajeshwar Patlolla - rajeshwar.patlolla@gmail.com
//https://github.com/rajeshwarpatlolla

(function () {
    'use strict';

    angular.module('ionic-datepicker')
        .directive('ionicDatepicker', IonicDatepicker);

    IonicDatepicker.$inject = ['$ionicPopup', '$ionicModal', 'IonicDatepickerService'];

    function IonicDatepicker($ionicPopup, $ionicModal, IonicDatepickerService) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                inputObj: "=inputObj"
            },
            link: function (scope, element, attrs) {

                if(typeof scope.inputObj.inputDate === 'string'){
                    scope.inputObj.inputDate = new Date(scope.inputObj.inputDate);
                }

                scope.currentMonth = '';
                scope.currentYear = '';
                scope.disabledDates = [];

                //Setting the title, today, close and set strings for the date picker
                scope.titleLabel = scope.inputObj.titleLabel ? (scope.inputObj.titleLabel) : 'Select Date';
                scope.todayLabel = scope.inputObj.todayLabel ? (scope.inputObj.todayLabel) : 'Today';
                scope.closeLabel = scope.inputObj.closeLabel ? (scope.inputObj.closeLabel) : 'Close';
                scope.setLabel = scope.inputObj.setLabel ? (scope.inputObj.setLabel) : 'Set';
                scope.showTodayButton = scope.inputObj.showTodayButton ? (scope.inputObj.showTodayButton) : 'true';
                scope.errorMsgLabel = scope.inputObj.errorMsgLabel ? (scope.inputObj.errorMsgLabel) : 'Please select a date.';
                scope.setButtonType = scope.inputObj.setButtonType ? (scope.inputObj.setButtonType) : 'button-stable cal-button';
                scope.todayButtonType = scope.inputObj.todayButtonType ? (scope.inputObj.todayButtonType) : 'button-stable cal-button';
                scope.closeButtonType = scope.inputObj.closeButtonType ? (scope.inputObj.closeButtonType) : 'button-stabl cal-buttone';
                scope.templateType = scope.inputObj.templateType ? (scope.inputObj.templateType) : 'popup';
                scope.modalHeaderColor = scope.inputObj.modalHeaderColor ? (scope.inputObj.modalHeaderColor) : 'bar-stable';
                scope.modalFooterColor = scope.inputObj.modalFooterColor ? (scope.inputObj.modalFooterColor) : 'bar-stable';
                scope.showClear = scope.inputObj.showClear ? (scope.inputObj.showClear) : false;
                scope.clearLabel = scope.inputObj.clearLabel ? (scope.inputObj.clearLabel) : 'Clear';
                scope.clearButtonType = scope.inputObj.clearButtonType ? (scope.inputObj.clearButtonType) : 'button-stable cal-button';
                scope.dateFormat = scope.inputObj.dateFormat ? (scope.inputObj.dateFormat) : 'dd-MM-yyyy';
                scope.closeOnSelect = scope.inputObj.closeOnSelect ? (scope.inputObj.closeOnSelect) : false;

                scope.enableDatesFrom = {
                    epoch: 0,
                    isSet: false
                };
                scope.enableDatesTo = {
                    epoch: 0,
                    isSet: false
                };

                // creating buttons
                var buttons = [];
                buttons.push({
                    text: scope.closeLabel,
                    type: scope.closeButtonType,
                    onTap: function (e) {
                        scope.inputObj.callback(undefined);
                    }
                });

                if (scope.showClear) {
                    buttons.push({
                        text: scope.clearLabel,
                        type: scope.clearButtonType,
                        onTap: function (e) {
                            dateCleared();
                        }
                    });
                };

                if (scope.showTodayButton == 'true') {
                    buttons.push({
                        text: scope.todayLabel,
                        type: scope.todayButtonType,
                        onTap: function (e) {
                            todaySelected();
                            //e.preventDefault();
                        }
                    });
                }

                if (!scope.closeOnSelect) {
                    buttons.push({
                        text: scope.setLabel,
                        type: scope.setButtonType,
                        onTap: function () {
                            dateSelected();
                        }
                    });
                }
                //Setting the from and to dates - Function used to enable/disable prv/future dates
                var setToFrom = function () {
                    scope.prevMonthDisable = false;
                    scope.nextMonthDisable = false;
                    if (scope.inputObj.from) {
                        scope.enableDatesFrom.isSet = true;
                        scope.enableDatesFrom.epoch = scope.inputObj.from.getTime();
                        if (scope.enableDatesFrom.epoch > scope.currentMonthFirstDayEpoch) {
                            scope.prevMonthDisable = true;
                    }
                    }

                    if (scope.inputObj.to) {
                        scope.enableDatesTo.isSet = true;
                        scope.enableDatesTo.epoch = scope.inputObj.to.getTime();
                        if (scope.enableDatesTo.epoch < scope.currentMonthLastDayEpoch) {
                            scope.nextMonthDisable = true;
                        }
                    }
                };

                setToFrom();

                //Setting the input date for the date picker
                if (scope.inputObj.inputDate) {
                    scope.ipDate = new Date(scope.inputObj.inputDate.getFullYear(), scope.inputObj.inputDate.getMonth(), scope.inputObj.inputDate.getDate());
                } else {
                    scope.ipDate = new Date();
                }
                scope.selectedDateFull = scope.ipDate;

                //Setting the months list. This is useful, if the component needs to use some other language.
                scope.monthsList = [];
                if (scope.inputObj.monthList && scope.inputObj.monthList.length === 12) {
                    scope.monthsList = scope.inputObj.monthList;
                } else {
                    scope.monthsList = IonicDatepickerService.monthsList;
                }
                if (scope.inputObj.weekDaysList && scope.inputObj.weekDaysList.length === 7) {
                    scope.weekNames = scope.inputObj.weekDaysList;
                } else {
                    scope.weekNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
                }
                scope.yearsList = IonicDatepickerService.getYearsList(scope.inputObj.from, scope.inputObj.to);

                //Setting whether to show Monday as the first day of the week or not.
                if (scope.inputObj.mondayFirst) {
                    scope.mondayFirst = true;
                } else {
                    scope.mondayFirst = false;
                }

                //Setting the disabled dates list.
                if (scope.inputObj.disabledDates && scope.inputObj.disabledDates.length === 0) {
                    scope.disabledDates = [];
                } else {
                    angular.forEach(scope.inputObj.disabledDates, function (val, key) {
                        val.setHours(0);
                        val.setMinutes(0);
                        val.setSeconds(0);
                        val.setMilliseconds(0);

                        scope.disabledDates.push(val.getTime());
                    });
                }

                var currentDate = angular.copy(scope.ipDate);
                currentDate.setHours(0);
                currentDate.setMinutes(0);
                currentDate.setSeconds(0);
                currentDate.setMilliseconds(0);

                scope.selctedDateString = currentDate.toString();
                scope.selctedDateStringCopy = angular.copy(scope.selctedDateString);
                scope.today = {};

                if (scope.mondayFirst === true) {
                    var lastWeekDay = scope.weekNames.shift();
                    scope.weekNames.push(lastWeekDay);
                }

                var tempTodayObj = new Date();
                var tempToday = new Date(tempTodayObj.getFullYear(), tempTodayObj.getMonth(), tempTodayObj.getDate());

                scope.today = {
                    dateObj: tempTodayObj,
                    date: tempToday.getDate(),
                    month: tempToday.getMonth(),
                    year: tempToday.getFullYear(),
                    day: tempToday.getDay(),
                    dateString: tempToday.toString(),
                    epochLocal: tempToday.getTime(),
                    epochUTC: (tempToday.getTime() + (tempToday.getTimezoneOffset() * 60 * 1000))
                };
                var checkDateIsDisabled = function (date) {
                    var epochLocal = date.getTime();
                    return ((scope.disabledDates.indexOf(epochLocal) > -1) || (scope.enableDatesFrom.isSet && scope.enableDatesFrom.epoch > epochLocal) || (scope.enableDatesTo.isSet && scope.enableDatesTo.epoch < epochLocal));
                };
                var refreshDateList = function (current_date) {
                    current_date.setHours(0);
                    current_date.setMinutes(0);
                    current_date.setSeconds(0);
                    current_date.setMilliseconds(0);

                    scope.selctedDateString = (new Date(current_date)).toString();
                    currentDate = angular.copy(current_date);

                    var firstDay = new Date(current_date.getFullYear(), current_date.getMonth(), 1).getDate();
                    var lastDay = new Date(current_date.getFullYear(), current_date.getMonth() + 1, 0).getDate();

                    scope.currentMonthFirstDayEpoch = new Date(current_date.getFullYear(), current_date.getMonth(), firstDay).getTime();
                    scope.currentMonthLastDayEpoch = new Date(current_date.getFullYear(), current_date.getMonth(), lastDay).getTime();
                    setToFrom();
                    scope.dayList = [];

                    for (var i = firstDay; i <= lastDay; i++) {
                        var tempDate = new Date(current_date.getFullYear(), current_date.getMonth(), i);
                        var dateDisabled = checkDateIsDisabled(tempDate);
                        scope.dayList.push({
                            date: tempDate.getDate(),
                            month: tempDate.getMonth(),
                            year: tempDate.getFullYear(),
                            day: tempDate.getDay(),
                            dateString: tempDate.toString(),
                             dateDisabled: dateDisabled
                        });
                        if (tempDate.getDate() == current_date.getDate()) {
                            scope.dateSelected(scope.dayList[scope.dayList.length - 1]);
                        };
                    }

                    //To set Monday as the first day of the week.
                    var firstDayMonday = scope.dayList[0].day - scope.mondayFirst;
                    firstDayMonday = (firstDayMonday < 0) ? 6 : firstDayMonday;



                    for (var j = 0; j < firstDayMonday; j++) {
                        scope.dayList.unshift({});
                    }

                    scope.rows = [0, 7, 14, 21, 28, 35];
                    scope.cols = [0, 1, 2, 3, 4, 5, 6];

                    scope.currentMonth = scope.monthsList[current_date.getMonth()];
                    scope.currentYear = current_date.getFullYear();
                    scope.currentMonthSelected = scope.currentMonth;
                    scope.currentYearSelected = scope.currentYear;

                    scope.numColumns = 7;
                    //scope.rows.length = 6;
                    //scope.cols.length = scope.numColumns;

                };

                scope.monthChanged = function (month) {
                    var monthNumber = scope.monthsList.indexOf(month);
                    currentDate.setMonth(monthNumber);
                    refreshDateList(currentDate);
                };

                scope.yearChanged = function (year) {
                    currentDate.setFullYear(year);
                    refreshDateList(currentDate);
                };

                scope.prevMonth = function () {
                    if (currentDate.getMonth() === 1) {
                        currentDate.setFullYear(currentDate.getFullYear());
                    }
                    currentDate.setMonth(currentDate.getMonth() - 1);

                    scope.currentMonth = scope.monthsList[currentDate.getMonth()];
                    scope.currentYear = currentDate.getFullYear();

                    refreshDateList(currentDate);
                };

                scope.nextMonth = function () {
                    if (currentDate.getMonth() === 11) {
                        currentDate.setFullYear(currentDate.getFullYear());
                    }
                    currentDate.setDate(1);
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    scope.currentMonth = scope.monthsList[currentDate.getMonth()];
                    scope.currentYear = currentDate.getFullYear();
                    refreshDateList(currentDate);
                };

                scope.date_selection = {
                    selected: false,
                    selectedDate: '',
                    submitted: false
                };
                scope.date_selection.selected = true;
                scope.date_selection.selectedDate = scope.ipDate;

                scope.dateSelected = function (date) {
                    if (!date || Object.keys(date).length === 0) return;
                    scope.selctedDateString = date.dateString;
                    scope.selctedDateStringCopy = angular.copy(scope.selctedDateString);
                    scope.date_selection.selected = true;
                    scope.date_selection.selectedDate = new Date(date.dateString);
                    scope.selectedDateFull = scope.date_selection.selectedDate;
                };

                var selectedInputDateObject = {
                    dateObj: scope.ipDate,
                    date: scope.ipDate.getDate(),
                    month: scope.ipDate.getMonth(),
                    year: scope.ipDate.getFullYear(),
                    day: scope.ipDate.getDay(),
                    dateString: scope.ipDate.toString(),
                    epochLocal: scope.ipDate.getTime(),
                    epochUTC: (scope.ipDate.getTime() + (scope.ipDate.getTimezoneOffset() * 60 * 1000))
                };
                scope.dateSelected(selectedInputDateObject);

                // Watch for selected date change
                scope.$watch('date_selection.selectedDate', function (newVal, oldVal) {
                    // Close modal/popup if date selected
                    if (scope.closeOnSelect) {

                        dateSelected();

                        if (scope.templateType.toLowerCase() === 'modal' && scope.modal) {
                          scope.closeModal();
                        }
                        else if(scope.popup) {
                          scope.popup.close();
                        }
                    }
                });

                //Called when the user clicks on any date.
                function dateCleared() {
                    scope.date_selection.submitted = true;
                    scope.selctedDateString = "";
                    scope.selctedDateStringCopy = "";
                    scope.date_selection.selected = false;
                    scope.date_selection.selectedDate = undefined;
                    scope.selectedDateFull = undefined;
                    scope.inputObj.inputDate = undefined;
                    scope.inputObj.callback(undefined);
                    // Please handle null/undefined condition in call back
                }
                //Called when the user clicks on any date.
                function dateSelected() {
                    scope.date_selection.submitted = true;
                    if (scope.date_selection.selected === true) {
                        // This will prevent setting disabled dates... although it closes popup
                        var outSideToFrom = false;
                        if (scope.inputObj.from && scope.inputObj.from > scope.date_selection.selectedDate) {
                            outSideToFrom = true;
                        };
                        if (scope.inputObj.to && scope.inputObj.to < scope.date_selection.selectedDate) {
                            outSideToFrom = true
                        };
                        if (outSideToFrom == true) {
                            scope.inputObj.callback(undefined);
                        } else {
                        scope.inputObj.callback(scope.date_selection.selectedDate);
                    }
                }
                }

                //Called when the user clicks on the 'Today' button
                function todaySelected() {
                    var today = new Date();
                    today.setHours(0);
                    today.setMinutes(0);
                    today.setSeconds(0);
                    today.setMilliseconds(0);

                    var tempEpoch = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    var todayObj = {
                        date: today.getDate(),
                        month: today.getMonth(),
                        year: today.getFullYear(),
                        day: today.getDay(),
                        dateString: today.toString(),
                        epochLocal: tempEpoch.getTime(),
                        epochUTC: (tempEpoch.getTime() + (tempEpoch.getTimezoneOffset() * 60 * 1000))
                    };

                    scope.selctedDateString = todayObj.dateString;
                    scope.selctedDateStringCopy = angular.copy(scope.selctedDateString);
                    scope.date_selection.selected = true;
                    scope.date_selection.selectedDate = new Date(todayObj.dateString);
                    dateSelected(); //Close popup after today selected...don't wait for set to be clicked
                    // scope.setIonicDatePickerDate();
                    //refreshDateList(new Date());
                }

                //Called when the user clicks on the 'Close' button of the modal
                scope.closeIonicDatePickerModal = function () {
                    scope.inputObj.callback(undefined);
                    scope.closeModal();
                };
                //Called when the user clicks on the 'Clear' button of the modal
                scope.clearIonicDatePickerModal = function () {
                    dateCleared();
                    scope.closeModal();
                };
                //Called when the user clicks on the 'Today' button of the modal
                scope.setIonicDatePickerTodayDate = function () {
                    //scope.inputObj.callback(undefined);
                    todaySelected();
                    scope.closeModal();
                };
                //Called when the user clicks on the Set' button of the modal
                scope.setIonicDatePickerDate = function () {
                    dateSelected();
                    scope.closeModal();
                };

                if (scope.templateType.toLowerCase() === 'modal') {
                //Getting the reference for the 'ionic-datepicker' modal.
                $ionicModal.fromTemplateUrl('ionic-datepicker-modal.html', {
                    scope: scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    scope.modal = modal;
                });
                scope.openModal = function () {
                    scope.modal.show();
                };

                scope.closeModal = function () {
                    scope.modal.hide();
                };

                scope.on('$destroy', function () {
                    scope.modal.remove();
                });

                }
                //Called when the user clicks on the button to invoke the 'ionic-datepicker'
                element.on("click", function () {
                    //This code is added to set passed date from datepickerObject
                    if (scope.inputObj.inputDate) {
                        refreshDateList(scope.inputObj.inputDate);
                    } else if (scope.date_selection.selectedDate) {
                        refreshDateList(scope.date_selection.selectedDate);
                    } else if (scope.ipDate) {
                        refreshDateList(angular.copy(scope.ipDate));
                    } else {
                        refreshDateList(new Date());
                    }
                    if (scope.templateType.toLowerCase() === 'modal') {
                        scope.openModal();
                    } else {
                        //Getting the reference for the 'ionic-datepicker' popup.
                        scope.popup = $ionicPopup.show({
                            templateUrl: 'ionic-datepicker-popup.html',
                            title: scope.titleLabel,
                            subTitle: '',
                            cssClass:'picker-body',
                            scope: scope,
                            buttons: buttons
                        });
                    }
                });
            }
        };
    }

})();

//By Rajeshwar Patlolla - rajeshwar.patlolla@gmail.com
//https://github.com/rajeshwarpatlolla

(function(){
  'use strict';

  angular.module('ionic-datepicker')
    .service('IonicDatepickerService',IonicDatepickerService);

  IonicDatepickerService.$inject = [];
  function IonicDatepickerService(){
    this.monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /**
     * Get years list
     */

    this.getYearsList = function(from, to){
      var yearsList = [],
          minYear   = 1900,
          maxYear   = 2100;

      if(from){
        minYear = new Date(from).getFullYear();
      }

      if(to){
        maxYear = new Date(to).getFullYear();
      }

      for (var i = minYear; i <= maxYear; i++) {
        yearsList.push(i);
      };

      return yearsList;
    };
  }

})();