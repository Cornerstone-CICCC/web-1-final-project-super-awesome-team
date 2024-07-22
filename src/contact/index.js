const titleSection = document.querySelector('.title')
const form = document.querySelector('form')
const serviceForm = document.querySelector('#services')
const classesForm = document.querySelector('#classes')

const tabcontent = document.querySelector(".tabcontent");
const tablinks = document.querySelector(".tablinks");
const btnServices = document.querySelector('.tab_services')
const btnClasses = document.querySelector('.tab_classes')


btnServices.addEventListener('click', () => {
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    btnServices.className = "tablinks active tab_services"
    btnClasses.className = "tablinks tab_classes"
    serviceForm.style.display = "block"
    classesForm.style.display = "none"
})

btnClasses.addEventListener('click', () => {
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    btnServices.className = "tablinks tab_services"
    btnClasses.className = "tablinks active tab_classes"
    serviceForm.style.display = "none"
    classesForm.style.display = "block"
})



/*Page 1 */
const containerPage1 = document.createElement('div')
containerPage1.setAttribute('id', 'page_1')
serviceForm.appendChild(containerPage1)
/* Event Type */

const eventType = document.createElement('fieldset')
eventType.setAttribute('id', 'eventType')
containerPage1.append(eventType)

const eventTypeTitle = document.createElement('h5')
eventTypeTitle.textContent = "Event Type"
eventType.appendChild(eventTypeTitle)


const eventTypeLabel = document.createElement('div')
eventTypeLabel.setAttribute('id', 'eventTypeLabel')
eventType.append(eventTypeLabel)

const weddingLabel = document.createElement('label')
weddingLabel.setAttribute('id', 'wedding')
weddingLabel.innerHTML = "<p>Wedding<\p>"
const weddingInput = document.createElement('input')
weddingInput.setAttribute('type', 'radio')
weddingInput.setAttribute('id', 'event_type')
weddingInput.setAttribute('name', 'event_type')
weddingInput.setAttribute('value', 'wedding')
weddingInput.setAttribute('checked', '')
weddingLabel.append(weddingInput)
eventTypeLabel.append(weddingLabel)



const partyLabel = document.createElement('label')
partyLabel.setAttribute('id', 'party')
partyLabel.innerHTML = "<p>Party<\p>"
const partyInput = document.createElement('input')
partyInput.setAttribute('type', 'radio')
partyInput.setAttribute('name', 'event_type')
partyInput.setAttribute('value', 'party')
partyLabel.append(partyInput)
eventTypeLabel.append(partyLabel)

const photoShootLabel = document.createElement('label')
photoShootLabel.setAttribute('id', 'photoshoot')
photoShootLabel.innerHTML = "<p>Photoshoot<\p>"
const photoShootInput = document.createElement('input')
photoShootInput.setAttribute('type', 'radio')
photoShootInput.setAttribute('name', 'event_type')
photoShootInput.setAttribute('value', 'photoshoot')
photoShootLabel.append(photoShootInput)
eventTypeLabel.append(photoShootLabel)

/* Event Type - EventLisener */

weddingInput.addEventListener('click', () => {
    contactPart2.style.display = 'block'
    btnToPage2.style.display = 'block'
    btnSkipPage2.style.display = 'none'
    serviceTypeTitle.textContent = "Bridal Service"
    groomBox.style.display ="flex"
    bridesmaidBox.style.display ="flex"
    flowergirlBox.style.display ="flex"
    womanBox.style.display ="none"
    manBox.style.display ="none"
})

partyInput.addEventListener('click', () => {
    contactPart2.style.display = 'none'
    btnToPage2.style.display = 'block'
    btnSkipPage2.style.display = 'none'
    serviceTypeTitle.textContent = "Service"
    groomBox.style.display ="none"
    bridesmaidBox.style.display ="none"
    flowergirlBox.style.display ="none"
    womanBox.style.display ="flex"
    manBox.style.display ="flex"
})

photoShootInput.addEventListener('click', () => {
    contactPart2.style.display = 'none'
    btnToPage2.style.display = 'none'
    btnSkipPage2.style.display = 'block'
    p3BoxInfo.style.display = "none"

})


/* Event Date&Time */

const eventDateTime = document.createElement('fieldset')
eventDateTime.setAttribute('id', 'eventDateTime')
containerPage1.append(eventDateTime)


const eventDate = document.createElement('div')
eventDate.setAttribute('id', 'eventDate')
eventDateTime.append(eventDate)
const eventDateTitle = document.createElement('h5')
eventDateTitle.textContent = "Event Date"
eventDate.appendChild(eventDateTitle)

