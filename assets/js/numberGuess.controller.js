(function() {
	'use strict';

	angular
		.module('numberGuess', ['core'])
		.controller('NumberGuessController', NumberGuessController);

	NumberGuessController.$inject = ['$timeout'];

	function NumberGuessController($timeout) {
		var vm = this;
		vm.answer = 0;
		vm.content = true;
		vm.name = '';
		vm.numbers = getNumbers();
		vm.magicNumber = 31;
		vm.proceedToFirst = proceedToFirst;
		vm.proceedToSecond = proceedToSecond;
		vm.proceedToThird = proceedToThird;
		vm.proceedToFourth = proceedToFourth;
		vm.proceedToFifth = proceedToFifth;
		vm.proceedToAnswer = proceedToAnswer;
		vm.restartGame = restartGame;
		vm.status = 'entername';
		vm.submitname = submitname;
		vm.title = 'Hello World';

		activate();

		function activate() {
			showLoad();
			$timeout(hideLoad, 5000);
		}

		function hideLoad() {
			vm.content = true;
		}

		function showLoad() {
			vm.content = false;
		}
		
		function submitname() {
			showLoad();
			if(vm.nameForm.$valid) {
				console.log('valid');
			}
			vm.status = 'intro';
			$timeout(hideLoad, 500);
		}

		function proceedToFirst() {
			showLoad();
			vm.status = 'first';
			$timeout(hideLoad, 500);
		}

		function proceedToSecond(str) {
			showLoad();
			if(str === 'yes') {
				vm.answer = vm.answer + 1;
			}
			vm.status = 'second';
			$timeout(hideLoad, 500);
		}

		function proceedToThird(str) {
			showLoad();
			if(str === 'yes') {
				vm.answer = vm.answer + 2;
			}
			vm.status = 'third';
			$timeout(hideLoad, 500);
		}

		function proceedToFourth(str) {
			showLoad();
			if(str === 'yes') {
				vm.answer = vm.answer + 4;
			}
			vm.status = 'fourth';
			$timeout(hideLoad, 500);
		}

		function proceedToFifth(str) {
			showLoad();
			if(str === 'yes') {
				vm.answer = vm.answer + 8;
			}
			vm.status = 'fifth';
			$timeout(hideLoad, 500);
		}

		function proceedToAnswer(str) {
			showLoad();
			if(str === 'yes') {
				vm.answer = vm.answer + 16;
			}
			vm.status = 'answer';
			$timeout(hideLoad, 500);
		}

		function restartGame() {
			vm.answer = 0;
			vm.status = 'entername';
		}

		function getNumbers() {
			return {
				one: {
					first: 1, second: 3, third: 5, 
					fourth: 7, fifth: 9, sixth: 11, 
					seventh: 13, eighth: 15, ninth: 17, 
					tenth: 19, eleventh: 21, twelfth: 23, 
					thirteenth: 25, fourteenth: 27, fifteenth: 29
				},
				two: {
					first: 2, second: 3, third: 6, 
					fourth: 7, fifth: 10, sixth: 11, 
					seventh: 14, eighth: 15, ninth: 18, 
					tenth: 19, eleventh: 22, twelfth: 23, 
					thirteenth: 26, fourteenth: 27, fifteenth: 30
				},
				three: {
					first: 4, second: 5, third: 6, 
					fourth: 7, fifth: 12, sixth: 13, 
					seventh: 14, eighth: 15, ninth: 20, 
					tenth: 21, eleventh: 22, twelfth: 23, 
					thirteenth: 28, fourteenth: 29, fifteenth: 30
				},
				four: {
					first: 8, second: 9, third: 10, 
					fourth: 11, fifth: 12, sixth: 13, 
					seventh: 14, eighth: 15, ninth: 24, 
					tenth: 25, eleventh: 26, twelfth: 27, 
					thirteenth: 28, fourteenth: 29, fifteenth: 30,
				},
				five: {
					first: 16, second: 17, third: 18, 
					fourth: 19, fifth: 20, sixth: 21, 
					seventh: 22, eighth: 23, ninth: 24, 
					tenth: 25, eleventh: 26, twelfth: 27, 
					thirteenth: 28, fourteenth: 29, fifteenth: 30,
				}
			};
		}
	}
})();
