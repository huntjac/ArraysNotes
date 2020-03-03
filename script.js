//declaring an empty array

let arr =[] ;


//declare and add elements (initializing the array)

let names = ["John", "George", "Susan" , "Carti"];

let runIt = function(){
    alert(names);

    alert(names[4]);
    //use variables to grab an element and combine it with a string
    let thisGuy = names[3];
    let message = "is a good name";

    alert(thisGuy + message);
};

let dothePush = function(){

    // ADDING FUNCTIONS

    // ADDS TO THE END
    alert(arr);
    arr.push();
    alert(arr + "The number of elements is " + arr.length);
    arr.push("Donald", "Goofy", "Minnie", "Daisy", "Pluto");
    alert(arr  + "The number of elements is " + arr.length);

    /*for(let i = 0; i < 7; i++){
        let answer = prompt("Please name  the 7 dwarfs");
        arr.push(answer);
    }
    alert(arr + "The number of dwarfs is " + arr.length);


  */ let number = 4;
  let answer = true;

  arr.push(number, answer);

  alert(arr);
};

let dotheunshift = function (a,b, c) {

    //adding function
    alert(names[2]);
    //adds to the beginning

    names.unshift("Jerry");

    alert(names);
    alert(names[2]);

    names.unshift(a);
    names.unshift(b);
    names.unshift(c);

    alert("First 3 unshifts");

    names.unshift(a, b, c);
    alert("Next Unshift" + names);


    //clear out array
    arr = [];

    arr.push(a, c);
    arr.unshift(b);

    alert(arr);
};

let dothesplice = function(){

    dotheunshift("Slatt Slime", "Thingy", "Hanky Panky");

    alert(names);
    alert(arr);

    // 2 ways to use splice

    //method 1 remove and add
    // removes 1 element and adds one
    names.splice(3, 1, "Tom");
    arr.splice(3, 1,"Doug");
    //remove many elements and add any elements
    alert(names);

    names.splice(3,4, "Dick", "harry", "keith");

   // alert(arr);
    arr.splice(1, 2);
   // alert(arr)
};

let dothepopnshift = function () {

    dothesplice();

    //remove from the end
    alert(names);
    let lastname = names.pop();
    alert(lastname);
    alert(names);
    names.push(lastname);

    //removes from beginning
    let firstname = names.shift();
    alert(firstname);
    alert(names);




};



