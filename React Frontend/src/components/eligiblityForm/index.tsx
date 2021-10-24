import React, { useState } from 'react'
import { handleFieldChangeType, dateType, titleType, maritalStatusType, slideOneData } from './types'
import { TextField } from './fields/textField'

const FormHeader = () => (
  <div>
    <h1 color="dark" className="styled-components__StyledH100-sc-1sz9c1e-2 byzqsU">Create your account</h1>
    <span className="sc-1szpc45-0 iFrQzB">1 of 4</span>
    <p color="dark" style={{marginTop:"16px"}} className="styled-components__StyledBodyCopy-sc-1jewl6s-2 hKZRNw">&nbsp;</p>
  </div>
)

const TitleFields = () => (
  <div className="nfvl64-16 fqHuPR">
    <fieldset className="styled-components__FieldSetWrapper-sc-9ftzsn-1 bCvGkS">
      <legend className="styled-components__Legend-sc-9ftzsn-3 nfvl64-3 eraHKD">Title</legend>
      <span className="styled-components__FieldsWrapper-sc-eckmxt-0 bpePzI">
        <span className="styled-components__Group-sc-w83f1-1 jOGirl">
          <label className="styled-components__Option-sc-w83f1-2 nfvl64-8 jbFKRg">
            <span>Mr</span>
            <input type="radio" id="title-0" name="title" value="Mr" className="styled-components__HiddenInput-sc-w83f1-3 jJzdds" />
          </label>
          <label className="styled-components__Option-sc-w83f1-2 nfvl64-8 jbFKRg">
            <span>Mrs</span>
            <input type="radio" id="title-1" name="title" value="Mrs" className="styled-components__HiddenInput-sc-w83f1-3 jJzdds" />
          </label>
          <label className="styled-components__Option-sc-w83f1-2 nfvl64-8 jbFKRg">
            <span>Miss</span>
            <input type="radio" id="title-2" name="title" value="Miss" className="styled-components__HiddenInput-sc-w83f1-3 jJzdds" />
          </label>
          <label className="styled-components__Option-sc-w83f1-2 nfvl64-8 jbFKRg">
            <span>Ms</span>
            <input type="radio" id="title-3" name="title" value="Ms" className="styled-components__HiddenInput-sc-w83f1-3 jJzdds" />
          </label>
          <label className="styled-components__Option-sc-w83f1-2 nfvl64-8 jbFKRg">
            <span>Dr</span>
            <input type="radio" id="title-4" name="title" value="Dr" className="styled-components__HiddenInput-sc-w83f1-3 jJzdds" />
          </label>
        </span>
      </span>
    </fieldset>
  </div>
)

const DataOfBirthFieldset = () => (
  <div className="nfvl64-16 fqHuPR">
    <fieldset className="styled-components__FieldSetWrapper-sc-9ftzsn-1 bCvGkS">
      <legend className="styled-components__Legend-sc-9ftzsn-3 kOcLQB">Date of birth</legend>
      <span className="styled-components__FieldsWrapper-sc-eckmxt-0 bpePzI">
        <div className="sc-4nfk3c-0 kPhDFg">
          <span className="styled-components__InputWrapper-sc-3y6w2z-0 gKKise">
            <input type="number" autoComplete="tm-dob-day" name="day" placeholder="DD" style={{textAlign: "center"}}  className="styled-components__StyledInput-sc-3y6w2z-1 ikonXC" value="" />
          </span>
          <span className="styled-components__InputWrapper-sc-3y6w2z-0 gKKise">
            <input type="number" autoComplete="tm-dob-month" name="month" placeholder="MM" style={{textAlign: "center"}}className="styled-components__StyledInput-sc-3y6w2z-1 ikonXC" value="" />
          </span>
          <span className="styled-components__InputWrapper-sc-3y6w2z-0 gKKise">
            <input type="number" autoComplete="tm-dob-year" name="year" placeholder="YYYY" style={{textAlign: "center"}}className="styled-components__StyledInput-sc-3y6w2z-1 ikonXC" value="" />
          </span>
        </div>
      </span>
    </fieldset>
  </div>
)

