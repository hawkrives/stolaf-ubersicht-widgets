command: [
	'curl --silent ',
	'"https://help.stolaf.edu/helpdesk',
	'/WebObjects/Helpdesk.woa/ra/Tickets?',
	'style=details&',
	'qualifier=(statustype.statusTypeName%3D%27Open%27)&',
	'limit=50&',
	'apiKey=dYqqjOjwkOd2k411ytv8G6rADIgpCbWZ59WouoEc"',
].join(''),

refreshFrequency: 60000,

render: function(argument) {
	return "";
},

update: function(output, domEl) {
	localStorage.setItem('stolaf-open-tickets', output);
}