const eventDateInput = document.createElement('input')
eventDateInput.setAttribute('type', 'text')
eventDateInput.setAttribute('placeholder', 'Select Date')
eventDateInput.setAttribute('onfocus', '(this.type="date")')
eventDateInput.setAttribute('onblur', '(this.type="text")')
eventDateInput.setAttribute('name', 'date')
eventDateInput.setAttribute('id', 'date')
eventDateInput.setAttribute('value', '')
eventDate.append(eventDateInput)

const eventDateInputCheck = document.createElement('div')
eventDateInputCheck.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="date_not_decided" value=""><p>Not decided</p></label>'
eventDate.append(eventDateInputCheck)


const eventTime = document.createElement('div')
eventTime.setAttribute('id', 'eventTime')
eventDateTime.append(eventTime)
const eventTimeTitle = document.createElement('h5')
eventTimeTitle.textContent = "Event Time"
eventTime.appendChild(eventTimeTitle)

const eventTimeInput = document.createElement('div')
eventTimeInput.innerHTML = '<select><option value="full_day" selected >Full day</option><option value="noon" >Noon</option><option value="evening" >Evening</option></select>'
eventTime.append(eventTimeInput)

const eventTimeInputCheck = document.createElement('div')
eventTimeInputCheck.innerHTML = '<label class="inputCheck" ><input type="checkbox" class="checkbox" name="time_not_decided" value=""><p>Not decided</p></label>'
eventTime.append(eventTimeInputCheck)



/* Event Name */


const nameForm = document.createElement('fieldset')
containerPage1.append(nameForm)

const nameTitle = document.createElement('h5')
nameTitle.textContent = "Name"
nameForm.appendChild(nameTitle)

const nameInput = document.createElement('input')
nameInput.setAttribute('type', 'text')
nameInput.setAttribute('name', 'name')
nameInput.setAttribute('id', 'name')
nameInput.setAttribute('placeholder', 'Your name')
nameInput.setAttribute('value', '')
nameInput.setAttribute('required', '')
nameForm.append(nameInput)



/* Event Contact */

const contact = document.createElement('fieldset')
contact.setAttribute('id', 'contact')
containerPage1.append(contact)

const contactTitle = document.createElement('h5')
contactTitle.textContent = "Contact"
contact.appendChild(contactTitle)

const contactPart1 = document.createElement('div')
contactPart1.setAttribute('id', 'contactPart1')
contact.append(contactPart1)

const contactCall = document.createElement('div')
contactCall.setAttribute('class', 'contactPart1')
contactCall.innerHTML = '<label><input type="radio"  name="contact_way" id="contact_way" class="radio" value="Call" ><p>Call</p></label>'
contactPart1.append(contactCall)


const contactPhone = document.createElement('div')
contactPhone.setAttribute('class', 'contactPart1')
contactPhone.innerHTML = "<input id='phone_input' type='tel' name='phone' placeholder='Your mobile number' style='display:none' value=''/>"
contactPart1.append(contactPhone)

contactCall.addEventListener('click', () => {
    contactPhone.innerHTML = "<input id='phone_input' type='tel' name='phone' placeholder='Your mobile number' style='display:block' value='' />"
    contactWhatsappNum.innerHTML = "<input id='whatsApp_input' type='tel' name='whatsapp' placeholder='Your WhatsApp Account' style='display:none' value=''/>"
    contactSMSNum.innerHTML = "<input id='sms_input' type='tel' name='sms' placeholder='Your mobile number' style='display:none' value=''/>"
    contactMail.innerHTML = "<input id='email_input' type='text' name='email' placeholder='Your Email Address' style='display:none' value=''/>"
})


const contactWhatsapp = document.createElement('div')
contactWhatsapp.setAttribute('class', 'contactPart1')
contactWhatsapp.innerHTML = "<label><input type='radio' name='contact_way'  id='contact_way' class='radio' value='whatsapp' ><p>WhatsApp</p></label>"
contactPart1.append(contactWhatsapp)

const contactWhatsappNum = document.createElement('div')
contactWhatsappNum.setAttribute('class', 'contactPart1')
contactWhatsappNum.innerHTML = "<input id='whatsApp_input' type='tel' name='whatsapp' placeholder='Your WhatsApp Account' style='display:none'/>"
contactPart1.append(contactWhatsappNum)

