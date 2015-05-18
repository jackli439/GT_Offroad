angular.module('thisAppFact', [])
.factory('MainmenuBoxes', [function(){
    return{
        getCalendar: function(){
            obj = {
                num: 1,
                desc: "Calendar",
                hover: false,
                link: "calendar",
                clicked: false,
                text: ""
            
            }
            return obj;
        },
        getWhatIsGtor: function(){
            obj = {
                num: 2,
                desc: "What is GTOR?",
                hover: false,
                link: "",
                clicked: false,
                text: "GT Off-Road is a group of roughly 20 undergraduate students. Though most members are studying Mechanical Engineering, there is no major requirement to be on the team and there are a variety of majors on the team and we are always looking for more. As a team, our goal is to compete in the Baja SAE(Society of Automotive Engineers) Design Competition. We design and build an off-road vehicle from scratch every year. During the summer we travel to competitions around the country to test our designs against over 200 colleges from around the world. The cars are judged based on design report and analysis, cost, acceleration, braking, hill climb, tractor pull, mud bog, rock crawling, and a 4 hour endurance race. Points earned in each of these events are totaled up to determine the final rankings.The student members are responsible for 100% of the design and fabrication of the car. Members get to see their designs advance through design and fabrication and eventually see them in competition with other teams' designs. Members are trained in all of the machining skills they will need to fabricate the parts of the car, so no experience with either cars or machining is necessary to join the team.There are a few standards that all teams must follow. The most important of these are the strict safety standards set by SAE. Also, all teams are givin identical Briggs & Straton 10hp motors that they must use. Aside from that, teams have the freedom to design the car however they want."
            }
            return obj;
        },
        getHowDoIJoin : function(){
            obj = {
                num: 3,
                desc: "How Do I Join?",
                hover: false,
                link: "",
                clicked: false,
                text: "Joining the team is very simple. Show up at the Student Competition Center, number 850,(555 14th Street NW) at the corner of 14th Street and Hemphill Avenue any Monday or Thursday at 7PM. Any Georgia Tech student may join the team, the only prerequisite is an interest in winning a Baja SAE Competitition.You do not need to be a specific major and you do not need any experience. If you have experience in design, manufacturing, wrenching on cars, or team management, GT Off Road is the place to apply those skills. If you plan on working on the car, Wear clothes that you don't mind getting dirty (including close-toed shoes). See you in the shop! Note: You may walk, take the green route stinger during the day, or drive to the Student Competition Center. Enter through the front door. If you do not have Buzzcard access, the front desk attendant will let you in. The shop is at the back of the building, walk down the main corridor and enter the shop through the last door on the left."
            }
            return obj;
        },
        getInterested: function(){
            obj = {
                num: 4,
                desc: "Interested?",
                hover: false,
                link: "interested",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getPhotosAndVideos: function() {
            obj = {
                num: 5,
                desc: "Photos and Videos",
                hover: false,
                link: "photosandvideos",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getHistory: function() {
            obj = {
                num: 6,
                desc: "History",
                hover: false,
                link: "history",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getRankings: function() {
            obj = {
                num: 7,
                desc: "Rankings",
                hover: false,
                link: "rankings",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getContact: function() {
            obj = {
                num: 8,
                desc: "Contact",
                hover: false,
                link: "",
                clicked: false,
                text: "For general information or inquiries, contact the team at: georgiatechoffroad@gmail.com"
            }
            return obj;
        },
        getNull: function() {
            obj = {
                num: 9,
                desc: "",
                hover: false,
                link: "",
                clicked: false,
                text: ""
            }
            return obj;
        }
    }
        
}])
.factory('HistoryYears', [function(){
    return {
        getYears: function(){
            obj = [
                {
                    year: 2006,
                    desc: 'This was the first time since 2000 that the team was unable to bring two vehicles to competition, the stress of building two cars the year before was not an experience many were willing to repeat. The \'06\' car saw significant changes to the front end of the car in an effort to gain more driver leg room and an emphasis was placed on lowering the center of gravity as much as possible. Complications during construction prevented the hi/low/reverse gearbox designed for the car from being ready for East, and the frankenstein-esque "48 hour drivetrain" was developed and installed in the 3 days leading up to competition. The \'06 car is currently undergoing a major overhaul and will be running the teams first ever fully manual transmission for competition in 2007.'
                },{
                    year: 2005,
                    desc: 'Thanks to the generous support of our major sponsors, GT Off-Road was able to bounce back from the loss of our vehicles and tools and put together a new shop and two brand new cars. Names the New Black Car and the Grey Car, they were nearly identical in chassis design to Angus but changed to sprung lower arms in the rear and the Grey car respresented the team\'s first attempt at four wheel steering, which won the Polaris Suspension Design Award at the East competition that year. Rule changes after the West event in 2005 disallowed these cars from competing again in 2006.'
                },{
                    year: 2004,
                    desc: 'The 2004 car was named "Black Angus" or "Angus" for short. "Angus" was very similar to the "black" car in size and shape, the primary difference being a custom gearbox and a 2" greater wheelbase. "Angus" competed in Portland and was ranked 12th in design at East before meeting the same fate as the "Black" car and was never seen again.'
                },
                {
                    year: 2003,
                    desc: 'The "Black" Car went to 3 competitions in 2003 and 2 in 2004 before it was stolen in Quebec at the East competition. This was the most successful car to date, placing 11th overall in Provo, UT in 2003.'
                },{
                    year:2002,
                    desc: 'The "Silver" Car (named for its frame, which is not visible here) survived 6 competitions over 2 seasons including a top 10 finish in the East endurance event. It served as a driver-training vehicle, and then was retired in 2005. '
                },{
                    year: 2001,
                    desc: 'The "White" car was the second car designed by GT Off-Road. It made it through 6 competitions over 2 years and finished in the top 10 of the \'02 East Endurance race. It served as a driver-training vehicle, and then was retired in 2005.'
                },{
                    year: 2000,
                    desc: 'The "Yellow" car was the first car built by GT Off-Road. It went to one race in Wisconsin and took top Rookie Honors. All but the frame was scrapped for parts, so the Yellow car lives on only in memory.'
                }
            ]
            return obj;
        }
    }

}])