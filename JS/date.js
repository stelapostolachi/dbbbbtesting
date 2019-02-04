                  //How to instantiate a date

//var d = new Date();
//console.log(d);
//
//var d = new Date(100000000000);
//console.log(d);
//
//var d = new Date("October 13,2018 11:13:00");
//console.log(d);
//
//var d = new Date(99,5,24,11,33,30,0);//5 is June because index //nr is 0.
//console.log(d);

//                    Date formats


//var a = new Date("2015-03-25");//ISO diferent date.
//console.log(a);
//
//var b = new Date("03/25/2015");//SHORT
//console.log(b);
//
//var c = new Date("Mar 25 2015");//LONG
//console.log(c);
//
//var d = new Date("Wednesday March 25 2015");//FULL
//console.log(d);
////OUTPUT IS THE SAME 
          

//                       getFullYear() Method

//var moonLanding= new Date("July 20,69 00:20:18");
//console.log(moonLanding.getFullYear());//1969
//
//var today =  new Date();
//var year = today.getFullYear();
//console.log(year)//2018 recording today's year
//
////                     getMonth()   Method
//
//var moonLanding = new Date("July 20,69 00:20:18");
//console.log(moonLanding.getMonth());//6
//
//var today =  new Date();
//var month = today.getMonth();
//console.log(month)//7 recording today's month 
//
////                     getDate() Method
//
//var moonLanding = new Date("July 20,69 00:20:18");
//console.log(moonLanding.getDate());//20
//
//var today =  new Date();
//var date = today.getDate();
//console.log(date)//16 recordind today's date 
//
////                     getHours() Method
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getHours());//8
//
//var today =  new Date();
//var hours = today.getHours();
//console.log(hours)//11 recording to local time 
//
////                    getMinutes() method
//var moonLanding = new Date("July 20,69 00:20:18");
//console.log(moonLanding.getMinutes());//20
//
//var today =  new Date();
//var minutes = today.getMinutes();
//console.log(minutes)//22 recording to locall time 
//
////                     getSeconds()  method
//var moonLanding = new Date("July 20,69 00:20:18");
//console.log(moonLanding.getSeconds());//18 seconds
//
//var today =  new Date();
//var seconds = today.getSeconds();
//console.log(seconds)//53 recording today's seconds 
//
////                     getMilliseconds() method
//
//var moonLanding = new Date("July 20,69 00:20:18");
//console.log(moonLanding.getMilliseconds());//20
//
//var today =  new Date();
//var milliseconds = today.getMilliseconds();
//console.log(milliseconds)//339
//
////                      getTime() method
//
//var moonLanding = new Date("July 20,69 00:20:18");
//console.log(moonLanding.getTime());//-14240382000
//
//var today =  new Date();
//var time = today.getTime();
//console.log(time)//1534433357061
//
////                      getDay() method
//var moonLanding = new Date("July 20,69 00:20:18");
//console.log(moonLanding.getDay());//0
//
//var today =  new Date();
//var day = today.getDay();
//console.log(day)//4

//                       setDate() method
//var event = new Date ("August 19,1975 23:15:30");
//event.setDate(24);
//console.log(event.getDate());//24
//console.log(event);
//
//var theBigDate = new Date(1962,6,7);
//theBigDate.setDate(24);
//console.log(theBigDate);//Tue Jul 24 1962 
//theBigDate.setDate(32);
//console.log(theBigDate);//Wed Aug 01 1962 
//theBigDate.setDate(42);
//console.log(theBigDate);//Tue Sep 11 1962 
//
////                        setFullYear() method
//var event = new Date ("August 19,1975 23:15:30");
//event.setFullYear(2016);
//console.log(event.setFullYear());//2016
//console.log(event);//Fri Aug 19 2016 23:15:30
//
//var theBigDate = new Date(1962,6,7);
//theBigDate.setFullYear(2018,11,3);
//console.log(theBigDate);//Mon Dec 03 2018 00:00:00 GMT-0500
//
////                       setHours() methods
//
//var event = new Date ("August 19,1975 23:15:30");
//event.setHours(20);
//console.log(event);//Fri Aug 19 2016 23:15:30
//
//var bigDate = new Date();
//bigDate.setHours(7);
//console.log(bigDate);
//
////                    setMinutes()
//var event = new Date ("August 19,1975 23:15:30");
//event.setMinutes(45);
//console.log(event);//Tue Aug 19 1975 23:45:30 GMT-0400
//
//var bigDate = new Date();
//bigDate.setMinutes(7);
//console.log(bigDate);//Thu Aug 16 2018 11:07:04 GMT-0400 
//
////                      setMonth() method
//var event = new Date ("August 19,1975 23:15:30");
//event.setMonth(3);
//console.log(event);//Sat Apr 19 1975 23:15:30 GMT-0400
//
//var bigDate = new Date();
//bigDate.setMonth(10);
//console.log(bigDate);//Fri Nov 16 2018 12:17:17 GMT-0500 
//
////                 setSeconds() method
//
//var event = new Date ("August 19,1975 23:15:30");
//event.setSeconds(00);
//console.log(event);//Tue Aug 19 1975 23:15:00 GMT-0400
//
//var bigDate = new Date();
//bigDate.setSeconds(10);
//console.log(bigDate);//Thu Aug 16 2018 12:20:10 GMT-0400
//
////                  setTime() methods
//
//var event1 = new Date ("July 1 1999");
//var event2=new Date();
//event2.setTime(event1.getTime())
//console.log(event1);//Thu Jul 01 1999 00:00:00 GMT-0400
//console.log(event2);//Thu Jul 01 1999 00:00:00 GMT-0400


//write a program to calculate your age ,
//    note:if your birthday not happen et , do not include that year



//var birthDay = new Date("06/02/1994");
//var today = new Date();
//var years=today.getFullYear()-birthDay.getFullYear();
//
//birthDay.setFullYear(today.getFullYear());
//if(today<birthDay){
//    years--
//}
//  console.log(years)  
//  

















    













