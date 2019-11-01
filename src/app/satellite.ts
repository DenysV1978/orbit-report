export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    should: boolean;


    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
      
        


    };

    shouldShowWarning() {
        let lowerCaseType=this.type.toLowerCase();
        console.log(lowerCaseType)        
        if(lowerCaseType==="space debris") {
            return true;

        } else {
            return false;
        }

    };
    

 
};


