var app=angular.module("myapp",['ngAnimate'])

app.controller("maincontroller",function($scope){
	$scope.form={}
	$scope.allok=true;
	$scope.formvalidations={
		fname:false,
		lname:false,
		company:false,
		email:false,
		phone:false,
		country:false,
		state:false,
		industry:false,
		zipcode:false,
		pwdone:false,
		pwdtwo:false,
		subscribe:false
	}
	$scope.emailpattern=/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	$scope.phonepattern= /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

	
 //Drop down object for the countries list
 $scope.form.countrylist=[
 {	name:	'Afghanistan'	,	value:	'Afghanistan'	},
 {	name:	'Albania'	,	value:	'Albania'	},
 {	name:	'Algeria'	,	value:	'Algeria'	},
 {	name:	'American Samoa'	,	value:	'American Samoa'	},
 {	name:	'Andorra'	,	value:	'Andorra'	},
 {	name:	'Angola'	,	value:	'Angola'	},
 {	name:	'Anguilla'	,	value:	'Anguilla'	},
 {	name:	'Antigua and Barbuda'	,	value:	'Antigua and Barbuda'	},
 {	name:	'Argentina'	,	value:	'Argentina'	},
 {	name:	'Armenia'	,	value:	'Armenia'	},
 {	name:	'Aruba'	,	value:	'Aruba'	},
 {	name:	'Australia'	,	value:	'Australia'	},
 {	name:	'Austria'	,	value:	'Austria'	},
 {	name:	'Azerbaijan'	,	value:	'Azerbaijan'	},
 {	name:	'Bahamas'	,	value:	'Bahamas'	},
 {	name:	'Bahrain'	,	value:	'Bahrain'	},
 {	name:	'Bangladesh'	,	value:	'Bangladesh'	},
 {	name:	'Barbados'	,	value:	'Barbados'	},
 {	name:	'Belarus'	,	value:	'Belarus'	},
 {	name:	'Belgium'	,	value:	'Belgium'	},
 {	name:	'Belize'	,	value:	'Belize'	},
 {	name:	'Benin'	,	value:	'Benin'	},
 {	name:	'Bermuda'	,	value:	'Bermuda'	},
 {	name:	'Bhutan'	,	value:	'Bhutan'	},
 {	name:	'Bolivia'	,	value:	'Bolivia'	},
 {	name:	'Bonaire'	,	value:	'Bonaire'	},
 {	name:	'Bosnia-Herzegovina'	,	value:	'Bosnia-Herzegovina'	},
 {	name:	'Botswana'	,	value:	'Botswana'	},
 {	name:	'Bouvet Island'	,	value:	'Bouvet Island'	},
 {	name:	'Brazil'	,	value:	'Brazil'	},
 {	name:	'Brunei'	,	value:	'Brunei'	},
 {	name:	'Bulgaria'	,	value:	'Bulgaria'	},
 {	name:	'Burkina Faso'	,	value:	'Burkina Faso'	},
 {	name:	'Burundi'	,	value:	'Burundi'	},
 {	name:	'Cambodia'	,	value:	'Cambodia'	},
 {	name:	'Cameroon'	,	value:	'Cameroon'	},
 {	name:	'Canada'	,	value:	'Canada'	},
 {	name:	'Cape Verde'	,	value:	'Cape Verde'	},
 {	name:	'Cayman Islands'	,	value:	'Cayman Islands'	},
 {	name:	'Central African Republic'	,	value:	'Central African Republic'	},
 {	name:	'Chad'	,	value:	'Chad'	},
 {	name:	'Chile'	,	value:	'Chile'	},
 {	name:	'China'	,	value:	'China'	},
 {	name:	'Christmas Island'	,	value:	'Christmas Island'	},
 {	name:	'Cocos (Keeling) Islands'	,	value:	'Cocos (Keeling) Islands'	},
 {	name:	'Colombia'	,	value:	'Colombia'	},
 {	name:	'Comoros'	,	value:	'Comoros'	},
 {	name:	'Congo, Democratic Republic of the (Zaire)'	,	value:	'Congo, Democratic Republic of the (Zaire)'	},
 {	name:	'Congo, Republic of'	,	value:	'Congo, Republic of'	},
 {	name:	'Cook Islands'	,	value:	'Cook Islands'	},
 {	name:	'Costa Rica'	,	value:	'Costa Rica'	},
 {	name:	'Croatia'	,	value:	'Croatia'	},
 {	name:	'Cuba'	,	value:	'Cuba'	},
 {	name:	'Curacao'	,	value:	'Curacao'	},
 {	name:	'Cyprus'	,	value:	'Cyprus'	},
 {	name:	'Czech Republic'	,	value:	'Czech Republic'	},
 {	name:	'Denmark'	,	value:	'Denmark'	},
 {	name:	'Djibouti'	,	value:	'Djibouti'	},
 {	name:	'Dominica'	,	value:	'Dominica'	},
 {	name:	'Dominican Republic'	,	value:	'Dominican Republic'	},
 {	name:	'Ecuador'	,	value:	'Ecuador'	},
 {	name:	'Egypt'	,	value:	'Egypt'	},
 {	name:	'El Salvador'	,	value:	'El Salvador'	},
 {	name:	'Equatorial Guinea'	,	value:	'Equatorial Guinea'	},
 {	name:	'Eritrea'	,	value:	'Eritrea'	},
 {	name:	'Estonia'	,	value:	'Estonia'	},
 {	name:	'Ethiopia'	,	value:	'Ethiopia'	},
 {	name:	'Falkland Islands'	,	value:	'Falkland Islands'	},
 {	name:	'Faroe Islands'	,	value:	'Faroe Islands'	},
 {	name:	'Fiji'	,	value:	'Fiji'	},
 {	name:	'Finland'	,	value:	'Finland'	},
 {	name:	'France'	,	value:	'France'	},
 {	name:	'French Guiana'	,	value:	'French Guiana'	},
 {	name:	'Gabon'	,	value:	'Gabon'	},
 {	name:	'Gambia'	,	value:	'Gambia'	},
 {	name:	'Georgia'	,	value:	'Georgia'	},
 {	name:	'Germany'	,	value:	'Germany'	},
 {	name:	'Ghana'	,	value:	'Ghana'	},
 {	name:	'Gibraltar'	,	value:	'Gibraltar'	},
 {	name:	'Greece'	,	value:	'Greece'	},
 {	name:	'Greenland'	,	value:	'Greenland'	},
 {	name:	'Grenada'	,	value:	'Grenada'	},
 {	name:	'Guadeloupe (French)'	,	value:	'Guadeloupe (French)'	},
 {	name:	'Guam (USA)'	,	value:	'Guam (USA)'	},
 {	name:	'Guatemala'	,	value:	'Guatemala'	},
 {	name:	'Guinea'	,	value:	'Guinea'	},
 {	name:	'Guinea Bissau'	,	value:	'Guinea Bissau'	},
 {	name:	'Guyana'	,	value:	'Guyana'	},
 {	name:	'Haiti'	,	value:	'Haiti'	},
 {	name:	'Holy See'	,	value:	'Holy See'	},
 {	name:	'Honduras'	,	value:	'Honduras'	},
 {	name:	'Hong Kong'	,	value:	'Hong Kong'	},
 {	name:	'Hungary'	,	value:	'Hungary'	},
 {	name:	'Iceland'	,	value:	'Iceland'	},
 {	name:	'India'	,	value:	'India'	},
 {	name:	'Indonesia'	,	value:	'Indonesia'	},
 {	name:	'Iran'	,	value:	'Iran'	},
 {	name:	'Iraq'	,	value:	'Iraq'	},
 {	name:	'Ireland'	,	value:	'Ireland'	},
 {	name:	'Israel'	,	value:	'Israel'	},
 {	name:	'Italy'	,	value:	'Italy'	},
 {	name:	'Ivory Coast (Cote D`Ivoire)'	,	value:	'Ivory Coast (Cote D`Ivoire)'	},
 {	name:	'Jamaica'	,	value:	'Jamaica'	},
 {	name:	'Japan'	,	value:	'Japan'	},
 {	name:	'Jordan'	,	value:	'Jordan'	},
 {	name:	'Kazakhstan'	,	value:	'Kazakhstan'	},
 {	name:	'Kenya'	,	value:	'Kenya'	},
 {	name:	'Kiribati'	,	value:	'Kiribati'	},
 {	name:	'Kosovo'	,	value:	'Kosovo'	},
 {	name:	'Kuwait'	,	value:	'Kuwait'	},
 {	name:	'Kyrgyzstan'	,	value:	'Kyrgyzstan'	},
 {	name:	'Laos'	,	value:	'Laos'	},
 {	name:	'Latvia'	,	value:	'Latvia'	},
 {	name:	'Lebanon'	,	value:	'Lebanon'	},
 {	name:	'Lesotho'	,	value:	'Lesotho'	},
 {	name:	'Liberia'	,	value:	'Liberia'	},
 {	name:	'Libya'	,	value:	'Libya'	},
 {	name:	'Liechtenstein'	,	value:	'Liechtenstein'	},
 {	name:	'Lithuania'	,	value:	'Lithuania'	},
 {	name:	'Luxembourg'	,	value:	'Luxembourg'	},
 {	name:	'Macau'	,	value:	'Macau'	},
 {	name:	'Macedonia'	,	value:	'Macedonia'	},
 {	name:	'Madagascar'	,	value:	'Madagascar'	},
 {	name:	'Malawi'	,	value:	'Malawi'	},
 {	name:	'Malaysia'	,	value:	'Malaysia'	},
 {	name:	'Maldives'	,	value:	'Maldives'	},
 {	name:	'Mali'	,	value:	'Mali'	},
 {	name:	'Malta'	,	value:	'Malta'	},
 {	name:	'Marshall Islands'	,	value:	'Marshall Islands'	},
 {	name:	'Martinique (French)'	,	value:	'Martinique (French)'	},
 {	name:	'Mauritania'	,	value:	'Mauritania'	},
 {	name:	'Mauritius'	,	value:	'Mauritius'	},
 {	name:	'Mayotte'	,	value:	'Mayotte'	},
 {	name:	'Mexico'	,	value:	'Mexico'	},
 {	name:	'Micronesia'	,	value:	'Micronesia'	},
 {	name:	'Moldova'	,	value:	'Moldova'	},
 {	name:	'Monaco'	,	value:	'Monaco'	},
 {	name:	'Mongolia'	,	value:	'Mongolia'	},
 {	name:	'Montenegro'	,	value:	'Montenegro'	},
 {	name:	'Montserrat'	,	value:	'Montserrat'	},
 {	name:	'Morocco'	,	value:	'Morocco'	},
 {	name:	'Mozambique'	,	value:	'Mozambique'	},
 {	name:	'Myanmar'	,	value:	'Myanmar'	},
 {	name:	'Namibia'	,	value:	'Namibia'	},
 {	name:	'Nauru'	,	value:	'Nauru'	},
 {	name:	'Nepal'	,	value:	'Nepal'	},
 {	name:	'Netherlands'	,	value:	'Netherlands'	},
 {	name:	'Netherlands Antilles'	,	value:	'Netherlands Antilles'	},
 {	name:	'New Caledonia (French)'	,	value:	'New Caledonia (French)'	},
 {	name:	'New Zealand'	,	value:	'New Zealand'	},
 {	name:	'Nicaragua'	,	value:	'Nicaragua'	},
 {	name:	'Niger'	,	value:	'Niger'	},
 {	name:	'Nigeria'	,	value:	'Nigeria'	},
 {	name:	'Niue'	,	value:	'Niue'	},
 {	name:	'Norfolk Island'	,	value:	'Norfolk Island'	},
 {	name:	'North Korea'	,	value:	'North Korea'	},
 {	name:	'Northern Mariana Islands'	,	value:	'Northern Mariana Islands'	},
 {	name:	'Norway'	,	value:	'Norway'	},
 {	name:	'Oman'	,	value:	'Oman'	},
 {	name:	'Pakistan'	,	value:	'Pakistan'	},
 {	name:	'Palau'	,	value:	'Palau'	},
 {	name:	'Panama'	,	value:	'Panama'	},
 {	name:	'Papua New Guinea'	,	value:	'Papua New Guinea'	},
 {	name:	'Paraguay'	,	value:	'Paraguay'	},
 {	name:	'Peru'	,	value:	'Peru'	},
 {	name:	'Philippines'	,	value:	'Philippines'	},
 {	name:	'Pitcairn Island'	,	value:	'Pitcairn Island'	},
 {	name:	'Poland'	,	value:	'Poland'	},
 {	name:	'Polynesia (French)'	,	value:	'Polynesia (French)'	},
 {	name:	'Portugal'	,	value:	'Portugal'	},
 {	name:	'Puerto Rico'	,	value:	'Puerto Rico'	},
 {	name:	'Qatar'	,	value:	'Qatar'	},
 {	name:	'Reunion'	,	value:	'Reunion'	},
 {	name:	'Romania'	,	value:	'Romania'	},
 {	name:	'Russia'	,	value:	'Russia'	},
 {	name:	'Rwanda'	,	value:	'Rwanda'	},
 {	name:	'Saint Helena'	,	value:	'Saint Helena'	},
 {	name:	'Saint Kitts and Nevis'	,	value:	'Saint Kitts and Nevis'	},
 {	name:	'Saint Lucia'	,	value:	'Saint Lucia'	},
 {	name:	'Saint Pierre and Miquelon'	,	value:	'Saint Pierre and Miquelon'	},
 {	name:	'Saint Vincent and Grenadines'	,	value:	'Saint Vincent and Grenadines'	},
 {	name:	'Samoa'	,	value:	'Samoa'	},
 {	name:	'San Marino'	,	value:	'San Marino'	},
 {	name:	'Sao Tome and Principe'	,	value:	'Sao Tome and Principe'	},
 {	name:	'Saudi Arabia'	,	value:	'Saudi Arabia'	},
 {	name:	'Senegal'	,	value:	'Senegal'	},
 {	name:	'Serbia'	,	value:	'Serbia'	},
 {	name:	'Seychelles'	,	value:	'Seychelles'	},
 {	name:	'Sierra Leone'	,	value:	'Sierra Leone'	},
 {	name:	'Singapore'	,	value:	'Singapore'	},
 {	name:	'Sint Maarten'	,	value:	'Sint Maarten'	},
 {	name:	'Slovakia'	,	value:	'Slovakia'	},
 {	name:	'Slovenia'	,	value:	'Slovenia'	},
 {	name:	'Solomon Islands'	,	value:	'Solomon Islands'	},
 {	name:	'Somalia'	,	value:	'Somalia'	},
 {	name:	'South Africa'	,	value:	'South Africa'	},
 {	name:	'South Georgia and South Sandwich Islands'	,	value:	'South Georgia and South Sandwich Islands'	},
 {	name:	'South Korea'	,	value:	'South Korea'	},
 {	name:	'South Sudan'	,	value:	'South Sudan'	},
 {	name:	'South Sudan'	,	value:	'South Sudan'	},
 {	name:	'Spain'	,	value:	'Spain'	},
 {	name:	'Sri Lanka'	,	value:	'Sri Lanka'	},
 {	name:	'Sudan'	,	value:	'Sudan'	},
 {	name:	'Suriname'	,	value:	'Suriname'	},
 {	name:	'Svalbard and Jan Mayen Islands'	,	value:	'Svalbard and Jan Mayen Islands'	},
 {	name:	'Swaziland'	,	value:	'Swaziland'	},
 {	name:	'Sweden'	,	value:	'Sweden'	},
 {	name:	'Switzerland'	,	value:	'Switzerland'	},
 {	name:	'Syria'	,	value:	'Syria'	},
 {	name:	'Taiwan'	,	value:	'Taiwan'	},
 {	name:	'Tajikistan'	,	value:	'Tajikistan'	},
 {	name:	'Tanzania'	,	value:	'Tanzania'	},
 {	name:	'Thailand'	,	value:	'Thailand'	},
 {	name:	'Timor-Leste (East Timor)'	,	value:	'Timor-Leste (East Timor)'	},
 {	name:	'Togo'	,	value:	'Togo'	},
 {	name:	'Tokelau'	,	value:	'Tokelau'	},
 {	name:	'Tonga'	,	value:	'Tonga'	},
 {	name:	'Trinidad and Tobago'	,	value:	'Trinidad and Tobago'	},
 {	name:	'Tunisia'	,	value:	'Tunisia'	},
 {	name:	'Turkey'	,	value:	'Turkey'	},
 {	name:	'Turkmenistan'	,	value:	'Turkmenistan'	},
 {	name:	'Turks and Caicos Islands'	,	value:	'Turks and Caicos Islands'	},
 {	name:	'Tuvalu'	,	value:	'Tuvalu'	},
 {	name:	'Uganda'	,	value:	'Uganda'	},
 {	name:	'Ukraine'	,	value:	'Ukraine'	},
 {	name:	'United Arab Emirates'	,	value:	'United Arab Emirates'	},
 {	name:	'United Kingdom'	,	value:	'United Kingdom'	},
 {	name:	'United States'	,	value:	'United States'	},
 {	name:	'Uruguay'	,	value:	'Uruguay'	},
 {	name:	'Uzbekistan'	,	value:	'Uzbekistan'	},
 {	name:	'Vanuatu'	,	value:	'Vanuatu'	},
 {	name:	'Venezuela'	,	value:	'Venezuela'	},
 {	name:	'Vietnam'	,	value:	'Vietnam'	},
 {	name:	'Virgin Islands'	,	value:	'Virgin Islands'	},
 {	name:	'Wallis and Futuna Islands'	,	value:	'Wallis and Futuna Islands'	},
 {	name:	'Yemen'	,	value:	'Yemen'	},
 {	name:	'Zambia'	,	value:	'Zambia'	},
 {	name:	'Zimbabwe'	,	value:	'Zimbabwe'	}
 ];


//Drop down object for the states list
$scope.form.usastatelist=[
{	name:	"Alberta"	,	value:	"AB"	},
{	name:	"British Columbia "	,	value:	"BC"	},
{	name:	"Manitoba"	,	value:	"MB"	},
{	name:	"New Brunswick"	,	value:	"NB"	},
{	name:	"New Foundland"	,	value:	"NL"	},
{	name:	"Northwest Territories"	,	value:	"NT"	},
{	name:	"Nova Scotia"	,	value:	"NS"	},
{	name:	"Nunavut"	,	value:	"NU"	},
{	name:	"Ontario"	,	value:	"ON"	},
{	name:	"Prince Edward Island"	,	value:	"PE"	},
{	name:	"Quebec"	,	value:	"QC"	},
{	name:	"Saskatchewan"	,	value:	"SK"	},
{	name:	"Yukon Territory"	,	value:	"YT"	},
{	name:	"Alabama"	,	value:	"AL"	},
{	name:	"Alaska"	,	value:	"AK"	},
{	name:	"Arizona"	,	value:	"AZ"	},
{	name:	"Arkansas"	,	value:	"AR"	},
{	name:	"California"	,	value:	"CA"	},
{	name:	"Colorado"	,	value:	"CO"	},
{	name:	"Connecticut"	,	value:	"CT"	},
{	name:	"Delaware"	,	value:	"DE"	},
{	name:	"Florida"	,	value:	"FL"	},
{	name:	"Georgia"	,	value:	"GA"	},
{	name:	"Hawaii"	,	value:	"HI"	},
{	name:	"Idaho"	,	value:	"ID"	},
{	name:	"Illinois"	,	value:	"IL"	},
{	name:	"Indiana"	,	value:	"IN"	},
{	name:	"Iowa"	,	value:	"IA"	},
{	name:	"Kansas"	,	value:	"KS"	},
{	name:	"Kentucky"	,	value:	"KY"	},
{	name:	"Louisiana"	,	value:	"LA"	},
{	name:	"Maine"	,	value:	"ME"	},
{	name:	"Maryland"	,	value:	"MD"	},
{	name:	"Massachusetts"	,	value:	"MA"	},
{	name:	"Michigan"	,	value:	"MI"	},
{	name:	"Minnesota"	,	value:	"MN"	},
{	name:	"Mississippi"	,	value:	"MS"	},
{	name:	"Missouri"	,	value:	"MO"	},
{	name:	"Montana"	,	value:	"MT"	},
{	name:	"Nebraska"	,	value:	"NE"	},
{	name:	"Nevada"	,	value:	"NV"	},
{	name:	"New Hampshire"	,	value:	"NH"	},
{	name:	"New Jersey"	,	value:	"NJ"	},
{	name:	"New Mexico"	,	value:	"NM"	},
{	name:	"New York"	,	value:	"NY"	},
{	name:	"North Carolina"	,	value:	"NC"	},
{	name:	"North Dakota"	,	value:	"ND"	},
{	name:	"Ohio"	,	value:	"OH"	},
{	name:	"Oklahoma"	,	value:	"OK"	},
{	name:	"Oregon"	,	value:	"OR"	},
{	name:	"Pennsylvania"	,	value:	"PA"	},
{	name:	"Rhode Island"	,	value:	"RI"	},
{	name:	"South Carolina"	,	value:	"SC"	},
{	name:	"South Dakota"	,	value:	"SD"	},
{	name:	"Tennessee"	,	value:	"TN"	},
{	name:	"Texas"	,	value:	"TX"	},
{	name:	"Utah"	,	value:	"UT"	},
{	name:	"Vermont"	,	value:	"VT"	},
{	name:	"Virginia"	,	value:	"VA"	},
{	name:	"Washington"	,	value:	"WA"	},
{	name:	"West Virginia"	,	value:	"WV"	},
{	name:	"Wisconsin"	,	value:	"WI"	},
{	name:	"Wyoming"	,	value:	"WY"	}
]


//Drop down object for the Industry list
$scope.form.industries=[
{name:'Accommodations',value:'Accommodations'},
{name:'Accounting ',value:'Accounting '},
{name:'Advertising ',value:'Advertising '},
{name:'Aerospace',value:'Aerospace'},
{name:'Agriculture & Agribusiness ',value:'Agriculture & Agribusiness '},
{name:'Air Transportation',value:'Air Transportation'},
{name:'Apparel & Accessories ',value:'Apparel & Accessories '},
{name:'Auto ',value:'Auto '},
{name:'Banking ',value:'Banking '},
{name:'Beauty & Cosmetics',value:'Beauty & Cosmetics'},
{name:'Biotechnology ',value:'Biotechnology '},
{name:'Chemical',value:'Chemical'},
{name:'Communications',value:'Communications'},
{name:'Computer ',value:'Computer '},
{name:'Construction ',value:'Construction '},
{name:'Consulting',value:'Consulting'},
{name:'Consumer Products ',value:'Consumer Products '},
{name:'Education ',value:'Education '},
{name:'Electronics',value:'Electronics'},
{name:'Employment',value:'Employment'},
{name:'Energy ',value:'Energy '},
{name:'Entertainment & Recreation ',value:'Entertainment & Recreation '},
{name:'Fashion ',value:'Fashion '},
{name:'Financial Services ',value:'Financial Services '},
{name:'Fine Arts',value:'Fine Arts'},
{name:'Food & Beverage ',value:'Food & Beverage '},
{name:'Health ',value:'Health '},
{name:'Information ',value:'Information '},
{name:'Information Technology',value:'Information Technology'},
{name:'Insurance',value:'Insurance'},
{name:'Journalism & News',value:'Journalism & News'},
{name:'Legal Services ',value:'Legal Services '},
{name:'Manufacturing ',value:'Manufacturing '},
{name:'Media & Broadcasting ',value:'Media & Broadcasting '},
{name:'Medical Devices & Supplies',value:'Medical Devices & Supplies'},
{name:'Motion Pictures & Video ',value:'Motion Pictures & Video '},
{name:'Music',value:'Music'},
{name:'Pharmaceutical ',value:'Pharmaceutical '},
{name:'Public Administration',value:'Public Administration'},
{name:'Public Relations',value:'Public Relations'},
{name:'Publishing ',value:'Publishing '},
{name:'Real Estate ',value:'Real Estate '},
{name:'Retail ',value:'Retail '},
{name:'Service ',value:'Service '},
{name:'Sports ',value:'Sports '},
{name:'Technology ',value:'Technology '},
{name:'Telecommunications ',value:'Telecommunications '},
{name:'Tourism',value:'Tourism'},
{name:'Transportation ',value:'Transportation '},
{name:'Travel',value:'Travel'},
{name:'Utilities ',value:'Utilities '},
{name:'Video Game ',value:'Video Game '},
{name:'Web Services ',value:'Web Services '}
]

$scope.countrytostate=function(){
		if($scope.form.country!="United States")
			{	$scope.form.state=" "
		return true
	}
	return false

}

$scope.form.validation=function(formelement){

	if(formelement.$pristine)
		return " "
	console.log(formelement.value)
}


$scope.completevalidation=function(mainform){
	let checker=1;

	for(let property in mainform){  
		if((/^[^\$]/).test(property))
		{ 
			$scope.formvalidations[property]=(!mainform[property].$valid);
			checker*=mainform[property].$valid
				 	 // console.log($scope.formvalidations[property]+" for "+property)
				 	}
				 }
				 $scope.allok=(!checker)
				 // console.log(checker+" is the complete status")
				}


})

