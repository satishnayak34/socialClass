// this is a type Script File
//Class begins
var className1 = /** @class */ (function () {
    //constructor begins
    function className1(_lifeEvents, _friends, _familyAndRelationshipStatus, _contactInfo, _placesLived, _work, _education, _basicInfo) {
        var _this = this;
        //getters and setter methods
        // setter for life Events
        this.setlifeEventMethod = function (event) {
            _this.lifeEvents = event;
        };
        //getter for life Events 
        this.getlifeEventsMethod = function () {
            var event;
            for (event in _this.lifeEvents) {
                $('#eventID').append("I was " + _this.lifeEvents[event].Event + " on " + _this.lifeEvents[event].Year + " <br/>");
            }
        };
        // Settter for friend list values
        this.setfriendMethod = function (friend) {
            _this.friends = friend;
        };
        //getter for friend list values
        this.getfriendsMethod = function () {
            var friend;
            for (friend in _this.friends) {
                $('#friendsID').append(_this.friends[friend], '<br/>');
            }
        };
        // Settter for family and status values
        this.setfamilyAndStatusMethod = function (familyandstatus) {
            _this.familyAndRelationshipStatus = familyandstatus;
        };
        // getter for family and status values
        this.getfamilyAndstatusMethod = function () {
            var member;
            for (member in _this.familyAndRelationshipStatus) {
                $('#statusID').append("Relation Ship Status : " + _this.familyAndRelationshipStatus[member]['RelationShip'] + " <br/>\n             Family Friends : " + _this.familyAndRelationshipStatus[member]['family']);
            }
        };
        // Settter for Contact Information values
        this.setcontactInfoMethod = function (contactInf) {
            _this.contactInfo = contactInf;
        };
        // getter for Contact Information values 
        this.getcontactInfoMethod = function () {
            var contact;
            for (contact in _this.contactInfo) {
                $('#contactID').append("Mobile Number : " + _this.contactInfo[contact]['Mobile Number'] + " <br> Mail ID :  " + _this.contactInfo[contact]['mail address']);
            }
        };
        // Settter for places lived values
        this.setplacesLivedMethod = function (placesInf) {
            _this.placesLived = placesInf;
        };
        // getter for places lived values
        this.getplacesLivedMethod = function () {
            var places;
            for (places in _this.placesLived) {
                $('#placesID').append(_this.placesLived[places], '<br/>');
            }
        };
        // Settter for places worked values
        this.setworkMethod = function (worked) {
            _this.work = worked;
        };
        //  getter for places worked values
        this.getworkMethod = function () {
            var workInf;
            for (workInf in _this.work) {
                $('#workID').append(_this.work[workInf], '<br/>');
            }
        };
        // Settter for educational values
        this.seteducationMethod = function (edu) {
            _this.education = edu;
        };
        // getter for educational values
        this.geteducationMethod = function () {
            var educationInf;
            for (educationInf in _this.education) {
                $('#eduID').append("School : " + _this.education[educationInf]['School'] + " <br/> University : " + _this.education[educationInf]['University']);
            }
        };
        // Settter for basic information values
        this.setbasicInfoMethod = function (basicInformation) {
            _this.basicInfo = basicInformation;
        };
        // getter for basic information values
        this.getbasicInfoMethod = function () {
            var basicInf;
            for (basicInf in _this.basicInfo) {
                $('#basicInfoID').append("Born on " + _this.basicInfo[basicInf]['Date of Birth'] + " of " + _this.basicInfo[basicInf]['Year'] + ", my gender is " + _this.basicInfo[basicInf]['Gender'] + " and I am good in the following languages: " + _this.basicInfo[basicInf]['Language']);
            }
        };
        this.lifeEvents = _lifeEvents;
        this.friends = _friends;
        this.familyAndRelationshipStatus = _familyAndRelationshipStatus;
        this.contactInfo = _contactInfo;
        this.placesLived = _placesLived;
        this.work = _work;
        this.education = _education;
        this.basicInfo = _basicInfo;
    } //end of the constructor
    return className1;
}()); //end of class
var myAbout = new className1([{ "Year": "1991", "Event": "born " }, { "Year": "2008", "Event": "Graduation from School" }, { "Year": "2013", "Event": "Graduated" }], ["friend1", "friend2", "friend3", "friend4"], [{ "RelationShip": "Single", "family": ["family1", "family2", "family3", "family4"] }], [{ "Mobile Number": "1234567890", "mail address": "abc@gmail.com", "facbook": "http://facebook.com/abc.xyz" }], [], ["ABC LTD"], [{ "School": "000", "University": "111" }], [{ "Date of Birth": "01 Jan", "Year": "1991", "Gender": "Male", "Language": ["English", "Hindi", "XXX"] }]);
myAbout.getlifeEventsMethod();
myAbout.getfriendsMethod();
myAbout.getfamilyAndstatusMethod();
myAbout.getcontactInfoMethod();
myAbout.getplacesLivedMethod();
myAbout.getworkMethod();
myAbout.geteducationMethod();
myAbout.getbasicInfoMethod();
