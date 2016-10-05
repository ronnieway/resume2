//- inject:jade
var me = this;

var AppViewModel = function () {
	me.show0 =  ko.observable(false);
	me.show1 =  ko.observable(false);
	me.show2 =  ko.observable(false);
	me.show3 =  ko.observable(false);
	me.show4 =  ko.observable(false);
	me.showArray = ko.observableArray([me.show0, me.show1, me.show2, me.show3, me.show4]); 
	this.chosenExperience = null,
	this.chosenEducation = null,
	this.chosenProject = null,
	this.background = 'url("img/background.jpg")',
	this.myName = ko.observable('Ruslan'),
	this.mySurname = ko.observable('Dorozhovets'),
	this.myFullName = ko.computed(function() {
		return this.myName() + ' ' + this.mySurname();
	}, this);
	this.myTitle = 'Experienced Web Developer',
	this.myPhoto = './img/myPhoto.jpg',
	this.myContacts = [
		{
			type: 'email',
			contact: 'ruslan.dorozhovets@gmail.com',
			link: 'mailto:ruslan.dorozhovets@gmail.com',
			icon: 'img/email.png'
		},
		{
			type: 'phone',
			contact: '+380 67 400 80 22',
			link: 'tel:+380 67 400 80 22',
			icon: 'img/phone.png'
		}
	],
	this.myAdditionalContacts = [
		{
			type: 'Location',
			contact: 'Kyiv, Ukraine',
			icon: 'img/location.png',
			link: ''
		},
		{
			type: 'Skype',
			contact: 'ruslan.dorozhovets',
			link: '<a href="skype:ruslan.dorozhovets?call" target="_blank">ruslan.dorozhovets</a>',
			icon: 'img/skype.png'
		},
		{
			type: 'LinkedIn',
			contact: 'linkedin.com/in/ruslandorozhovets',
			link: '<a href="https://www.linkedin.com/in/ruslandorozhovets" target="_blank">linkedin.com/in/ruslandorozhovets</a>',
			icon: 'img/linkedin.png'
		},
		{
			type: 'GitHub',
			contact: 'github.com/ronnieway',
			link: '<a href="https://github.com/ronnieway" target="_blank">github.com/ronnieway</a>',
			icon: 'img/github.png'
		},
		{
			type: 'WebSite',
			contact: 'www.rdesigned.com',
			link: '<a href="http://www.rdesigned.com" target="_blank">www.rdesigned.com</a>',
			icon: 'img/www.png'
		}
	],
	this.renderPopup = function() {
		var renderPopupShow = 0;
		if (renderPopupShow == 0) {
			renderPopupShow = 1;
		} else {
			renderPopupShow = 0;
		}
	},
	this.myMotto = 'Everything is possible!',
	this.myExperience = [
		{
			company: 'Social Talents LLC',
			webSite: 'www.socialtalents.com',
			icon: 'img/www.png',
			location: 'Ukraine',
			startDate: 'Aug 2014',
			finishDate: 'Ongoing',
			more: {
				positions: 'business analyst, test manager',
				functions: 'business analysis and requirements specification creation for 2 different projects, testing process management',
				achievements: 'development of these projects are based on the requirement specifications I have created, testing process I have managed assures the high quality of the products represented to the customers'
			}
		},
		{
			company: 'ABO LLC',
			webSite: 'www.abo.ua',
			icon: 'img/www.png',
			location: 'Ukraine',
			startDate: 'Jun 2012',
			finishDate: 'May 2014',
			more: {
				positions: 'head of business analysis and testing department',
				functions: 'department operations management, business requirements creation, testing process management, project management',
				achievements: 'I have implemented testing, business analysis and creation of user documentation processes within the company; I have led the projects for the company’s business processes re-engineering, and the project for the customer loyalty program implementation'
			}
		},
		{
			company: 'Fotochka LLC',
			location: 'Ukraine',
			startDate: 'Apr 2011',
			finishDate: 'May 2012',
			more: {
				positions: 'business analyst, project manager, co-founder',
				functions: 'overall management and responsibility for the web-site creating, and the online service setup and running project',
				achievements: 'I have managed the web site creation and all the business processes (including web site development, printing facilities connection, orders and payment systems implementation) set up and running'
			}
		},
		{
			company: 'Superphoto LLC',
			location: 'Ukraine, Netherlands',
			startDate: 'Sep 2008',
			finishDate: 'Apr 2011',
			more: {
				positions: 'business analyst, project manager',
				functions: 'overall management and responsibility for the Ukrainian and the Dutch web-sites development, as well as for the online services set up and running',
				achievements: 'I have led all the set up and launch activities of the online photobook creation and printing service in Ukraine. Also, I have led the similar set up and launch activities in the Netherlands'
			}
		},
		{
			company: 'Softline JSC',
			webSite: 'www.softline.kiev.ua',
			icon: 'img/www.png',
			location: 'Ukraine',
			startDate: 'Jan 2003',
			finishDate: 'Apr 2008',
			more: {
				positions: 'pre-sale analyst, project manager, business acceptance tester',
				functions: 'management of the international projects; participation in the pre-sale process; planning, organizing, performing and management of the business acceptance testing',
				achievements: 'I have managed more than 15 small to medium projects; I have established and led the pre-sale process within the company; I have implemented business acceptance testing process from the scratch'
			}
		},
		{
			company: 'Software Mac Kiev',
			webSite: 'www.mackiev.com',
			icon: 'img/www.png',
			location: 'Ukraine',
			startDate: 'Feb 2001',
			finishDate: 'Nov 2002',
			more: {
				positions: 'technical editor, tester',
				functions: 'testing and editing user documentation, approving high quality of released products, organizing and managing testing process within team',
				achievements: 'I have successfully tested more than 10 projects'
			}
		}
	],
	this.myEducation = [
		{
			university: 'Udacity',
			webSite: 'www.udacity.com',
			icon: 'img/www.png',
			location: 'online',
			degree: 'Senoir web developer nanodegree',
			startDate: 'Dec 2015',
			finishDate: 'ongoing'
		},
		{
			university: 'University of the Economics and Law "Krok"',
			webSite: 'www.krok.edu.ua',
			icon: 'img/www.png',
			location: 'Ukraine',
			degree: 'Courses of Quality, Standardization and Certification',
			startDate: '2004',
			finishDate: '2006'
		},
		{
			university: 'National University of "Kyiv-Mohyla Academy"',
			webSite: 'www.ukma.edu.ua',
			icon: 'img/www.png',
			location: 'Ukraine',
			degree: 'Bachelor of Arts in Sociology',
			startDate: '1995',
			finishDate: '2002'
		}
	],
	this.myLanguages = [
		{
			language: 'Ukrainian',
			level: 'native',
			additional: ''
		},
		{
			language: 'Russian',
			level: 'fluent',
			additional: ''
		},
		{
			language: 'English',
			level: 'fluent',
			additional: 'IELTS 7,5 on Dec 2015 '
		},
	],
	this.mySkills = [
		'HTML 5',
		'CSS 3',
		'JS / ECMA script',
		'jQuery',
		'Knockout JS',
		'Angular JS',
		'Backbone JS',
		'Ember JS',
		'Wordpress',
		'Shopify',
		'Bootstrap',
		'Web Design',
		'Usability',
		'UI/UX',
		'Business Analysis',
		'Project Management',
		'Software Testing'
	],
	this.myProjects = [
		{
			name: 'Meet Me Cafe',
			webSite: 'http://rdesigned.com/sites/meetmeup/',
			icon: 'img/www.png',
			siteImg: 'img/meetmecafe.png',
			shortDescription: 'Web / mobile application for the meeting appointments',
			technologies: [
				'HTML 5',
				'CSS 3',
				'JS',
				'jQuery',
				'Bootstrap',
				'Google GEO API',
				'FourSquare API',
				'FireBase'
			]
		},
		{
			name: 'Aquason',
			webSite: 'http://aquason.com.ua/',
			icon: 'img/www.png',
			siteImg: 'img/aquason.png',
			shortDescription: 'Web site for the company that provides aqua floating services',
			technologies: [
				'PSD to HTML',
				'HTML 5',
				'CSS 3',
				'JS',
				'jQuery',
				'Wordpress'
			]
		},
		{
			name: 'Pole-vovk',
			webSite: 'http://rdesigned.com/sites/polevovk/',
			icon: 'img/www.png',
			siteImg: 'img/pole-vovk.png',
			shortDescription: 'The  single page web site for the hunting complex',
			technologies: [
				'HTML 5',
				'CSS 3',
				'JS',
				'jQuery',
				'HTML SVG'
			]
		},
		{
			name: 'Legato Law',
			webSite: 'http://rdesigned.com/sites/legato/',
			icon: 'img/www.png',
			siteImg: 'img/legatolaw.png',
			shortDescription: 'Simple single page website that clearly and easily represents the law company and its services to the clients',
			technologies: [
				'HTML 5',
				'CSS 3',
				'JS',
				'jQuery',
				'UI/UX'
			]
		}
	],
	me.showBox = function(c, event){
		var element = event.target.id;
		if (element == 'additionalIcon0') {
			me.show0(true);
		} else if (element == 'additionalIcon1') {
			me.show1(true);
		} else if (element == 'additionalIcon2') {
			me.show2(true);
		} else if (element == 'additionalIcon3') {
			me.show3(true);
		} else if (element == 'additionalIcon4') {
			me.show4(true);
		} else {
			alert('Something is wrong there');
		}
	},
	$('body').on('click', function(){
		me.show0(false);
		me.show1(false);
		me.show2(false);
		me.show3(false);
		me.show4(false);
	}),
	me.moreChange = function(c, event){
		var element = event.target.id;
		for (var i=0; i<100; i++){
			var guess = 'moreA' + i;
			var element1=document.getElementById('moreA' + i);
			var element2=document.getElementById('moreExperience' + i);
			if (element == guess) {
				for (var j=0; j<100; j++){
					var moreToShow = document.getElementById('moreA' + j);
					if (moreToShow) {
						ko.applyBindingsToNode(moreToShow, { visible: 1 });
					}
					var expToClose = document.getElementById('moreExperience' + j);
					if (expToClose) {
						ko.applyBindingsToNode(expToClose, { visible: 0 });
					}
				}

				ko.applyBindingsToNode(element1, { visible: 0 });
				ko.applyBindingsToNode(element2, { visible: 1 });
			}
		}
	},
	me.moreProjects = function(){
		var moreDiv = document.getElementById('projectsMore');
		var moreButton = document.getElementById('moreB');
		var lessButton = document.getElementById('lessB');
		ko.applyBindingsToNode(moreButton, { visible: 0 });
		ko.applyBindingsToNode(lessButton, { visible: 1 });
		ko.applyBindingsToNode(moreDiv, { visible: 1 });
	},
	me.lessProjects = function(){
		var lessDiv = document.getElementById('projectsMore');
		var lessButton = document.getElementById('lessB');
		var moreButton = document.getElementById('moreB');
		ko.applyBindingsToNode(lessButton, { visible: 0 });
		ko.applyBindingsToNode(moreButton, { visible: 1 });
		ko.applyBindingsToNode(lessDiv, { visible: 0 });
	};
};

ko.applyBindings(new AppViewModel());

//- endinject
