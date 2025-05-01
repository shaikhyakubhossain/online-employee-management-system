
const dobValidator = (inputDob) => {
    const currentDate = new Date();
    const usersAgeInYears = currentDate.getFullYear() - parseInt(inputDob.split("-")[0]);
    const usersAgeInMonths = currentDate.getMonth() - parseInt(inputDob.split("-")[1]);
    const usersAgeInDays = currentDate.getDate() - parseInt(inputDob.split("-")[2]);

    if(usersAgeInYears < 0) return { error: "Invalid date of birth" };
    
    else if(usersAgeInYears === 0){

        if(usersAgeInMonths < 0) return { error: "Invalid date of birth" };
        
        else if(usersAgeInMonths === 0){
            
            if(usersAgeInDays < 0) return { error: "Invalid date of birth" };
            
            else return { error: "You must be 18 years old to register" };
        }
        else return { error: "You must be 18 years old to register" };
        
    }
    
    else if(usersAgeInYears < 18) return { error: "You must be 18 years old to register" };

    return { success: true };
}

module.exports = { dobValidator };