contactWhatsapp.addEventListener('click', () => {
    contactPhone.innerHTML = "<input id='phone_input' type='tel' name='phone' placeholder='Your mobile number' style='display:none' value=''/>"
    contactWhatsappNum.innerHTML = "<input id='whatsApp_input' type='tel' name='whatsapp' placeholder='Your WhatsApp Account' style='display:block' value='' />"
    contactSMSNum.innerHTML = "<input id='sms_input' type='tel' name='sms' placeholder='Your mobile number' style='display:none' value=''/>"
    contactMail.innerHTML = "<input id='email_input' type='text' name='email' placeholder='Your Email Address' style='display:none' value=''/>"
})

const contactSMS = document.createElement('div')
contactSMS.setAttribute('class', 'contactPart1')
contactSMS.innerHTML = "<label><input type='radio' name='contact_way' id='contact_way' class='radio' value='sms' ><p>SMS</p></label>"
contactPart1.append(contactSMS)

const contactSMSNum = document.createElement('div')
contactSMSNum.setAttribute('class', 'contactPart1')
contactSMSNum.innerHTML = "<input id='sms_input' type='tel' name='sms' placeholder='Your mobile number' style='display:none'/>"
contactPart1.append(contactSMSNum)

contactSMS.addEventListener('click', () => {
    contactPhone.innerHTML = "<input id='phone_input' type='tel' name='phone' placeholder='Your mobile number' style='display:none' value=''/>"
    contactWhatsappNum.innerHTML = "<input id='whatsApp_input' type='tel' name='whatsapp' placeholder='Your WhatsApp Account' style='display:none' v/>"
    contactSMSNum.innerHTML = "<input id='sms_input' type='tel' name='sms' placeholder='Your mobile number' style='display:block' value='' />"
    contactMail.innerHTML = "<input id='email_input' type='text' name='email' placeholder='Your Email Address' style='display:none' value=''/>"
})

const contactEmail = document.createElement('div')
contactEmail.setAttribute('class', 'contactPart1')
contactEmail.innerHTML = "<label><input type='radio' id='contact_way' name='contact_way' class='radio' value='email' ><p>Email</p></label>"
contactPart1.append(contactEmail)

const contactMail = document.createElement('div')
contactMail.setAttribute('class', 'contactPart1')
contactMail.innerHTML = "<input id='email_input' type='text' name='email' placeholder='Your Email Address' style='display:none'/>"
contactPart1.append(contactMail)

contactEmail.addEventListener('click', () => {
    contactPhone.innerHTML = "<input id='phone_input' type='tel' name='phone' placeholder='Your mobile number' style='display:none' value=''/>"
    contactWhatsappNum.innerHTML = "<input id='whatsApp_input' type='tel' name='whatsapp' placeholder='Your WhatsApp Account' style='display:none' value=''/>"
    contactSMSNum.innerHTML = "<input id='sms_input' type='tel' name='smsy' placeholder='Your mobile number' style='display:none' value=''/>"
    contactMail.innerHTML = "<input id='email_input' type='text' name='email' placeholder='Your Email Address' style='display:block' value='' />"
})

const contactPart2 = document.createElement('div')
contact.append(contactPart2)
const contactPart2Title = document.createElement('h6')
contactPart2Title.textContent = "When do you want us to call?"
contactPart2.appendChild(contactPart2Title)


const contactAllday = document.createElement('div')
contactAllday.setAttribute('class', 'contactPart1')
contactAllday.innerHTML = '<label><input type="radio" id="contact_time" name="contact_time" class="radio" value="All Day" ><p>I don’t mind</p></label>'
contactPart2.append(contactAllday)

const contactMorning = document.createElement('div')
contactMorning.setAttribute('class', 'contactPart1')
contactMorning.innerHTML = '<label><input type="radio" id="contact_time" name="contact_time" class="radio" value="Morning" ><p>Morning</p></label>'
contactPart2.append(contactMorning)

const contactAfternoon = document.createElement('div')
contactAfternoon.setAttribute('class', 'contactPart1')
contactAfternoon.innerHTML = '<label><input type="radio" id="contact_time" name="contact_time" class="radio" value="Afternoon" ><p>Afternoon</p></label>'
contactPart2.append(contactAfternoon)

const contactEvening = document.createElement('div')
contactEvening.setAttribute('class', 'contactPart1')
contactEvening.innerHTML = '<label><input type="radio" id="contact_time" name="contact_time" class="radio" value="Evening" ><p>Evening</p></label>'
contactPart2.append(contactEvening)



/*btn-to Page2 */

const btnToPage2 = document.createElement('button')
btnToPage2.setAttribute('type', 'button')
btnToPage2.setAttribute('id', 'btn_next')
btnToPage2.textContent = "Next"
containerPage1.append(btnToPage2)


/*btn-skip Page2 */

