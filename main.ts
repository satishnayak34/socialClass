// this is a type Script File

//Class begins

class className1{
    //properties or feilds that are needed
    private lifeEvents:any[];
    private friends:string[];
    private familyAndRelationshipStatus?:any[];
    private contactInfo?:any[];//mob,email,facebook
    private placesLived?:string[];
    private work?:string[];
    private education?:any[];//school,university
    private basicInfo?:any[];//date,year,gender,languages,

    //constructor begins
    constructor(_lifeEvents:any[],_friends:string[],_familyAndRelationshipStatus?:any[],_contactInfo?:any[],_placesLived?:string[],_work?:string[],_education?:any[],_basicInfo?:any[]){
        this.lifeEvents=_lifeEvents;
        this.friends=_friends;
        this.familyAndRelationshipStatus = _familyAndRelationshipStatus;
        this.contactInfo = _contactInfo;
        this.placesLived = _placesLived;
        this.work = _work;
        this.education=_education;
        this.basicInfo = _basicInfo;
    }//end of the constructor

    //getters and setter methods

    // setter for life Events
    setlifeEventMethod=(event:any[])=>{
        this.lifeEvents=event;
    }
    //getter for life Events 
    getlifeEventsMethod=()=>{
        let event;
        for(event in this.lifeEvents){
          $('#eventID').append( `I was ${this.lifeEvents[event].Event} on ${this.lifeEvents[event].Year} <br/>`)
        }
        
    }
    // Settter for friend list values
    setfriendMethod=(friend:string[])=>{
        this.friends=friend;
    }

    //getter for friend list values
    getfriendsMethod=()=>{
        let friend;
        for(friend in this.friends){
            $('#friendsID').append( this.friends[friend],'<br/>')
        }
        
    }
    // Settter for family and status values
    setfamilyAndStatusMethod=(familyandstatus:any[])=>{
        this.familyAndRelationshipStatus=familyandstatus;
    }
    // getter for family and status values
    getfamilyAndstatusMethod=()=>{
        let member;
        for(member in this.familyAndRelationshipStatus){
            $('#statusID').append(`Relation Ship Status : ${this.familyAndRelationshipStatus[member]['RelationShip']} <br/>
             Family Friends : ${this.familyAndRelationshipStatus[member]['family']}` )
        }
        
    }
    // Settter for Contact Information values
    setcontactInfoMethod=(contactInf:any[])=>{
        this.contactInfo=contactInf;
    }
    // getter for Contact Information values 
    getcontactInfoMethod=()=>{
        let contact;
        for(contact in this.contactInfo){
            $('#contactID').append(`Mobile Number : ${this.contactInfo[contact]['Mobile Number']} <br> Mail ID :  ${this.contactInfo[contact]['mail address']}`)
        }
        
    }
    // Settter for places lived values
    setplacesLivedMethod=(placesInf:string[])=>{
        this.placesLived=placesInf;
    }
    // getter for places lived values
    getplacesLivedMethod=()=>{
        let places;
            for(places in this.placesLived){
                $('#placesID').append( this.placesLived[places],'<br/>')
            }
       
        
    }
    // Settter for places worked values
    setworkMethod=(worked:string[])=>{
        this.work=worked;
    }
    //  getter for places worked values
    getworkMethod=()=>{
        let workInf;
        for(workInf in this.work){
            $('#workID').append( this.work[workInf],'<br/>')
        }
        
    }
    // Settter for educational values
    seteducationMethod=(edu:any[])=>{
        this.education=edu;
    }
    // getter for educational values
    geteducationMethod=()=>{
        let educationInf;
        for(educationInf in this.education){
            $('#eduID').append( `School : ${this.education[educationInf]['School']} <br/> University : ${this.education[educationInf]['University']}`)
        }
        
    }
    // Settter for basic information values
    setbasicInfoMethod=(basicInformation:any[])=>{
        this.basicInfo=basicInformation;
    }
    // getter for basic information values
    getbasicInfoMethod=()=>{
        let basicInf;
        for(basicInf in this.basicInfo){
           $('#basicInfoID').append(`Born on ${this.basicInfo[basicInf]['Date of Birth']} of ${this.basicInfo[basicInf]['Year']}, my gender is ${this.basicInfo[basicInf]['Gender']} and I am good in the following languages: ${this.basicInfo[basicInf]['Language']}` )
        }
        
    }
}//end of class

let myAbout = new className1( [{"Year":"1991","Event":"born "},{"Year":"2008","Event":"Graduation from School"},{"Year":"2013","Event":"Graduated"}],["friend1","friend2","friend3","friend4"],[{"RelationShip":"Single","family":["family1","family2","family3","family4"]}],[{"Mobile Number":"1234567890","mail address":"abc@gmail.com","facbook":"http://facebook.com/abc.xyz"}],[],["ABC LTD"],[{"School":"000","University":"111"}],[{"Date of Birth":"01 Jan","Year":"1991","Gender":"Male","Language":["English","Hindi","XXX"]}])
myAbout.getlifeEventsMethod()
myAbout.getfriendsMethod()
myAbout.getfamilyAndstatusMethod()
myAbout.getcontactInfoMethod()
myAbout.getplacesLivedMethod()
myAbout.getworkMethod()
myAbout.geteducationMethod()
myAbout.getbasicInfoMethod()
