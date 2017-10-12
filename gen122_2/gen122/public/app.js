const CreateClient = document.querySelector('.CreateClient')
CreateClient.addEventListener('submit', (e) => {
  e.preventDefault()
  const firstName = CreateClient.querySelector('.first_name').value
  const surname = CreateClient.querySelector('.surname').value
  const address = CreateClient.querySelector('.address').value
  const postCode = CreateClient.querySelector('.post_code').value
  const telephone = CreateClient.querySelector('.telephone').value
  const mobilePhone = CreateClient.querySelector('.mobile').value
  const email = CreateClient.querySelector('.email').value
  const ocpMum = CreateClient.querySelector('.ocp_mum').value
  const ocpDad = CreateClient.querySelector('.ocp_dad').value
  const nationality = CreateClient.querySelector('.nationality').value
  const religion = CreateClient.querySelector('.religion').value
  const language = CreateClient.querySelector('.lang').value
  const marStatus = CreateClient.querySelector('.mar_status').value
  const haveChild = CreateClient.querySelector('.have_child').value
  const noOfChild = CreateClient.querySelector('.no_child').value
  const childrenName = CreateClient.querySelector('.children_name').value
  const childAttend = CreateClient.querySelector('.chil_attend').value
  const schDist = CreateClient.querySelector('.sch_dist').value
  const homeStay = CreateClient.querySelector('.home_stay').value
  const specialNeeds = CreateClient.querySelector('.special_needs').value
  const chilInfo = CreateClient.querySelector('.chil_info').value
  const expectMother = CreateClient.querySelector('.expect_mother').value
  const familyInfo = CreateClient.querySelector('.family_info').value
  const pet = CreateClient.querySelector('.pet').value
  const specPet = CreateClient.querySelector('.spec_pet').value
  const familyHobby = CreateClient.querySelector('.family_hobby').value
  const smokeStatus = CreateClient.querySelector('.smoke_status').value
  const safeIssues = CreateClient.querySelector('.safe_issues').value
  const info = CreateClient.querySelector('.info').value
  const accoType = CreateClient.querySelector('.acc_type').value
  const specificHouseType = CreateClient.querySelector('.spec_house_type').value
  const recepRoom = CreateClient.querySelector('.recep-room').value
  const noOfBedroom = CreateClient.querySelector('.no_of_bedroom').value
  const noOfBathroom = CreateClient.querySelector('.no_of_bathroom').value
  const noOfFloor = CreateClient.querySelector('.no_of_floor').value
  const nearestStation = CreateClient.querySelector('.nearest_station').value
  const aupairHaveRoom = CreateClient.querySelector('.aupair_have_room').value
  const describeAccomodation = CreateClient.querySelector('.describe_accomo').value
  const facilities = CreateClient.querySelector('.facilities').value
  const typeRequired = CreateClient.querySelector('.type_required').value
  const lengthOfService = CreateClient.querySelector('.length_of_service').value
  const agePreffered = CreateClient.querySelector('.age_preffered').value
  const prefferedNationality= CreateClient.querySelector('.preffered_nationality').value
  const prefferedGender = CreateClient.querySelector('.preffered_gender').value
  const reqExperience = CreateClient.querySelector('.req_experience').value
  const resp = CreateClient.querySelector('.resp').value
  const license = CreateClient.querySelector('.license').value
  const levelOfEnglish = CreateClient.querySelector('.level_of_english').value
  const languageWanted = CreateClient.querySelector('.language_wanted').value
  const Will_you_do_phone_interview = CreateClient.querySelector('.interview_preference').value
  const totalWorkingHours = CreateClient.querySelector('.total_working_hours').value
  const duties = CreateClient.querySelector('.duties').value
  const daysOfWork = CreateClient.querySelector('.days_of_work').value
  const timeToCommence = CreateClient.querySelector('.time_to_commence').value
  
  post('/createClient', { firstName, surname, address, postCode, telephone, mobilePhone, email, ocpMum, ocpDad, nationality, religion, language, marStatus, haveChild, noOfChild, childrenName, childAttend, schDist, homeStay, specialNeeds, chilInfo, expectMother, familyInfo, pet, specPet, familyHobby, smokeStatus, safeIssues, info, accoType, specificHouseType, recepRoom, noOfBedroom, noOfBathroom, noOfFloor, nearestStation, aupairHaveRoom, describeAccomodation, facilities, typeRequired, lengthOfService, agePreffered, prefferedNationality, prefferedGender, reqExperience, resp, license, levelOfEnglish, languageWanted, Will_you_do_phone_interview, totalWorkingHours, duties, daysOfWork, timeToCommence })
})

function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}