const btnSkipPage2 = document.createElement('button')
btnSkipPage2.setAttribute('type', 'Submit')
btnSkipPage2.setAttribute('id', 'btn_skip_next')
btnSkipPage2.textContent = "Submit"
btnSkipPage2.style.display = "none"
containerPage1.append(btnSkipPage2)



/* Page2*/
const containerPage2 = document.createElement('div')
containerPage2.setAttribute('id', 'page_2')
containerPage2.style.display = 'none'
serviceForm.appendChild(containerPage2)

/* btn-back to P1 */

const btnBack = document.createElement('button')
btnBack.setAttribute('type', 'button')
btnBack.setAttribute('id', 'btn_back')
btnBack.innerHTML = '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0004 21.3084L0.692383 12.0004L10.0004 2.69238L11.0634 3.75638L2.82038 12.0004L11.0644 20.2444L10.0004 21.3084Z" fill="#725A58"/></svg><p>Back</p>'
containerPage2.append(btnBack)




/*Bribal Service */
const serviceType = document.createElement('fieldset')
containerPage2.append(serviceType)
const serviceTypeTitle = document.createElement('h5')
serviceTypeTitle.textContent = "Bridal Service" /*Switch to service */
serviceType.appendChild(serviceTypeTitle)

const serviceTypeLabel = document.createElement('div')
serviceTypeLabel.setAttribute('id', 'serviceTypeLabel')
serviceType.append(serviceTypeLabel)


const makeupLabel = document.createElement('label')
makeupLabel.setAttribute('id', 'makeup')
makeupLabel.innerHTML = "<p>Makeup<\p>"
const makeupInput = document.createElement('input')
makeupInput.setAttribute('type', 'checkbox')
makeupInput.setAttribute('name', 'makeup')
makeupLabel.append(makeupInput)
serviceTypeLabel.append(makeupLabel)

const hairstyleLabel = document.createElement('label')
hairstyleLabel.setAttribute('id', 'hairstyle')
hairstyleLabel.innerHTML = "<p>Hairstyle<\p>"
const hairstyleInput = document.createElement('input')
hairstyleInput.setAttribute('type', 'checkbox')
hairstyleInput.setAttribute('name', 'hairstyle')
hairstyleLabel.append(hairstyleInput)
serviceTypeLabel.append(hairstyleLabel)


/*Event Location */

const eventLocation = document.createElement('fieldset')
containerPage2.append(eventLocation)

const eventLocationTitle = document.createElement('h5')
eventLocationTitle.textContent = "Event Location"
eventLocation.appendChild(eventLocationTitle)

const LocationInput = document.createElement('input')
LocationInput.setAttribute('type', 'search')
LocationInput.setAttribute('name', 'location')
LocationInput.setAttribute('id', 'location')
LocationInput.setAttribute('placeholder', 'Search address')
LocationInput.setAttribute('value', '')
eventLocation.append(LocationInput)

const eventLocationInputCheck = document.createElement('div')
eventLocationInputCheck.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="location_not_decided" value=""><p>Not decided</p></label>'
eventLocation.append(eventLocationInputCheck)

/*Premium Service */

const premiumService = document.createElement('fieldset')
containerPage2.append(premiumService)

const premiumServiceTitle = document.createElement('h5')
premiumServiceTitle.textContent = "Premium service"
premiumService.appendChild(premiumServiceTitle)

const premiumServiceGroup = document.createElement('div')
premiumServiceGroup.setAttribute('id', 'premiumServiceGroup')
premiumService.appendChild(premiumServiceGroup)



/*Left Group*/

const premiumServiceGroupLeft = document.createElement('div')
premiumServiceGroup.append(premiumServiceGroupLeft)

const deepSkinCleansing = document.createElement('div')
deepSkinCleansing.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="deepSkinCleansing" value=""><p>Deep skin cleansing</p></label>'
premiumServiceGroupLeft.append(deepSkinCleansing)

const hydromassage = document.createElement('div')
hydromassage.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="hydromassage" value=""><p>Hydromassage</p></label>'
premiumServiceGroupLeft.append(hydromassage)

const waxing = document.createElement('div')
waxing.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="waxing" value=""><p>Waxing</p></label>'
premiumServiceGroupLeft.append(waxing)

const relaxingMassage = document.createElement('div')
relaxingMassage.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="relaxingMassage" value=""><p>Relaxing massage</p></label>'
premiumServiceGroupLeft.append(relaxingMassage)



/*Right Group */

const premiumServiceGroupRight = document.createElement('div')
premiumServiceGroup.append(premiumServiceGroupRight)

const bleachBodyHair = document.createElement('div')
bleachBodyHair.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="bleachBodyHair" value=""><p>Bleach body hair</p></label>'
premiumServiceGroupRight.append(bleachBodyHair)