const MaritalFieldsSet = () => (
  <div className="nfvl64-16 fqHuPR">
    <fieldset className="styled-components__FieldSetWrapper-sc-9ftzsn-1 bCvGkS">
      <legend className="styled-components__Legend-sc-9ftzsn-3 kOcLQB">Marital status</legend>
      <span className="styled-components__FieldsWrapper-sc-eckmxt-0 bpePzI">
        <div style={{display:"grid", gridRowGap:"8px"}}>
          <label className="Radio__StyledLabel-sc-fdf265-0 fUSKYI">
            <div className="Radio__CustomRadioCheck-sc-fdf265-1 bIeODU"></div>
            <span>Single</span>
            <input type="radio" id="maritalStatus-0" name="maritalStatus" value="Single" className="Radio__HiddenInput-sc-fdf265-2 lhdcnU" /> 
          </label>
          <label className="Radio__StyledLabel-sc-fdf265-0 fUSKYI">
            <div className="Radio__CustomRadioCheck-sc-fdf265-1 bIeODU"></div>
            <span>Married/Civil partnership</span>
            <input type="radio" id="maritalStatus-1" name="maritalStatus" value="Married" className="Radio__HiddenInput-sc-fdf265-2 lhdcnU" />
          </label>
          <label className="Radio__StyledLabel-sc-fdf265-0 fUSKYI">
            <div className="Radio__CustomRadioCheck-sc-fdf265-1 bIeODU"></div>
            <span>Living with partner</span>
            <input type="radio" id="maritalStatus-2" name="maritalStatus" value="Cohabiting" className="Radio__HiddenInput-sc-fdf265-2 lhdcnU" />
          </label>
          <label className="Radio__StyledLabel-sc-fdf265-0 fUSKYI">
            <div className="Radio__CustomRadioCheck-sc-fdf265-1 bIeODU"></div>
            <span>Divorced</span>
            <input type="radio" id="maritalStatus-3" name="maritalStatus" value="Divorced" className="Radio__HiddenInput-sc-fdf265-2 lhdcnU" />
          </label>
          <label className="Radio__StyledLabel-sc-fdf265-0 fUSKYI">
            <div className="Radio__CustomRadioCheck-sc-fdf265-1 bIeODU"></div>
            <span>Widowed</span>
            <input type="radio" id="maritalStatus-4" name="maritalStatus" value="Widowed" className="Radio__HiddenInput-sc-fdf265-2 lhdcnU" />
          </label>
        </div>
      </span>
    </fieldset>
  </div>
)

const ContinueButton = () => (
  <div className="nfvl64-17 itlRRs">
    <button type="submit" data-testid="canopy-registration-continue-btn" data-gtm-event="validation-step1" className="Button__StyledButton-sc-9sjskx-0 eenznt nfvl64-15 jvrUpq">Continue</button>
  </div>
)


export function EligiblityForm() {
  const [formData, setFormData] = useState<slideOneData>({});

  const handleFormSubmit = (e: React.FormEvent, slideData: slideOneData | null) => {
    e.preventDefault()

    if (slideData === null) return
  }

  const handleFieldChange = (e: React.FormEvent) => {
    console.log("a")
  }

  return (
    <div className="Grid__StyledDiv-sc-1o91qoi-0 gwxTij g0ow1w-0 jdEqvn">
      <div className="g0ow1w-1 fVQAsO">

        <FormHeader />
        <form onSubmit={(e: React.FormEvent) => handleFormSubmit(e, formData)}>
          <h3 className="styled-components__StyledH80-sc-1sz9c1e-3 hDfZPQ nfvl64-13 cCTZiQ" color="dark">Eligibililty Check</h3>
          <p color="dark" className="styled-components__StyledBodyCopy-sc-1jewl6s-2 hKZRNw nfvl64-14 gsNxnP">We use this information to identify which cards you are eligible for.</p>
          <TitleFields />
          <div className="nfvl64-16 fqHuPR">
            <TextField title="firstname" placeholder="First Name" name="firstname" value={formData.firstName} handleFieldChange={handleFieldChange} />
            <div className="nfvl64-18 jVBbur"></div>
            {/* <TextField /> */}
            <div className="nfvl64-18 jVBbur"></div>
            <DataOfBirthFieldset />
            <MaritalFieldsSet />
            <ContinueButton />
          </div>
        </form>

      </div>
    </div>
  )
}