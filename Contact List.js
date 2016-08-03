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

var list = function (friends) {
    for (var contacts in friends) {
        document.write(contacts);
    }
};

var search = function (name) {
    for (var key in friends) {
       if(friends[key].firstName === name) {
                document.write(friends[key]);
                return friends[key];
        }
    }
};