const hairMoisture = document.createElement('div')
hairMoisture.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="hairMoisture" value=""><p>Hair Moisture</p></label>'
premiumServiceGroupRight.append(hairMoisture)

const spa = document.createElement('div')
spa.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="spa" value=""><p>Foot and hand SPA</p></label>'
premiumServiceGroupRight.append(spa)

const gommage = document.createElement('div')
gommage.innerHTML = '<label class="inputCheck"><input type="checkbox" class="checkbox" name="gommage" value=""><p>Gommage (body exfoliation and hydration)</p></label>'
premiumServiceGroupRight.append(gommage)


/* Anyone else ? */

const anyoneService = document.createElement('fieldset')
containerPage2.append(anyoneService)

const anyoneServiceTitle = document.createElement('h5')
anyoneServiceTitle.textContent = "Anyone else need service?"
anyoneService.appendChild(anyoneServiceTitle)

const anyoneServiceBox = document.createElement('fieldset')
anyoneServiceBox.setAttribute('id', 'anyoneServiceBox')
anyoneService.append(anyoneServiceBox)

/**Groom */
const groomBox = document.createElement('div')
groomBox.setAttribute('class', 'anyoneServiceEach')
groomBox.setAttribute('id', 'groomBox')
groomBox.style.display = "flex"
anyoneServiceBox.append(groomBox)

const groomNum = document.createElement('div')
groomNum.setAttribute('class', 'serviceEachPart1')
groomBox.append(groomNum)

const groomNumTitle = document.createElement('h6')
groomNumTitle.setAttribute('id', 'groomTitle')
groomNumTitle.textContent = "Groom"
groomNum.append(groomNumTitle)


const groomNumSum = document.createElement('div')
groomNumSum.setAttribute('id', 'groomSum')
groomNumSum.innerHTML = '<div class="sum_container"><button class="decrement" onclick="stepper(this)">-</button><input type="number" min="0" max="50" step="1" value="0" id="groom-input" readonly><button class="increment" onclick="stepper(this)"> + </button></div>'
groomNum.append(groomNumSum)


const groomService = document.createElement('div')
groomService.setAttribute('class', 'serviceEachPart2')
groomService.innerHTML = '<label id="groom_makeup"><input type="checkbox" name="groom_makeup"><p>Makeup</p></label><label id="groom_hairstyle"><input type="checkbox" name="groom_hairstyle"><p>Hairstyle</p></label>'
groomBox.append(groomService)


/**Bridesmaid*/
const bridesmaidBox = document.createElement('div')
bridesmaidBox.setAttribute('class', 'anyoneServiceEach')
bridesmaidBox.setAttribute('id', 'bridesmaidBox')
bridesmaidBox.style.display = "flex"
anyoneServiceBox.append(bridesmaidBox)

const bridesmaidNum = document.createElement('div')
bridesmaidNum.setAttribute('class', 'serviceEachPart1')
bridesmaidBox.append(bridesmaidNum)

const bridesmaidTitle = document.createElement('h6')
bridesmaidTitle.setAttribute('id', 'bridesmaidTitle')
bridesmaidTitle.textContent = "Bridesmaid"
bridesmaidNum.append(bridesmaidTitle)


const bridesmaidNumSum = document.createElement('div')
bridesmaidNumSum.setAttribute('id', 'bridesmaidSum')
bridesmaidNumSum.innerHTML = '<div class="sum_container"><button class="decrement" onclick="stepper(this)">-</button><input type="number" min="0" max="50" step="1" value="0" id="bridesmaid-input" readonly><button class="increment" onclick="stepper(this)"> + </button></div>'
bridesmaidNum.append(bridesmaidNumSum)

const bridesmaidService = document.createElement('div')
bridesmaidService.setAttribute('class', 'serviceEachPart2')
bridesmaidService.innerHTML = '<label id="bridesmaid_makeup"><input type="checkbox" name="bridesmaid_makeup"><p>Makeup</p></label><label id="bridesmaid_hairstyle"><input type="checkbox" name="bridesmaid_hairstyle"><p>Hairstyle</p></label>'
bridesmaidBox.append(bridesmaidService)



/**Flower girl */
const flowergirlBox = document.createElement('div')
flowergirlBox.setAttribute('class', 'anyoneServiceEach')
flowergirlBox.setAttribute('id', 'flowergirlBox')
flowergirlBox.style.display = "flex"
anyoneServiceBox.append(flowergirlBox)

const flowergirlNum = document.createElement('div')
flowergirlNum.setAttribute('class', 'serviceEachPart1')
flowergirlBox.append(flowergirlNum)

