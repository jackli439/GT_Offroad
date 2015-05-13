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
    }
        
}])
