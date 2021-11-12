(window.webpackJsonpresume=window.webpackJsonpresume||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"resumeData",function(){return k}),t.d(n,"headerStrings",function(){return w}),t.d(n,"about",function(){return N}),t.d(n,"aboutStrings",function(){return S}),t.d(n,"contactus",function(){return j}),t.d(n,"contactusStrings",function(){return I}),t.d(n,"footer",function(){return C}),t.d(n,"testimonials",function(){return D}),t.d(n,"portfolio",function(){return O}),t.d(n,"portfolioStrings",function(){return A}),t.d(n,"resume",function(){return T}),t.d(n,"resumeStrings",function(){return P});var r=t(0),l=t.n(r),o=t(7),s=t.n(o),i=(t(13),t(1)),c=t(2),m=t(4),u=t(3),d=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.resumeData.header,t=e.headerStrings;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},t.showNavigation),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},t.hideNavigation),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},t.home)),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},t.about)),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},t.resume)),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},t.works)),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},t.testimonials)),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},t.contact)))," ")," ",l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},a.headline),l.a.createElement("h3",null,a.headlinePostScript),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},l.a.createElement("li",null,l.a.createElement("a",{href:a.gmail},l.a.createElement("i",{className:"fa fa-mail-reply"}))),l.a.createElement("li",null,l.a.createElement("a",{href:a.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:a.linkedin,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:a.stackExchange,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-stack-exchange"}))),l.a.createElement("li",null,l.a.createElement("a",{href:a.facebook,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-facebook"})))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(r.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.about,t=e.aboutStrings;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profile.jpeg",alt:""})),l.a.createElement("div",{className:"ten columns main-col"},l.a.createElement("h2",null,t.aboutMe),l.a.createElement("p",{className:"aboutMe"},a.aboutMe),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,t.contactDetails),l.a.createElement("p",{className:"address"},a.address)),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:"/downloads/".concat(a.fileName),target:"_blank",rel:"noopener noreferrer",className:"button"},l.a.createElement("i",{className:"fa fa-download"}),t.download)))))))}}]),a}(r.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"getEducationData",value:function(){var e=this.props.resume.education;return Object.keys(e).map(function(a){return e[a]}).map(function(e,a){return l.a.createElement(r.Fragment,{key:a},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.universityOrSchool,",",e.place),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.yearStart,"-",e.yearEnd),l.a.createElement("span",null,"\u2022"),l.a.createElement("em",null,e.marksType,"-",e.cgpaOrPercentage)),e.achievements.map(function(e,a){return l.a.createElement("p",{key:a},e)}))))})}},{key:"getSkillsData",value:function(e){var a=this.props.resume.skills[e];return l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},a.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("span",{className:"bar-expand ".concat(e.formatter)}),l.a.createElement("em",null,e.data))})))}},{key:"getWorkData",value:function(){var e=this.props.resume.work.companies,a=[];return Object.keys(e).forEach(function(t){e[t].forEach(function(e){a.push(e)})}),a.map(function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.projectName),l.a.createElement("p",{className:"info"},e.companyName,l.a.createElement("span",null,"\u2022"),e.designation," ",l.a.createElement("span",null,"\u2022"),e.domain,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.yearStart,"-",e.yearEnd)),l.a.createElement("p",null,e.projectDetails)))})}},{key:"render",value:function(){var e=this.props,a=e.resume.skills,t=e.resumeStrings,n=e.resumeStrings.skillsStrings;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,t.education))),l.a.createElement("div",{className:"nine columns main-col"},this.getEducationData())),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,t.skills))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,a.description),l.a.createElement("br",null),l.a.createElement("table",{className:"tablebars"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,n.languages),l.a.createElement("th",null,n.frameworks))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,this.getSkillsData("languages")),l.a.createElement("td",null,this.getSkillsData("jsFrameworks"))))),l.a.createElement("table",{className:"tablebars"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,n.frameworks),l.a.createElement("th",null,n.databases))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,this.getSkillsData("frameworks")),l.a.createElement("td",null,this.getSkillsData("dbms"))))),l.a.createElement("table",{className:"tablebars"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,n.designPatterns),l.a.createElement("th",null,n.testingframeworks))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,this.getSkillsData("designPatterns")),this.getSkillsData("testing")))),l.a.createElement("table",{className:"tablebars"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,n.editors),l.a.createElement("th",null,n.objectRelationalMappingFrameworks))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,this.getSkillsData("ide")),l.a.createElement("td",null,this.getSkillsData("orm"))))),l.a.createElement("table",{className:"tablebars"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,n.containers),l.a.createElement("th",null,n.sourceControls))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,this.getSkillsData("containers")),l.a.createElement("td",null,this.getSkillsData("sourceControl"))))),l.a.createElement("table",{className:"tablebars"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,n.tools),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,this.getSkillsData("projectTracking")),l.a.createElement("td",null)))))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,t.work))),l.a.createElement("div",{className:"nine columns main-col"},this.getWorkData())))}}]),a}(r.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"getModal",value:function(){var e=this.props,a=e.portfolio.projects,t=e.portfolioStrings;return a.map(function(e,a){return l.a.createElement("div",{id:"modal-0".concat(a),className:"popup-modal mfp-hide",key:a},l.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/modals/m-".concat(e.image),alt:""}),l.a.createElement("div",{className:"description-box"},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.description),l.a.createElement("span",{className:"categories"},l.a.createElement("i",{className:"fa fa-tag"}),e.branding)),l.a.createElement("div",{className:"link-box"},l.a.createElement("a",{href:e.url,target:"_blankc"},t.details),l.a.createElement("a",{className:"popup-modal-dismiss"},t.close)))})}},{key:"getPortfolioItem",value:function(){return this.props.portfolio.projects.map(function(e,a){return l.a.createElement("div",{className:"columns portfolio-item",key:a},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-0".concat(a),data:"title"},l.a.createElement("img",{alt:e.name,src:"images/portfolio/".concat(e.image)}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.type))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"icon-plus"})))))})}},{key:"render",value:function(){var e=this.props.portfolioStrings;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},this.getPortfolioItem())," ")," ",this.getModal())," ")}}]),a}(r.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.testimonials.quotes;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.map(function(e,a){return l.a.createElement("li",{key:a},e)})))))))}}]),a}(r.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.contactus,t=e.contactusStrings;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"}),l.a.createElement("div",{className:"ten columns"},l.a.createElement("h1",null,"Get In Touch."),l.a.createElement("pre",null,l.a.createElement("p",{className:"lead"},t.phoneNo," ",a.phoneNo,"  ",t.email," ",a.email)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"})))}}]),a}(r.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.footer;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,e.copyright),l.a.createElement("li",null,e.developedBy),l.a.createElement("li",null,e.postscript))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(r.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,this.props),l.a.createElement(g,this.props),l.a.createElement(h,this.props),l.a.createElement(E,this.props),l.a.createElement(f,this.props),l.a.createElement(b,this.props),l.a.createElement(v,this.props))}}]),a}(r.Component),k={imagebaseurl:"images/profile.jpeg",name:"Anmol Rastogi",role:"Full Stack Developer",header:{headline:"Hi, I'm Anmol Rastogi.",headlinePostScript:l.a.createElement(r.Fragment,null,"I'm a ",l.a.createElement("span",null,"Full Stack Developer"),", based out of ",l.a.createElement("span",null,"India")," ","having experience of ",l.a.createElement("span",null,function(){var e=new Date("2013-08-12"),a=new Date;return(function(e,a){var t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),n=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate());return Math.ceil((n-t)/864e5)}(e,a)/365).toFixed(1)}()," "),"years in"," ",l.a.createElement("span",null,"programming and development")," of software applications. I create awesome applications."," ",l.a.createElement("a",{className:"smoothscroll",href:"#about"},"Start scrolling"," "),"to learn more"," ",l.a.createElement("a",{className:"smoothscroll",href:"#about"},"about me"),"."),gmail:"mailto:anmolamity@gmail.com",github:"https://github.com/RastogiAnmol",linkedin:"https://www.linkedin.com/in/rastogianmol/",stackExchange:"https://stackoverflow.com/users/7739073/anmol-rastogi?tab=profile",skype:"",whatsapp:"https://wa.me/919066497874",facebook:"https://www.facebook.com/anmol.rastogi.100"}},w={showNavigation:"Show navigation",hideNavigation:"Hide navigation",home:"Home",about:"About ME",resume:"Resume",works:"Works",testimonials:"Testimonials",contact:"Contact"},S={aboutMe:"About Me",contactDetails:"Contact Details",download:"Download Resume"},N={aboutMe:l.a.createElement(r.Fragment,null,"I\u2019ve always been someone who has both a creative and a logical side.",l.a.createElement("br",null),"The first language I programmed in is ",l.a.createElement("strong",null,"LOGO")," which I used in year 1997 to draw geometrical figures when I was 6 years old.",l.a.createElement("br",null),"I just happen to come across a ",l.a.createElement("strong",null,"C++")," book which my cousin was reading, and I got fascinated with it. I started learning ",l.a.createElement("strong",null,"C++")," in year 2006 when I was 15 years old. I wrote programs to draw patterns on terminal, and some sorting algorithms like ",l.a.createElement("strong",null,"bubble sort, insertion sort etc.")," and ofcourse ",l.a.createElement("strong",null,"Linked lists")," using structures.",l.a.createElement("br",null),l.a.createElement("br",null),"My love for programming is everlasting.",l.a.createElement("br",null),l.a.createElement("br",null),"I am a ",l.a.createElement("strong",null,"Full stack developer")," now and which I always have been.",l.a.createElement("br",null),"From last few years ",l.a.createElement("strong",null,"JavaScript, Java and C#")," have become my primary languages. ",l.a.createElement("strong",null,"It is purely incidental although."),l.a.createElement("br",null),"I like ",l.a.createElement("strong",null,"React JS")," and some other Node frameworks. I have used ",l.a.createElement("strong",null,"GraphQL with JavaScript")," as of now and would love to use it with other programming languages as well."),address:l.a.createElement(r.Fragment,null,l.a.createElement("span",null,l.a.createElement("strong",null,"Anmol Rastogi")),l.a.createElement("br",null),l.a.createElement("span",null,"E-1410, Ozone Evergreens, Survey No. 53 and 54, Harlur Main Rd, PWD Quarters",l.a.createElement("br",null),"1st Sector HSR, Kasavanahalli, Bangalore, KA IND"),l.a.createElement("br",null),l.a.createElement("span",null,"(+91) 90 66497 874")),fileName:"anmol_rastogi_full_stack_8_years.pdf"},j={phoneNo:"+91 9066497874 ",email:"anmolamity@gmail.com"},I={email:"email me at:",phoneNo:"call me on:"},C={copyright:"\xa9 Copyright 2019 Anmol Rastogi",developedBy:"Developed by Anmol Rastogi using React",postscript:""},D={quotes:[l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."),l.a.createElement("cite",null,"Steve Jobs"))),l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"All that we are is the result of what we have thought. "),l.a.createElement("cite",null,"Buddha"))),l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"I have no special talent. I am only passionately curious. "),l.a.createElement("cite",null,"Albert Einstein"))),l.a.createElement(r.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"The future belongs to those who prepare for it today."),l.a.createElement("cite",null,"Malcolm X")))]},O={projects:[{type:"Web Development",name:"Resume Builder",image:"into-the-light.jpg",url:"https://github.com/RastogiAnmol/resume",description:"This project is built using ReactJS. The project is built in \n    such a way that it can be utilised to create resume of any person. I will create an\n    updated version of this which will get data from MongoDB",branding:"Branding, UI development"},{type:"Web Development",name:"Sudoku UI",image:"console.jpg",url:"https://github.com/RastogiAnmol/sudokuUI",description:"This project is built using ReactJS and Redux. This is the UI of a famous\n    game Sudoku. This project uses an API call to run",branding:"Branding, Web Game development"},{type:"REST API",name:"Sudoku API",image:"origami.jpg",url:"https://github.com/RastogiAnmol/sudoku",description:"This project is built using .Net Core. It acts as REST API for Sudoku\n    UI.This project uses backtracking to solve Sudoku",branding:"Branding, API development"}]},A={heading:"Check Out Some of My Works.",close:"Close",details:"Details"},T={work:{companies:{siemens:[{companyName:"Siemens",projectName:"HCP Telecare",type:"Web and Apps Development",client:"",domain:"Healthcare R&D",designation:"Senior Software Engineer",yearStart:"May 2019",yearEnd:"Current",projectDetails:l.a.createElement(r.Fragment,null,"TeleCare empowers hearing care professionals (HCPs) to proactively address the needs of their patients during the trial period of hearing aids. This enhanced service package brings together guided assistance and direct communication after the patient\u2019s initial fitting through video calls and full live remote tuning.More info"," ",l.a.createElement("a",{href:"https://telecare.signiausa.com/#/login s",target:"_blank",rel:"noopener noreferrer"},"here")),projectPoints:l.a.createElement(r.Fragment,null,"\u2022 User Interface (UI) Development using ReactJS, GraphQL, ES6 JavaScript, JSX, HTML \u2022 Creating Business logic using Java Spring Boot, C# ASP.NET Core MVC Web API \u2022 Containerization and orchestration using docker and kubernetes \u2022 Creating/altering DB tables and stored procedures. \u2022 Change tracking and project tracking using Azure Devops \u2022 Unit testing using Junit, NUnit, Enzyme, Jest. \u2022 Participating in code reviews, and identify issues or deviations from best practices \u2022 Collaborating on component level technical designs")}],cerner:[{companyName:"Cerner",projectName:"EServices (Single Service Portal)",type:"Web Development",client:"",domain:"Healthcare",designation:"Associate Senior Software Engineer",yearStart:"June 2016",yearEnd:"May 2019",projectDetails:l.a.createElement(r.Fragment,null,"Single Service Portal is the project to make changes to our support web portals (eService and ITWxSP) to mitigate impact of switching support from Navigator to Remedy. The goal was to have a single landing site for all our clients' support needs and to up front address changes that would impact the users by the switch to Remedy. That way the clients will not notice the transition. The ticketing system allows for a consistent numbering scheme for Service Request regardless of the source application of the ticket.It is also the staging place for SR requests from eService so that the client can submit requests even when the destination support system (or other middle man) is down.More info"," ",l.a.createElement("a",{href:"https://eservice.ucern.com/BwlSecurity/Login?ReturnUrl=%2f",target:"_blank",rel:"noopener noreferrer"},"here")),projectPoints:l.a.createElement(r.Fragment,null,"\u2022 User Interface (UI) Development using ReactJS, Redux, JavaScript, JSX, HTML, CSS, Gulp. \u2022 Creating Business logic using C# ASP.NET MVC Web API, Dapper, Autofac, Java Spring Boot \u2022 Change tracking using GitHub and project tracking using JIRA. \u2022 Unit testing using NUnit and automation Testing using Selenium. \u2022 Participating in code reviews and identify issues or deviations from best practices")},{companyName:"Cerner",projectName:"Flashes",type:"Web Development",client:"",domain:"Healthcare",designation:"Associate Senior Software Engineer",yearStart:"June 2016",yearEnd:"May 2019",projectDetails:l.a.createElement(r.Fragment,null,"Flashes is a Spring Boot application that is designed to allow users to search for, view and download English-language Cerner flash documents. Cerner flash documents are detailed documents that are published to provide important information that clients and associates need to maintain Cerner systems. Flashes are used to officially announce new releases, regulatory updates, technology changes, and critical issues."),projectPoints:l.a.createElement(r.Fragment,null,"\u2022 User Interface (UI) Development using ReactJS, Redux, JavaScript, JSX, HTML, CSS, Gulp. \u2022 Creating Business logic using C# ASP.NET MVC Web API, Dapper, Autofac, Java Spring Boot \u2022 Change tracking using GitHub and project tracking using JIRA. \u2022 Unit testing using NUnit and automation Testing using Selenium. \u2022 Participating in code reviews and identify issues or deviations from best practices")}],itc:[{companyName:"ITC Infotech",projectName:"GE Pipeline Integration (PVI Dashboard)",type:"Web Development",client:"General Electric (GE)",domain:"Oil and Gas (petroleum)",designation:"Associate IT Consultant",yearStart:"December 2014",yearEnd:"June 2016",projectDetails:l.a.createElement(r.Fragment,null,"GE Pipeline Integration (PVI Dashboard) PVI Dashboard is a comprehensive Web-based pipeline GIS and reporting tool that allows distributed access to pipeline information. It provides a secure environment to manage and report information related to the pipeline. The application provides simple, quick and direct access to facility and integrity- related pipeline data to a distributed group"),projectPoints:l.a.createElement(r.Fragment,null,"\u2022 Change tracking using Tortoise SVN. \u2022 Developing and enhancing applications using C# ASP.NET MVC, AngularJS, JQuery, LINQ, HTML, CSS, Web Services, Entity Framework. \u2022 Project tracking using JIRA")},{companyName:"ITC Infotech",projectName:"Gemini Studio",type:"Web and Desktop Development",client:"Danske Bank",domain:"BFSI (Banking financial services and insurance)",designation:"Associate IT Consultant",yearStart:"August 2013",yearEnd:"December 2014",projectDetails:l.a.createElement(r.Fragment,null,"Gemini Studio Gemini Studio is a development tool (IDE) and runtime infrastructure for frontend applications. The IDE boasts of having drag and drop controls implemented using C# which creates web pages very quickly. The business for the project is the Shared Services Center and the main target groups are business developers and frontend developers."),projectPoints:l.a.createElement(r.Fragment,null,"\u2022 Change tracking using Tortoise SVN. \u2022 Developing and enhancing applications using C# ASP.NET MVC, AngularJS, JQuery, LINQ, HTML, CSS, Web Services, Entity Framework. \u2022 Project tracking using JIRA")}]}},education:{1:{yearStart:"2009",yearEnd:"2013",place:"UP",degree:"B. Tech in Computer Science and Engineering",marksType:"CGPA",universityOrSchool:"AMITY University",cgpaOrPercentage:"8.18/10",achievements:["Awarded merit scholarship during the program for the outstanding academic performance for the\n        academic session 2010-11","Awarded merit scholarship during the program for the outstanding academic performance for the\n      academic session 2011-12","Awarded merit scholarship during the program for the outstanding academic performance for the\n      academic session 2012-2013."]},2:{yearStart:"2007",yearEnd:"2008",place:"Pilani",degree:"Senior School Certificate Examination (Class XII)",marksType:"Aggregate",universityOrSchool:"Birla Senior Secondary School",cgpaOrPercentage:"80.4%",achievements:["Awarded for being in top 10% in All India National Physics Olympiad"]}},skills:{description:"Kickstarted my journey using 'C++' and then moved on to learn new languages. Feed my brain Codecademy, Udemy, Medium, Stackoverflow and lot of practice. I do rely on good text editors :). Here are some of the languages, frameworks, databases and tools that i have worked on :-",languages:[{data:"JavaScript",formatter:"javascript"},{data:"HTML5",formatter:"html5"},{data:"C#",formatter:"csharp"},{data:"Java",formatter:"java"}],jsFrameworks:[{data:"React",formatter:"react"},{data:"Redux",formatter:"redux"},{data:"GraphQL",formatter:"graphql"},{data:"jQuery",formatter:"jquery"}],frameworks:[{data:"REST using MVC Web API",formatter:"restmvccharp"},{data:"Spring Boot",formatter:"springboot"},{data:".Net Core",formatter:"dotnetcore"}],containers:[{data:"Docker",formatter:"docker"},{data:"Kubernetes",formatter:"kubernetes"}],projectTracking:[{data:"JIRA",formatter:"jira"},{data:"Azure Devops",formatter:"azuredevops"}],designPatterns:[{data:"Factory",formatter:"factory"},{data:"Singleton",formatter:"singleton"},{data:"Adapter",formatter:"adapter"},{data:"Decorator",formatter:"decorator"},{data:"SOLID principles",formatter:"solid"}],dbms:[{data:"PostgreSQL",formatter:"postgresql"},{data:"MongoDB",formatter:"mongodb"},{data:"SQL Server",formatter:"sqlserver"}],ide:[{data:"Visual Studio Code",formatter:"visualstudiocode"},{data:"Visual Studio",formatter:"visualstudio"},{data:"IntelliJ Idea",formatter:"intellijidea"}],sourceControl:[{data:"GitHub",formatter:"github"},{data:"Team foundation Server (TFS)",formatter:"tfs"}],testing:[{data:"Selenium",formatter:"selenium"},{data:"NUnit",formatter:"nunit"},{data:"JUnit",formatter:"junit"},{data:"Jest",formatter:"jest"},{data:"Enzyme",formatter:"enzyme"},{data:"React testing library",formatter:"react-testing-library"}],orm:[{data:"Dapper",formatter:"dapper"},{data:"Entity Framework",formatter:"entityframework"},{data:"Hibernate",formatter:"hibernate"}]}},P={work:"Work",education:"Education",skills:"Skills",skillsStrings:{languages:"Languages",frameworks:"Frameworks",databases:"Databases",designPatterns:"Design Paterns",tools:"Tools",editors:"Editors",sourceControls:"Source Controls",testingframeworks:"Testing Frameworks",objectRelationalMappingFrameworks:"Object relational mapping frameworks (ORM)",containers:"Containers and Orchestration"}};s.a.render(l.a.createElement(y,n),document.getElementById("root"))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5478f21a.chunk.js.map