const flowergirlTitle = document.createElement('h6')
flowergirlTitle.setAttribute('id', 'flowergirlTitle')
flowergirlTitle.textContent = "Flower girl"
flowergirlNum.append(flowergirlTitle)


const flowergirlNumSum = document.createElement('div')
flowergirlNumSum.setAttribute('id', 'flowergirlSum')
flowergirlNumSum.innerHTML = '<div class="sum_container"><button class="decrement" onclick="stepper(this)">-</button><input type="number" min="0" max="50" step="1" value="0" id="flowergirl-input" readonly><button class="increment" onclick="stepper(this)"> + </button></div>'
flowergirlNum.append(flowergirlNumSum)

const flowergirlService = document.createElement('div')
flowergirlService.setAttribute('class', 'serviceEachPart2')
flowergirlService.innerHTML = '<label id="flowergirl_makeup"><input type="checkbox" name="flowergirl_makeup"><p>Makeup</p></label><label id="flowergirl_hairstyle"><input type="checkbox" name="flowergirl_hairstyle"><p>Hairstyle</p></label>'
flowergirlBox.append(flowergirlService)

/**Woman*/
const womanBox = document.createElement('div')
womanBox.setAttribute('class', 'anyoneServiceEach')
womanBox.setAttribute('id', 'womanBox')
womanBox.style.display = "flex"
anyoneServiceBox.append(womanBox)

const womanNum = document.createElement('div')
womanNum.setAttribute('class', 'serviceEachPart1')
womanBox.append(womanNum)

const womanTitle = document.createElement('h6')
womanTitle.setAttribute('id', 'womanTitle')
womanTitle.textContent = "Woman "
womanNum.append(womanTitle)


const womanNumSum = document.createElement('div')
womanNumSum.setAttribute('id', 'womanSum')
womanNumSum.innerHTML = '<div class="sum_container"><button class="decrement" onclick="stepper(this)">-</button><input type="number" min="0" max="50" step="1" value="0" id="woman-input" readonly><button class="increment" onclick="stepper(this)"> + </button></div>'
womanNum.append(womanNumSum)


const womanService = document.createElement('div')
womanService.setAttribute('class', 'serviceEachPart2')
womanService.innerHTML = '<label id="woman_makeup"><input type="checkbox" name="woman_makeup"><p>Makeup</p></label><label id="woman_hairstyle"><input type="checkbox" name="woman_hairstyle"><p>Hairstyle</p></label>'
womanBox.append(womanService)

/**man*/
const manBox = document.createElement('div')
manBox.setAttribute('class', 'anyoneServiceEach')
manBox.setAttribute('id', 'manBox')
manBox.style.display = "flex"
anyoneServiceBox.append(manBox)

const manNum = document.createElement('div')
manNum.setAttribute('class', 'serviceEachPart1')
manBox.append(manNum)

const manTitle = document.createElement('h6')
manTitle.setAttribute('id', 'manTitle')
manTitle.textContent = "Man "
manNum.append(manTitle)


const manNumSum = document.createElement('div')
manNumSum.setAttribute('id', 'manSum')
manNumSum.innerHTML = '<div class="sum_container"><button class="decrement" onclick="stepper(this)">-</button><input type="number" min="0" max="50" step="1" value="0" id="man-input" readonly><button class="increment" onclick="stepper(this)"> + </button></div>'
manNum.append(manNumSum)

const manService = document.createElement('div')
manService.setAttribute('class', 'serviceEachPart2')
manService.innerHTML = '<label id="man_makeup"><input type="checkbox" name="man_makeup"><p>Makeup</p></label>'
manBox.append(manService)



/*Anything know? */

const anythingKnow = document.createElement('fieldset')
containerPage2.append(anythingKnow)
anythingKnow.setAttribute('id', 'anythingKnow')
const anythingKnowTitle = document.createElement('h5')
anythingKnowTitle.textContent = "Anything want us to know?"
anythingKnow.appendChild(anythingKnowTitle)

const anythingKnowInput = document.createElement('textarea')
anythingKnowInput.setAttribute('name', 'message')
anythingKnowInput.setAttribute('id', 'message')
anythingKnowInput.setAttribute('placeholder', 'Your message')
anythingKnowInput.setAttribute('value', '')
anythingKnow.append(anythingKnowInput)



/*btn-to Page3 */

const btnToPage3 = document.createElement('button')
btnToPage3.setAttribute('type', 'submit')
btnToPage3.setAttribute('id', 'btn_submit')
btnToPage3.textContent = "Submit"
containerPage2.append(btnToPage3)



