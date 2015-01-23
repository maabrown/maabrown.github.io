var bio = {
	"name": "Mark Brown II",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "804-313-1158",
		"email": "markbrown09@gmail.com",
		"github": "maabrown",
		"twitter": "SayinSomeIsh",
		"location": "Washington, D.C."
	},
	"welcomeMessage": "Welcome to my Online Resume!",
	
	"skills": [
		"Public Speaking", 
		"Project Management",
		"Curating General Merriment",
		"Front-End Web Development"
		],
	"biopic" : "images/MarkBrownII2.jpg",
	"display" : function() {
			var formattedbioRole = HTMLheaderRole.replace("%data%", bio.role);
			$('#header').prepend(formattedbioRole);
			var formattedbioName = HTMLheaderName.replace("%data%", bio.name);
			$('#header').prepend(formattedbioName);
			var formattedcontactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$('#topContacts').append(formattedcontactMobile);
			var formattedcontactEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$('#topContacts').append(formattedcontactEmail);
			var formattedcontactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$('#topContacts').append(formattedcontactTwitter);
			var formattedcontactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$('#topContacts').append(formattedcontactGithub);
			var formattedcontactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$('#topContacts').append(formattedcontactLocation);
			var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
			$('#header').prepend(formattedbioPic);
			var formatttedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
			$('#header').append(formatttedWelcomeMsg);
			$('#footerContacts').append(formattedcontactMobile);
			var formattedcontactEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$('#footerContacts').append(formattedcontactEmail);
			var formattedcontactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$('#footerContacts').append(formattedcontactTwitter);
			var formattedcontactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$('#footerContacts').append(formattedcontactGithub);
			var formattedcontactLocation = HTMLlocation.replace("%data%", bio.contacts.location);


		}
	} //bio object


var work = {     
	"jobs": [     
	{
		"employer": "The Aspen Institute",
		"title": "Program Coordinator",
		"location": "Washington, D.C.",
		"dates": "February 2014 - Present",
		"description": "Maintain web presence of the College Excellence Program, Develops new content and layour for our web site, Conducts research on community college reform and student success, Performs administrative duties as assigned"
	},
	{
		"employer": "Chinatown Coffee",
		"title": "Barista",
		"location": "Washington, D.C.",
		"dates": "May 2013 - Present",
		"description": "Opens coffeeshop undersupervised, Performs minimal accounting duties including counting the safe and making change from the bank, Demonstrates mastery of latte art"
	},
	{
		"employer": "ACME Bakery and Cafe",
		"title": "Project Manager",
		"location": "Miami, FL",
		"dates": "Aug 2012 - April 2013",
		"description": "Defined priorities and managed multiple projects (such as Special Order documentation, cash and bank systems, pastry & bread display and handling) to minimize product loss and confusion amongst the service team"
	}
	],
	"display" : function() {
			for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedjobs = formattedemployer + formattedtitle + formattedworkDates + formattedLocation + formattedDescription;
			$('.work-entry:last').append(formattedjobs);
			}
		}
};

var projects = {
	"projects": [
		{
			"title": "Web Project",
			"dates": "September 2014",
			"description": "Website Layout 1",
			"images": [
				"http://placehold.it/250/89D8FE/000000",
				"http://placehold.it/250/FB8600/000000",
				"http://placehold.it/250/B0D42B/000000"
			]	
		},
		{
			"title": "JavaScript Project",
			"dates": "January 2015",
			"description": "Project for Udacity Nanodegree",
			"images": [
				"http://placehold.it/250/FB8600/000000",
				"http://placehold.it/250/B0D42B/000000",
				"http://placehold.it/250/5192F1/000000"
			]
		}
	],
	"display": function() {
		for (index in projects.projects) {
		$('#projects').append(HTMLprojectStart);
	    
	    var projecttitleformat = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
		
	    
	    var projectdatesformat = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
	    

	    var projectdescriptionformat = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
		

	    var projectformatted = projecttitleformat + projectdatesformat + projectdescriptionformat;
		$('.project-entry:last').append(projectformatted);

		if (projects.projects[index].images.length > 0) {
	    	for (image in projects.projects[index].images) {
	    		var projectimagesformat = HTMLprojectImage.replace('%data%', projects.projects[index].images[image]);
	    	$('.project-entry:last').append(projectimagesformat);
	    	}
	    };

		}
	}
};



var education = {
	"schools": [
		{
			"name": "General Assembly",
			"location": "Washington, D.C.",
			"degree": "Credential",
			"major": ["Front-End Web Development"],
			"dates": "2014",
			"url": "https://generalassemb.ly/washington-dc"
		},
		{
			"name": "Brown University",
			"location": "Providence, RI",
			"degree": "BA",
			"major": ["Ethnic Studies", "Theatre Arts"],
			"dates": "2009",
			"url": "www.brown.edu"
		}, // Brown University object
		{
			"name": "Rappahannock Community College",
			"location": "Warsaw, VA",
			"degree": "Associate of Science",
			"major": ["Science", "General Studies"],
			"dates": "2005",
			"url": "http://www.rappahannock.edu"
		} // RCC object
	], // schools array
	"onlineCourses": [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/nanodegrees"
		} //udacity object
	], //online courses array
	"display" : function() {
			for (edu in education.schools) {
			$('#education').append(HTMLschoolStart);
			
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
			$('.education-entry:last').append(formattedschoolName);
			
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			$('.education-entry:last').append(formattedschoolDegree);		
			
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			$('.education-entry:last').append(formattedschoolDates);		

			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			$('.education-entry:last').append(formattedschoolLocation);
		
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
			$('.education-entry:last').append(formattedschoolMajor);

			}
			for (edu in education.onlineCourses) {
			$('#education').append(HTMLschoolStart);
			var formattedonlineschoolTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
			$('.education-entry:last').append(formattedonlineschoolTitle);
		
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school);
			$('.education-entry:last').append(formattedonlineSchool);		

			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates);
			$('.education-entry:last').append(formattedonlineDates);
		
			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url);
			$('.education-entry:last').append(formattedonlineURL);
		
			}
		}
	
}; // education object

$(document).click(function(loc) {
  console.log("This is X" + loc.pageX) + console.log(",") + console.log(" This is Y" + loc.pageY);

});


bio.skills.display = function() {
		if (bio.skills.length != 0) {
	    $('#header').append(HTMLskillsStart);
	    var bioskillsformat = HTMLskills.replace("%data%", bio.skills[0]);
	    $('#skills').append(bioskillsformat);
	    var bioskillsformat = HTMLskills.replace("%data%", bio.skills[1]);
	    $('#skills').append(bioskillsformat);
	    var bioskillsformat = HTMLskills.replace("%data%", bio.skills[2]);
	    $('#skills').append(bioskillsformat);
	    var bioskillsformat = HTMLskills.replace("%data%", bio.skills[3]);
	    $('#skills').append(bioskillsformat);
			}
	}


$('#mapDiv').append(googleMap);

bio.skills.display();
bio.display();
education.display();
work.display();
projects.display();

$('#main').append(internationalizeButton);
var inName = function() { // Do not expect an argument.
    var oldName = $('#name').html() || ''; // Grab the name yourself.
    var arrName = oldName.trim().split(' ');
    var formattedName =
        arrName[0].slice(0,1).toUpperCase() +
        arrName[0].slice(1).toLowerCase() + " " +
        arrName[1].toUpperCase() + " " + arrName[2].toUpperCase();
    return formattedName;
  };
