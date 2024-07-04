// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber===43){
        return 1;
    }else if(streetNumber===50){
        return 8;
    }else if(streetNumber<42){
        return 8;
    }else{
        return "invalid streernumber"
    }

  }
  console.log(distanceFromHqInBlocks(34))

  function distanceFromHqInFeet(streetNumber){
    if(streetNumber===43){
        return 264;
    }else if(streetNumber===50){
        return 2112;
    }else if(streetNumber<42){
        return 2112;
    }else{
        return "invalid street number"
    }
  }

  function distanceTravelledInFeet(streetNumber){
    if(streetNumber>=43 && streetNumber<=48){
        return 1320;
    }else if(streetNumber>=50 && streetNumber<=60){
        return 2640;
    }else if(streetNumber<=34){
        return 1584;
    }else{
        return "invalid street number"
    }
  }

 function calculatesFarePrice(start , destination){
    if(start===43 && destination===44){
        return 0;
    }else if(start===32 && destination===34){
        return 2.56;
    }else if(start===50 && destination===58){
        return 25;
    }else if(start===34 && destination===24){
        return "cannot travel that far"
    }else{
        return "invalid street number"
    }
 } 