/*Page 3 */
const containerPage3 = document.createElement('div')
containerPage3.setAttribute('id', 'page_3')
containerPage3.style.display = 'none'
serviceForm.appendChild(containerPage3)



/*Thank you */


const thankyou = document.createElement('div')
containerPage3.append(thankyou)
const thankyouTitle = document.createElement('h3')
thankyouTitle.innerHTML = `Thanks "name".</br>we will contact with you soon!`
const thankyouP = document.createElement('p')
thankyouP.innerHTML = `We will call "phone" to confirm the appointment details with you.`
thankyou.append(thankyouTitle)
thankyou.append(thankyouP)

/* p3-box */

const p3Box = document.createElement('div')
p3Box.setAttribute('id', 'p3Box')
containerPage3.append(p3Box)

const submitImg_A = document.createElement('img')
submitImg_A.setAttribute('id', 'imgA_P3')
submitImg_A.src = "../../assets/contact/submit.jpeg"
submitImg_A.style.width = '100%'
p3Box.append(submitImg_A)


/* p3-box Info "Hide" */
const p3BoxInfo = document.createElement('div')
p3Box.append(p3BoxInfo)

const p3BoxInfoTitle1 = document.createElement('p')
p3BoxInfoTitle1.innerText = 'Your estimated price will be:'
p3BoxInfo.append(p3BoxInfoTitle1)

const p3BoxInfoTitle2 = document.createElement('h4')
p3BoxInfoTitle2.innerText = 'CAD 1,000 - 1,200 '
p3BoxInfo.append(p3BoxInfoTitle2)

const p3BoxInfoP = document.createElement('div')
p3BoxInfoP.setAttribute('id', 'p3BoxServiceList')
p3BoxInfo.append(p3BoxInfoP)

const p3BoxInfoLeft = document.createElement('div')
p3BoxInfoLeft.setAttribute('id', 'p3BoxInfoLeft')
p3BoxInfoP.append(p3BoxInfoLeft)
p3BoxInfoLeft.innerHTML = "<h6>Basic services</h6><ul><li>Exclusive room</li><li>Hairstyle</li><li>Hairstyle trial</li><li>Makeup</li><li>Makeup trial</li><li>Manicure</li><li>Pedicure</li><li>Pedicure</li><li>Coffee or tea with cake</li><li>Bathtub.</li><li>Help with getting dressed</li></ul>"

const p3BoxInfoRight = document.createElement('div')
p3BoxInfoRight.setAttribute('id', 'p3BoxInfoRight')
p3BoxInfoP.append(p3BoxInfoRight)


const p3BoxInfoRight1 = document.createElement('div')
p3BoxInfoRight.append(p3BoxInfoRight1)
p3BoxInfoRight1.innerHTML = "<h6>Premium services</h6><ul><li>Deep skin cleansing</li><li>Waxing</li></ul>"


const p3BoxInfoRight2 = document.createElement('div')
p3BoxInfoRight.append(p3BoxInfoRight2)
p3BoxInfoRight2.innerHTML = "<h6>Additional headcount</h6><ul><li>Groom (makeup + hairstyle)</li><li>Bridesmaid * 2 (hairstyle)</li></ul>"


/* p3-box Other*/


const btnShare = document.createElement('button')
btnShare.setAttribute('type', 'button')
btnShare.setAttribute('id', 'btn_share')
btnShare.textContent = "Share"
p3Box.append(btnShare)


const submitImg_B = document.createElement('img')
submitImg_B.setAttribute('id', 'imgB_P3')
submitImg_B.src = "../../assets/contact/submit.jpeg"
submitImg_B.style.width = '100%'
p3Box.append(submitImg_B)

const p3BoxBottom = document.createElement('div')
p3Box.append(p3BoxBottom)

const logoSvg = document.createElement('img')
logoSvg.setAttribute('id', 'logoSvg')
logoSvg.src = '../../assets/contact/logo_svg.svg'
p3BoxBottom.append(logoSvg)


const p3BoxBottomContact = document.createElement('div')
p3BoxBottomContact.setAttribute('id', 'p3BoxBottomContact')
p3BoxBottom.append(p3BoxBottomContact)

const phone = document.createElement('div')
phone.setAttribute('class', 'bottomContactIcon')
phone.setAttribute('id', 'bottomContactIcon_phone')
phone.innerHTML = "<p>+1 0000000000</p>"
p3BoxBottomContact.append(phone)
const phoneSvg = document.createElement('img')
phoneSvg.src = '../../assets/contact/phone.svg'
phone.prepend(phoneSvg)

