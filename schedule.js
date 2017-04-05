var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    scheduleEvent = hue.scheduledEvent;

// var hueScene = hue.scene;
//     sceneUpdates = hueScene.create();

//     sceneUpdates = withName("My Scene")
//     .withLights(5);

    // api.modifyScene(sceneId, sceneUpdates, function(err, result){
    //     if (err) throw err;
    //     displayResults(result);
    // });

// var brightness = 255;
// lightState = hue.lightState;
// var state = lightState.create().on().white(500, 100);

var displayResult = function (result) {
    console.log(JSON.stringify(result, null, 2));
};

// var d = new Date();
// var dstr = d.toTimeString();
// //console.log(dstr);
// start_t = new Date().getTime()

var host = "128.122.151.182",
    username = "v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs",
    api = new HueApi(host, username),
    mySchedule0,            // white
    mySchedule1,            // color
    mySchedule2,
    mySchedule3,
    mySchedule4,
    mySchedule5,
    mySchedule6,
    mySchedule7,            // white
    mySchedule8,            // color
    mySchedule9,
    mySchedule10,
    mySchedule11,
    mySchedule12,
    mySchedule13;
    // mySchedule14,
    // mySchedule15,
    // mySchedule16,
    // mySchedule17;


mySchedule0 = scheduleEvent.create()
    .withName("s0")
    .withDescription("s0")
    // .withTransitionSlow()
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
            "on": true,
            "bri": 100
        }
    }).on("2017-04-04T22:00:00"); // L2 100 bri
   


mySchedule1 = scheduleEvent.create()
    .withName("s1")
    .withDescription("s1")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
        "method" : "PUT",
        "body"   : {
           "on": true,
			"bri": 254,
			"hue": 14957,
			"sat": 141,
        }
    }).on("2017-04-04T22:00:00"); //colorloop




mySchedule2 = scheduleEvent.create()
    .withName("s2")
    .withDescription("s2")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
            "on": false,
        }
    }).on("2017-04-05T00:10:00"); //l2 off


mySchedule3 = scheduleEvent.create()
    .withName("s3")
    .withDescription("s3")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
        "method" : "PUT",
        "body"   : {
           "on": true,
			"bri": 254,
			"hue": 7114,
			"sat": 252,
        }
    })
    .on("2017-04-05T00:10:00"); //twilight 5


mySchedule4 = scheduleEvent.create()
    .withName("s4")
    .withDescription("s4")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
        "method" : "PUT",
        "body"   : {
            "on": true,
			"bri": 137,
			"hue": 40721,
			"sat": 253,
        }
    })
    .on("2017-04-05T04:05:20"); //lavender


mySchedule5 = scheduleEvent.create()
    .withName("s5")
    .withDescription("s5")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
           "on": true,
			"bri": 240,
        }
    })
    .on("2017-04-05T04:05:20"); //L2 

    mySchedule6 = scheduleEvent.create()
    .withName("s6")
    .withDescription("s6")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
            "on": true,
            "bri": 100,
        }
    }).on("2017-04-05T09:05:30"); //l2 bri 100
   


mySchedule7 = scheduleEvent.create()
    .withName("s7")
    .withDescription("s7")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
        "method" : "PUT",
        "body"   : {
           "on": true,
			"bri": 240,
			"hue": 14957,
			"sat": 141,
        }
    }).on("2017-04-05T09:05:30");



mySchedule8 = scheduleEvent.create()
    .withName("s8")
    .withDescription("s8")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
        "method" : "PUT",
        "body"   : {
          "on": true,
			"bri": 212,
			"hue": 58323,
			"sat": 147,
        }
    }).on("2017-04-05T12:05:40");//blossom


mySchedule9 = scheduleEvent.create()
    .withName("s9")
    .withDescription("s9")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
           "on": false,
        }
    }).on("2017-04-05T12:07:00");


mySchedule10 = scheduleEvent.create()
    .withName("s10")
    .withDescription("s10")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
        "method" : "PUT",
        "body"   : {
            "on": true,
			"bri": 254,
			"hue": 7114,
			"sat": 252,
        }
    }).on("2017-04-05T02:07:10"); //twilight


mySchedule11 = scheduleEvent.create()
    .withName("s11")
    .withDescription("s11")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
           "on": true,
			"bri": 254,
        }
    }).on("2017-04-05T02:24:00"); //l2  sunset



