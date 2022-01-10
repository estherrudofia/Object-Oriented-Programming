// // OBJECT LITERALS
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y:1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };


// //FACTORIES (FOR DUPLICATED OBJECTS)
// // Factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// // dot notation
// circle.draw();

// // CONSTRUCTOR FUNCTION
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// // Circle.call(window, 1);
// // Circle.call({}, 1);
// Circle.apply({} [1,2,3]); // argument can be passed in an array

// const another = new Circle(1);


// ADDING/REMOVING PROPERTIES
// const circle = new Circle(10);

// circle.location = {x: 1};
// const propertyName = 'location';
// cirle[propertyName] = {x: 1};

// // ENUMERATING PROPERTIES IN OBJECT
// for (let key in circle) {
//     // checking for only the properties
//     if (typeof circle[key] !== 'function') {
//         console.log(key, circle[key]);
//     }    
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle) {
//     console.log('circle has a radius.');
// }

// primitive(objects) and value types
// let x = {value: 10};
// let y = x;

// x.values = 20;

// let obj = {value: 10};

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// // ABSTRACTION
// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = {x: 0, y: 0};

//     // let computeOptimumLocation = function(factor) {

//     // }
//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     };

//     this.draw = function() {
//         // computeOptimumLocation(0.1);
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//             throw new Error('Invalid loction.');
//             defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(10);
// // circle.getDefaultLocation();


//EXERCISE
// STOP WATCH

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.duration = duration;
    this.start = function() {
        if (running) {
            throw new Error('Stopwatch has started already');

            running = true;
            startTime = new Date();
        }
    };
    this.stop = function() {
        if (running) { 
            throw new Error(`Stopwatch is not started`);

            running = true;

            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        }
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    });
}

// const sw = new Stopwatch();