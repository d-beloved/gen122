
 // const knex = require('knex')(require('./knexfile'))
  
  export default {
    createClient ({ firstName, surname, address, postCode, telephone, mobilePhone, email, ocpMum, ocpDad, nationality, religion, language, marStatus, haveChild, noOfChild, childrenName, childAttend, schDist, homeStay, specialNeeds, chilInfo, expectMother, familyInfo, pet, specPet, familyHobby, smokeStatus, safeIssues, info, accoType, specificHouseType, recepRoom, noOfBedroom, noOfBathroom, noOfFloor, nearestStation, aupairHaveRoom, describeAccomodation, facilities, typeRequired, lengthOfService, agePreffered, prefferedNationality, prefferedGender, reqExperience, resp, license, levelOfEnglish, languageWanted, Will_you_do_phone_interview, totalWorkingHours, duties, daysOfWork, timeToCommence }) {
      console.log(`Add client ${firstName} with address ${address}`)
      return Promise.resolve()
    }
  }
      
      
      /*return knex('client').insert({
        firstName,
        surname,
        address,
        postCode,
        telephone,
        mobilePhone,
        email,
        ocpMum,
        ocpDad,
        nationality,
        religion,
        language,
        marStatus,
        haveChild,
        noOfChild,
        childrenName,
        childAttend,
        schDist,
        homeStay,
        specialNeeds,
        chilInfo,
        expectMother,
        familyInfo,
        pet,
        specPet,
        familyHobby,
        smokeStatus,
        safeIssues,
        info,
        accoType,
        specificHouseType,
        recepRoom,
        noOfBedroom,
        noOfBathroom,
        noOfFloor,
        nearestStation,
        aupairHaveRoom,
        describeAccomodation,
        facilities,
        typeRequired,
        lengthOfService,
        agePreffered,
        prefferedNationality,
        prefferedGender,
        reqExperience,
        resp,
        license,
        levelOfEnglish,
        languageWanted,
        Will_you_do_phone_interview,
        totalWorkingHours,
        duties,
        daysOfWork,
        timeToCommence
      })
    }
  }*/