mySchedule12 = scheduleEvent.create()
    .withName("s12")
    .withDescription("s12")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
        "method" : "PUT",
        "body"   : {
           "on": true,
			"bri": 130,
			"hue": 62639,
			"sat": 253,
        }
    }).on("2017-04-05T03:39:00"); //pink


mySchedule13 = scheduleEvent.create()
    .withName("s13")
    .withDescription("s13")
    .withCommand(
    {
        "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
        "method" : "PUT",
        "body"   : {
            "on": true,
			"bri": 125,
        }
    }).on("2017-04-05T03:39:00");


// mySchedule14 = scheduleEvent.create()
//     .withName("s14")
//     .withDescription("s14")
//     .withCommand(
//     {
//         "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
//         "method" : "PUT",
//         "body"   : {
//            "on": true,
// 			"bri": 137,
// 			"hue": 47112,
// 			"sat": 252,
//             "effect": "none"
//         }
//     })
//     .on("2017-04-04T22:00:00"); //tacky blue

//     mySchedule15 = scheduleEvent.create()
//     .withName("s15")
//     .withDescription("s15")
//     .withCommand(
//     {
//         "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
//         "method" : "PUT",
//         "body"   : {
//             "on": true,
// 			"bri": 60,
//         }
//     })
//     .on("2017-04-04T22:00:00");


// mySchedule16 = scheduleEvent.create()
//     .withName("s16")
//     .withDescription("s16")
//     .withCommand(
//     {
//         "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/5/state",
//         "method" : "PUT",
//         "body"   : {
//            "on": false,
//         }
//     })
//     .on("2017-04-05T00:30:00");

//     mySchedule17 = scheduleEvent.create()
//     .withName("s16")
//     .withDescription("s16")
//     .withCommand(
//     {
//         "address": "/api/v9zQY-HEs7uhgWb3Etg2qwxKEV7kP-XwqMNh8mPs/lights/4/state",
//         "method" : "PUT",
//         "body"   : {
//            "on": false,
//         }
//     })
//     .on("2017-04-05T00:30:00");



api.createSchedule(mySchedule0, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys0");
});

api.createSchedule(mySchedule1, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys1");
});

api.createSchedule(mySchedule2, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys2");
});

api.createSchedule(mySchedule3, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys3");
});


api.createSchedule(mySchedule4, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys4");
});

api.createSchedule(mySchedule5, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys5");
});

api.createSchedule(mySchedule6, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys6");
});

api.createSchedule(mySchedule7, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys7");
});

api.createSchedule(mySchedule8, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys8");
});

api.createSchedule(mySchedule9, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys9");
});

api.createSchedule(mySchedule10, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys10");
});


api.createSchedule(mySchedule11, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys11");
});

api.createSchedule(mySchedule12, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys12");
});

api.createSchedule(mySchedule13, function(err, result) {
    if (err) throw err;
    displayResult(result);
    console.log("mys13");
});

// api.createSchedule(mySchedule14, function(err, result) {
//     if (err) throw err;
//     displayResult(result);
//     console.log("mys3");
// });


// api.createSchedule(mySchedule15, function(err, result) {
//     if (err) throw err;
//     displayResult(result);
//     console.log("mys4");
// });

// api.createSchedule(mySchedule16, function(err, result) {
//     if (err) throw err;
//     displayResult(result);
//     console.log("mys5");
// });

// api.createSchedule(mySchedule17, function(err, result) {
//     if (err) throw err;
//     displayResult(result);
//     console.log("mys5");
// });

// MIDNIGHT -L1 COLORLOOP , L2 on low bri approx 100 5am - 5 hours 
// SUNRISE 6:34 am make TWILIGHT -->15 mins L2 off
// 5am 11am- L1 no colorloop , "bri": 137,"hue": 40721,"sat": 253, --> lavender  , L2 approx bri 240
// 11am - 4pm L1 colorloop, L2 low bri 100 
//  4pm - 7:24pm - blossoms "bri": 212,"hue": 58323,"sat": 147, L2 on off every 30 secs try 
// 7:24 - sunset --> 15 mins --> Twilight on": true,	"bri": 254,	"hue": 7114,"sat": 252, L2 bri 254
//7:39 - 10 - pink --."on": true, "bri": 130, "hue": 62639,"sat": 253,L2 off
// 10- midnight - //"bri": 137,"hue": 47112,	"sat": 252, --> tacky blue L2 60 bri

