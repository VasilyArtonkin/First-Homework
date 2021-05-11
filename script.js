'use strict'

let money = prompt("Ваш бюджет на месяц");
	let time = prompt("Введите дату в формате YYYY-MM-DD");
let costs = prompt ("Введите обязательную статью расходов в этом 		месяце");
	let quantity = prompt("Во сколько обойдется");
	let expenses= {
		costs:quantity
	};
	console.log( typeof(money));
	let freeMoney = money - costs;
	alert('Ваш бюджет на месяц = ', freeMoney);

	let appData = {
		budjet: money,
		timeData: time,
	}
