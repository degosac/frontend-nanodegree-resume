//http://imgur.com/Wa8qWQe
var bio =
{
  "name" : "Musa Eren Öğretici",
  "role" : "Mobile Developer",
  "welcomeMessage" : "Hi there, Welcome",
  "contacts" :
  {
    "email" : "erenogretici@gmail.com",
    "mobile" : "+90 546 204 52 39",
    "github" : "degosac",
    "twitter" : "@degosac1",
    "location" : "Istanbul"
  },
  "pictureUrl" : "images/me.jpg",
  "skills" :
  [
    "Java", "JavaScript", "Android", "C#"
  ]
};

var educations =
{
  "schools" :
  [
    {
      "name" : "Hazım Kulak Anadolu Lisesi",
      "city" : "Aksaray, Turkey",
      "degree" : "4.20",
      "majors" : ["Highschool"],
      "dates" : 2007,
      "url" : "http://aksarayhkal.meb.k12.tr/"
    },
    {
      "name" : "NorthEastern University",
      "city" : "Boston, MA, USA",
      "degree" : "86",
      "majors" : ["ESL Programme"],
      "dates" : 2009,
      "url" : "http://www.northeastern.edu/"
    },
    {
      "name" : "Bahçeşehir Üniversitesi",
      "city" : "Istanbul, Turkey",
      "degree" : "2.20",
      "majors" : ["Software Engineering"],
      "dates" : 2015,
      "url" : "http://www.bahcesehir.edu.tr/"
    }
  ],

    "onlineCourses" :
    [
      {
        "title" : "JavaScript Syntax",
        "school" : "Udacity",
        "dates" : 2016,
        "url" : "https://www.udacity.com/course/ud804"
      }
    ]
};

var works =
{
  "jobs" :
  [
    {
      "employer" : "Touristica",
      "title" : "Designer",
      "location" : "Istanbul,Turkey",
      "dates" : 2009,
      "description" :"worked as a email designer for a tourism company."
    },
    {
      "employer" : "Yatırım Finansman",
      "title" : "IT Intern",
      "location" : "Istanbul,Turkey",
      "dates" : 2013,
      "description" :"worked as a it Intern for a finans company."
    }
  ]
};

var projects =
{
  "projects" :
  [
    {
      "title" : "Android Mobile Application",
      "dates" : 2015,
      "description" :"an application that organize your events base on your facebook likes, etc.",
      "images" :
      [
        "images/1.jpg","images/2.jpg"
      ]

    }
  ]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureUrl);
$("#header").append(formattedPicture);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

if(bio.skills.length>0){
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);

}

//projects.display();

function displayWorks(){
  for (job in works.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", works.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", works.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer+formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", works.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", works.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDesc = HTMLworkDescription.replace("%data%", works.jobs[job].description);
    $(".work-entry:last").append(formattedDesc);
  }
}

function locationizer(work_obj) {
    var locations = [];
    for (job in work_obj.jobs){
     locations.push(work_obj.jobs[job].location);
    }
    return locations;
}
/*
function inName(name){
  name = bio.name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);*/

projects.display = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDesc);
    for(image in projects.projects[project].images){
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
}

displayWorks();
projects.display();

$("#mapDiv").append(googleMap);
