import express from 'express';
import bodyParser from 'body-parser';

import store from './store';

const app = express()
app.use(express.static('./public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/form1', (req, res) => {
  res.sendFile('form1.html');
});

app.get('/form2', (req, res) => {
  res.sendFile('form2.html');
});

app.post('/createClient', (req, res) => {
  store
    .createClient({
      firstName : req.body.firstName,
      surname : req.body.surname,
      address : req.body.address,
      postCode : req.body.postCode,
      telephone : req.body.telephone,
      mobilePhone : req.body.mobilePhone,
      email : req.body.email,
      ocpMum : req.body.ocpMum,
      ocpDad : req.body.ocpDad,
      nationality : req.body.nationality,
      religion : req.body.religion,
      language : req.body.language,
      marStatus : req.body.marStatus,
      haveChild : req.body.haveChild,
      noOfChild : req.body.noOfChild,
      childrenName : req.body.childrenName,
      childAttend : req.body.childAttend,
      schDist : req.body.schDist,
      homeStay : req.body.homeStay,
      specialNeeds : req.body.specialNeeds,
      chilInfo : req.body.chilInfo,
      expectMother : req.body.expectMother,
      familyInfo : req.body.familyInfo,
      pet : req.body.pet,
      specPet : req.body.specPet,
      familyHobby : req.body.familyHobby,
      smokeStatus : req.body.smokeStatus,
      safeIssues : req.body.safeIssues,
      info : req.body.info,
      accoType : req.body.accoType,
      specificHouseType : req.body.specificHouseType,
      recepRoom : req.body.recepRoom,
      noOfBedroom : req.body.noOfBedroom,
      noOfBathroom : req.body.noOfBathroom,
      noOfFloor : req.body.noOfFloor,
      nearestStation : req.body.nearestStation,
      aupairHaveRoom : req.body.aupairHaveRoom,
      describeAccomodation : req.body.describeAccomodation,
      facilities : req.body.facilities,
      typeRequired : req.body.typeRequired,
      lengthOfService : req.body.lengthOfService,
      agePreffered : req.body.agePreffered,
      prefferedNationality: req.body.prefferedNationality,
      prefferedGender : req.body.prefferedGender,
      reqExperience : req.body.reqExperience,
      resp : req.body.resp,
      license : req.body.license,
      levelOfEnglish : req.body.levelOfEnglish,
      languageWanted : req.body.languageWanted,
      Will_you_do_phone_interview : req.body.Will_you_do_phone_interview,
      totalWorkingHours : req.body.totalWorkingHours,
      duties : req.body.duties,
      daysOfWork : req.body.daysOfWork,
      timeToCommence : req.body.timeToCommence
    })
    .then(() => res.sendStatus(200))
})
app.listen(7555, () => {
  console.log('The server is running on http://localhost:7555')
})