//Directive to restrict the field length for the phone number and the zipcode

app.directive("fieldlength", [function() {
	return {
		restrict: "A",
		link: function(scope, htmlelement, attrs) {
			let maxlength = parseInt(attrs.fieldlength);
			angular.element(htmlelement).on("keypress", function(e) {
				if (this.value.trim().length > maxlength-1) e.preventDefault();
			});
		}
	}
}]);

//Directive for password complexity to match the requirements given

app.directive("complex", function() {

	return {

		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {

			ctrl.$parsers.unshift(function(password) {
				let checkcap = /[A-Z]/.test(password);
				let checklow = /[a-z]/.test(password);
				let checknum = /\d/.test(password);
				let checknalfa = /\W/.test(password);
				let value = checkcap + checklow + checknum + checknalfa;

				if ((password.length >= 8) && (value >= 3)) {
					ctrl.$setValidity('complexity', true);
					return password;
				}
				else {
					ctrl.$setValidity('complexity', false);
					return undefined;
				}

			});
		}
	}
});

//Directive for password confirmation to match the given password

app.directive("confirmpwd",function(){
	return {
		require: '^ngModel',
		scope: {
			password: "=confirmpwd"
		},
		link: function(scope,element,attr,ctrl){
			ctrl.$validators.confirmpwd=function(modelvalue){
				return modelvalue===scope.password.$modelValue;
			}

			scope.$watch("password.$modelValue",function(){
				ctrl.$validate()
			})
		}
	}
})

// app.directive("statechecker",function(){
// 	return{
// 		require:'^ngModel',
// 		scope:{
// 			country:"=statechecker"
// 		},
// 		 link: function(scope,element,attribute,ctrl){
// 		 		ctrl.$validators.state=function(modelvalue){
// 				return modelvalue==="United States"
// 				console.log(ctrl.$validators.country)
// 			}

// 		 		scope.$watch("country.$modelValue",function(x){
// 		 			console.log("changed")

// 		 		},true)
// 		 }
// 	}
// })




