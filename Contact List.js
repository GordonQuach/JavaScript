// This was a project done to learn how to build contact lists and store/output information. //

var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    gordon: {
        firstName: "Gordon",
        lastName: "Quach",
        number: "(904) 553-4342",
        address: ["2422 Chowning Road", "Richmond", "VA", "23220"]
    }
};


// This prints out all the entries we have in our friends object. // 

var list = function (friends) {
    for (var key in friends) {
        document.write(key);
    }
};

//  This takes a single argument, name. If the name matches any of the first names in friends, it should log that friend's contact information and return it. //

var search = function (name) {
    for (var key in friends) {
       if(friends[key].firstName === name) {
                document.write(friends[key]);
                return friends[key];
        }
    }
};