const whatsapp = document.createElement('div')
whatsapp.setAttribute('class', 'bottomContactIcon')
whatsapp.innerHTML = "<p>+1 0000000000</p>"
p3BoxBottomContact.append(whatsapp)
const whatsappSvg = document.createElement('img')
whatsappSvg.src = '../../assets/contact/whatsapp.svg'
whatsapp.prepend(whatsappSvg)

const instagram = document.createElement('div')
instagram.setAttribute('class', 'bottomContactIcon')
instagram.innerHTML = "<p>carlabeatrizs_</p>"
p3BoxBottomContact.append(instagram)
const instagramSvg = document.createElement('img')
instagramSvg.src = '../../assets/contact/instagram.svg'
instagram.prepend(instagramSvg)




/* btn-back to P1 */

btnBack.addEventListener('click', () => {
    containerPage1.style.display = "block"
    containerPage2.style.display = "none"
    containerPage3.style.display = "none"
    titleSection.style.display = "block"
})

/*btn-to Page2 */
btnToPage2.addEventListener('click', () => {
    containerPage1.style.display = "none"
    containerPage2.style.display = "block"
    containerPage3.style.display = "none"
    titleSection.style.display = "none"
})
/*btn-skip Page2 */
btnSkipPage2.addEventListener('click', () => {
    containerPage1.style.display = "none"
    containerPage2.style.display = "none"
    containerPage3.style.display = "block"
    titleSection.style.display = "none"
})


/*btn-to Page3*/
btnToPage3.addEventListener('click',() =>{
    containerPage1.style.display="none"
    containerPage2.style.display="none"
    containerPage3.style.display="block"
    titleSection.style.display="none"
    p3BoxInfo.style.display="block"
})

/*Input Stepper*/
function stepper(btn) {
    let container = btn.closest('.sum_container');
    let myInput = container.querySelector('input[type="number"]');
    let btn_class = btn.getAttribute("class");
    let min = parseInt(myInput.getAttribute("min"));
    let max = parseInt(myInput.getAttribute("max"));
    let step = parseInt(myInput.getAttribute("step"));
    let val = parseInt(myInput.getAttribute("value"));
    let calcStep = (btn_class == "increment") ? step : -step;
    let newValue = val + calcStep;

    if (newValue >= min && newValue <= max) {
        myInput.setAttribute("value", newValue);
    }
}




/*email.js*/
function sendMail() {

    getServiceTypeValue = function () {
        const checkboxInputs = document.getElementsByTagName('checkbox');
        for (var i = 0; i < checkboxInputs.length; i++) {
            checkboxInputs[i].checked = true;
            if (makeupInput.checked == true && hairstyleInputInput.checked == true) {
                serviceTypeInput = makeupInput.value + "," + hairstyleInput.value
            }
            if (makeupInput.checked == true && hairstyleInputInput.checked == false) {
                serviceTypeInput = makeupInput.value
            }
            if (makeupInput.checked == false && hairstyleInputInput.checked == true) {
                serviceTypeInput = hairstyleInput.value
            }
            else{
                serviceTypeInput = "none"
            }
        }
    }

    function displayRadioValue() {
        document.querySelectord("#result").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        for (i = 0; i < ele.length; i++) {
            if (ele[i].type = "radio") {

                if (ele[i].checked)
                    document.getElementById("result").innerHTML
                        += ele[i].name + " Value: "
                        + ele[i].value + "<br>";
            }
        }
    }

    let params = {
        eventType: document.getElementById("event_type").value,
        eventDate: document.getElementById("date").value,
        eventTime: document.getElementsByTagName('select').value,
        name: document.getElementById("name").value,
        contactWay: document.getElementById("contact_way").value,
        phone: document.getElementById("phone_input").value,
        whatsapp: document.getElementById("whatsApp_input").value,
        sms: document.getElementById("sms_input").value,
        email: document.getElementById("email_input").value,
        message: document.getElementById("message").value,
        contactTime: document.getElementById("contact_time").value,
        getServiceTypeValue: "",
        serviceType: getServiceTypeValue(),
        eventLocation: document.getElementById("location").value,
    };

    const serviceID = "service_8ddcom8";
    const templateID = "template_g74q3rp";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            alert("Your message sent successfully!!" + res.status);
            console.log(formData)
        })
        .catch((err) => console.log(err));
};
/*email.js*/




/*Submit */
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name')
    const phone = formData.get('phone')

    thankyouTitle.innerHTML = `Thanks ${name}.</br>we will contact with you soon!`
    thankyouP.innerHTML = `We will call ${phone} to confirm the appointment details with you.`
    alert("Submit Success")

    sendMail()
})

/*Submit */


