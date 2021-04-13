function distanceFromHqInBlocks(pickupLocation){
    const blocks = Math.abs(pickupLocation - 42);
    return blocks; 
};

function distanceFromHqInFeet(pickupLocation){
    const feet = Math.abs( (pickupLocation - 42) * 264);
    return feet;
};

function distanceTravelledInFeet(pickupLocation, dropoffLocation){
    const feet = Math.abs( (pickupLocation - dropoffLocation) * 264);
    return feet; 
};

function calculatesFarePrice(start, destination){
    let result;
    const feet = Math.abs( (start - destination) * 264);

    if (feet < 400){ 
        result = 0
    } else if (feet >= 400 && feet <= 2000) {
       result = (feet - 400) * 0.02;
    } else if ( feet > 2000 && feet <= 2500){
        result = 25;
    } else {
        result = ("cannot travel that far")
    }

    return result;
}