module.exports = {
  //==================================================
  // tables/tblrole
  //==================================================
  "tblrole": {
    "types": [
      "Admin",
      "Employee",
      "volunteer"
    ]
  },
  //==================================================
  // tables/clientinfo
  //==================================================
  "tbl_recoverees": {
    "total": 8
  },
  "tbl_rec_people_types": { // many to a recoveree.
    "total": 8
  },
  "tbl_rec_recovery_status": { // many to a recoveree.
    "total": 0
  },
  "tbl_rec_goals": { // many to a recoveree.
    "total": 8
  },
  "tbl_recoveree_attributes": {
    "total": 8
  },
  "tbl_rec_goals_objectives": { // may to tbl_rec_goals.
    "total": 16
  },
  "client_info" : {
    "total": 8
  },
  "client_notes" : {
    "total": 8
  },
  "tbl_rec_address" : {
    "total": 8
  },
  "tbl_activities": {
    "total": 0
  },
  "tbl_rec_doc_info": {
    "total": 8
  },
  "tbl_rec_education": {
    "total": 8
  },
  "tbl_rec_emergency_contact": {
    "total": 8
  },
  "tbl_rec_ethnicity": {
    "total": 8
  },
  "tbl_rec_family": {
    "total": 8
  },
  "tbl_rec_race": {
    "total": 0
  },
  //==================================================
  // tables/person
  //==================================================
  "tbl_person": {
    "total": 8
  },
  "tbl_person_demographics": {
    "total": 8
  },
  "tbl_clean_time_ranges": {
    "types": [
      {
        "description" : "01. <= 6 Months",
        "low" : 0,
        "high": 180
      },
      {
        "description" : "02. >6 and <= 12 Months",
        "low" : 181,
        "high": 365
      },
      {
        "description" : "03. >12 and <= 24 Months",
        "low" : 366,
        "high": 730
      },
      {
        "description" : "04. >2 and  <= 3 Years",
        "low" : 731,
        "high": 1095
      },
      {
        "description" : "05. >3 and <= 5 Years",
        "low" : 1096,
        "high": 1825
      },
      {
        "description" : "06. >5 Years",
        "low" : 999999999,
        "high": 180
      }
    ]
  },
  //==================================================
  // tables/billing
  //==================================================
  "tbl_billto": {
    "types": [
      'Medicare',
      'Medicaid'
    ]
  },
  "tbl_medical_ins": {
    "types": [
      'None',
      'Medicare',
      'Medicaid',
      'Private',
      'MAP/County Program',
      'VA',
      'Other'
    ]
  },
  "tbl_rec_medical_ins": { // many to a tbl_recoveree.
    "total": 8
  },
  "tbl_rec_primary_funder": {
    "total": 0
  },
  //==================================================
  // tables/employment
  //==================================================
  "tbl_employment": {
    "types": [
      "Full Time",
      "Part-Time",
      "Looking for Work",
      "SSI/SSDI",
      "Retired",
      "Not Looking for Work"
    ]
  },
  "tbl_rec_employment": {
    "total": 8
  },
  //==================================================
  // tables/demographics
  //==================================================
  "tbl_sexual_orientation": {
    "types": [
      "Heterosexual (Straight)",
      "Homosexual (Gay/Lesbian)",
      "Bisexual",
      "Other",
      "No Response"
    ]
  },
  "tbl_referred_by": {
    "types": [
      "SAMHSA"
    ]
  },
  "tbl_people_types": {
    "types": [
      "In Recovery",
      "Friend / Ally of Recovery",
      "Family Member",
      "Co-Occurring Recovery"
    ]
  },
  "tbl_housing_options": {
    "types": [
      "Streets/Outdoors",
      "Shelter",
      "Someone Else's",
      "Halfway House",
      "Own/rent",
      "Recovery or Sober House",
      "Residential Treatment",
      "Incarcerated",
      "Other Institution",
      "College Residence",
      "Other",
      "NARR Level 1",
      "NARR Level 2",
      "NARR Level 3",
      "NARR Level 4",
    ]
  },
  "tbl_how_they_heard": {
    "types": [
      "Referral from another Agency",
      "Child Protective Services",
      "Drug Court",
      "Employer",
      "Family",
      "Friend",
      "Print Media",
      "Probation/Parole",
      "Recovery / Sober House",
      "Treatment Program",
      "Website",
      "Other"
    ]
  },
  "tbl_referral_source": {
    "types": [
      "Walk-In",
      "Austin Recovery Center",
      "Courts",
      "Probation",
      "Community Service Program/Court",
      "Treatment Program",
      "DCYF",
      "Self-Referred",
      "Member",
      "Other Human Service Provider",
      "Family/Friends",
      "Child Welfare"
    ]
  },
  "tbl_gender": {
    "types": [
      "Male",
      "Female",
      "Transgender",
      "Other"
    ]
  },
  "tbl_education": {
    "types": [
      "Never Attended",
      "K - 6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th High School Diploma or GED",
      "College/University 1st Year Completed",
      "College/University 1st Year Completed / Associates Degree",
      "College/University 3rd Year Completed",
      "College/University 4th Year Completed",
      "Bachelor's Degree",
      "Master's Degree or Higher",
      "Vocational Training After High School No Diploma",
      "Vocational / Tech Diploma After High School"
    ]
  },
  "tbl_relationship_cd": {
    "types": [
      "Mother",
      "File",
      "Daughter",
      "Son",
      "Spouce"
    ]
  },
  "tbl_language": {
    "types": [
      "English",
      "French",
      "Spanish",
      "Other"
    ]
  },
  "tbl_marital_status": {
    "types": [
      "Single",
      "Married",
      "Living as married",
      "Separated",
      "Divorced",
      "Widowed"
    ]
  },
  "tbl_ethnicity": {
    "types": [
      "African American",
      "European",
      "Carribian",
      "Portuguese",
      "Haitian",
      "Cape Verdean",
      "Hispanic",
      "Puerto Rican",
      "Unknown"
    ]
  },
  "tbl_race": {
    "types": [
      "Black/African American\"",
      "White",
      "Native Hawaiian or other Pacific Islander",
      "Asian",
      "American Indian",
      "Hispanic or Latino",
      "Other",
      "Refused to answer",
      "Alaska Native"
    ]
  },
  "tbl_family": {
    "types": [
      "Have children",
      "With DCF"
    ]
  },
  "tbl_attributes_master": {
    "types": [
      "All (non-employees)",
      "Coach",
      "Employee",
      "Facilitator",
      "Gambler",
      "Inactive",
      "Service Member",
      "Trainer",
      "Veteran",
      "Volunteer",
      "Board Member",
      "Coach TOT",
      "Drug Court",
      "Pregnant Woman",
      "Hispanic/Latino - No",
      "Hispanic/Latino - Yes"
    ]
  },
  "tbl_attributes_user": {
    "types": [
      "All (non-employees)",
      "Coach",
      "Employee",
      "Facilitator",
      "Gambler",
      "Inactive",
      "Service Member",
      "Trainer",
      "Veteran",
      "Volunteer",
      "Board Member",
      "Coach TOT",
      "Drug Court"
    ]
  },
  "tbl_demographics": {
    "types": [
      "Gender",
      "Hispanic",
      "Race",
      "Ethnicity",
      "Marital Status",
      "Sexual Orientation"
    ]
  },
  "tbl_transportation_type": {
    "types": [
      "Bus",
      "Car"
    ]
  },
  "tbl_age_cohort": {
    types: [
      {
        "description" : "0 to 11 Years Old",
        "start" : 0,
        "end": 11
      },
      {
        "description" : "11 to 17 Years Old",
        "start" : 11,
        "end": 17
      },
      {
        "description" : "18 to 24 Years Old",
        "start" : 18,
        "end": 24
      },
      {
        "description" : "25 to 35 Years Old",
        "start" : 25,
        "end": 34
      },
      {
        "description" : "35 to 44 Years Old",
        "start" : 35,
        "end": 44
      },
      {
        "description" : "45 to 54 Years Old",
        "start" : 45,
        "end": 54
      },
      {
        "description" : "55 to 64 Years Old",
        "start" : 55,
        "end": 64
      },
      {
        "description" : "65 to 74 Years Old",
        "start" : 65,
        "end": 74
      },
      {
        "description" : "75 or Older",
        "start" : 75,
        "end": 100
      }
    ]
  },
  //==================================================
  // tables/coaching
  //==================================================
  "tbl_wellness_areas": {
    "types": [
      "All (non-employees)",
      "Interests and Activities",
      "Living Environment",
      "Employment",
      "Learning",
      "Financial",
      "Lifestyles and Health",
      "Faith and Spirituality",
      "Relationships",
      "Mental Health",
      "Legal Issues"
    ]
  },
  //==================================================
  // tables/medical
  //==================================================
  "tbl_drugs": {
    "types": [
      "Heroin",
      "Cocaine",
      "Crack",
      "Benzos"
    ]
  },
  "tbl_rec_drugs": {
    "total": 8
  }
}
