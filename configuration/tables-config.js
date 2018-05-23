module.exports = {
  //==================================================
  // tables/coaching
  //==================================================
  "tbl_rec_coaching_units": {
      "total": 8
  },
  "tbl_rec_coaching_groups": {
    "types" : []
  },
  "tbl_rec_coaching_groups_people": {
    "types": []
  },
  "tbl_rec_coaching_activity": {
    "total": 8
  },
  "tbl_rec_coaching": {
    "total": 10
  },
  "tbl_rec_coach_types": {
    "total": 8
  },
  "tbl_rec_coach_assign": {
    "total": 8
  },
  "tbl_coaching_units_conversion": {
    "types": [
      {
        "MINUTES_PER_UNIT": 4,
        "PROGRAM": 2
      },
      {
        "MINUTES_PER_UNIT": 9,
        "PROGRAM": 2
      },
      {
        "MINUTES_PER_UNIT": 15,
        "PROGRAM": 3
      },
      {
        "MINUTES_PER_UNIT": 3,
        "PROGRAM": 2,
      },
      {
        "MINUTES_PER_UNIT": 3,
        "PROGRAM": 1
      },
      {
        "MINUTES_PER_UNIT": 26,
        "PROGRAM": 2
      },
      {
        "MINUTES_PER_UNIT": 22,
        "PROGRAM": 2
      },
      {
        "MINUTES_PER_UNIT": 1,
        "PROGRAM": 3
      },
      {
        "MINUTES_PER_UNIT": 16,
        "PROGRAM": 2
      },
      {
        "MINUTES_PER_UNIT": 60,
        "PROGRAM": 3
      }
    ]
  },
  "tbl_coach_certifications": {
    "types": [
      "PRC 46 Hour Training Completed",
      "PRC Specialist Designation",
      "PRC Specialist Certification",
      "PRC Trainer",
      "PRC Trainer of Trainers",
      "Co-Occurring",
      "Certified Peer Specialist",
      "TAY Module Completed",
      "WRAP"
    ]
  },
  "tbl_coaching_session_type": {
    "types": [
      "Individual Face-to-Face Recovery Coaching",
      "Telephone Recovery Coaching",
      "Internet Recovery Coaching",
      "Travelling Companion Recovery Coaching",
      "Missed Appointment"
    ]
  },
  "tbl_coaching_status": {
    "types": [
      {
        "DESC": "Status 1: New to Peer Recovery Coaching during the reporting period",
        "DESC_SHORT": "New to Coaching in Rpt Period"
      },
      {
        "DESC": "Status 1 & 2: New to Peer Recovery Coaching during the reporting period and Received Peer Recovery Coaching both before and during the reporting period",
        "DESC_SHORT": ""
      },
      {
        "DESC": "Status 2: Received Peer Recovery Coaching both before and during the reporting period",
        "DESC_SHORT": "Coached Before and During Rpt Period."
      },
      {
        "DESC": "Status 3: Received Peer Recovery Coaching before the reporting period but not during the reporting period",
        "DESC_SHORT": "Coached Before, not During Rpt Period."
      },
      {
        "DESC": "Status 4: Never received Peer Recovery Coaching.",
        "DESC_SHORT": "Never Coached."
      },
      {
        "DESC": "Status 5: Received Peer Recovery Coaching after the reporting period",
        "DESC_SHORT": "Coached After not During Rpt Period."
      }
    ]
  },
  "tbl_coaching_activities": {
    "types": [
      "Substance Use & Sobriety",
      "Global Health Psychological",
      "Global Health Physical",
      "Citizenship & Community Involvement",
      "Social Support",
      "Meaningful Activities",
      "Housing & Safety",
      "Risk Taking",
      "Coping & Life Functioning",
      "Recovery Experience",
      "Review Recovery Plan",
      "Weekly Mini Goal Review and Follow up",
      "Reviewed URICA",
      "DSHS 9 Month Interview",
      "Review Wellness Self-Assessment",
      "ID Card",
      "Take GPRA - 6 month",
      "DSHS Enrollment Interview",
      "Take Recovery Capital Survey",
      "Set-up Primary Care Doctor",
      "Take Quality of Life Survey",
      "Budgeting/Financial Planning",
      "Legal Issues",
      "Mutual Support Meetings",
      "Volunteer Opportunities",
      "Locate Housing",
      "Education Opportunities",
      "Take Wellness Self-Assessment",
      "DSHS 6 Month Interview",
      "Recreation/Leisure",
      "Take GPRA - Initial",
      "Review Quality of Life Survey",
      "Worked with family/natural support/service provider",
      "Employability",
      "Worked on Strength Based Assessment",
      "Set-up Outpatient Treatment",
      "Develop Recovery Plan",
      "DSHS 12 Month Interview",
      "Set-up Mental Health Treatment",
      "Set-up Inpatient Treatment",
     "DSHS 3 Month Interview",
      "Take URICA",
      "Review Recovery Capital Survey",
      "Take GPRA- Discharge"
    ]
  },
  "tbl_wellness_survey_responses": {
    "types": [
      {
        "DESCRIPTION": "Never",
        "VISUAL": "|||||"
      },
      {
        "DESCRIPTION": "Almost never",
        "VISUAL": "||||||||||"
      },
      {
        "DESCRIPTION": "Occasionally",
        "VISUAL": "|||||||||||||||"
      },
      {
        "DESCRIPTION": "Almost always",
        "VISUAL": "||||||||||||||||||||"
      },
      {
        "DESCRIPTION": "Always",
        "VISUAL": "|||||||||||||||||||||||||"
      }
    ]
  },
  "tbl_volunteer_category": {
    "types": [
      "Giving Back",
      "Community Service",
      "Stipended Position",
      "Intern"
    ]
  },
  "tbl_volunteer_activities": {
    "types": [
      "Recovery Group Facilitation",
      "Educational Instruction",
      "Board Member",
      "Educational Instruction",
      "Front Desk / Reception",
      "Administrative / Clerical",
      "Administration",
      "Health and Wellness Instructor",
      "Peer Leader",
      "Community Based Event",
      "Community Service",
      "Other Volunteer Services",
      "Peer Recovery Coach",
      "Cleaning / Housekeeping",
      "Resource Volunteer",
      "Event Planning and Coordination"
    ]
  },
  "tbl_wellness_self_assessment_groups": {
    "types": [
      "Physical Wellness",
      "Environmental Wellness",
      "Spiritual Wellness",
      "Emotional/Psychological Wellness",
      "Intellectual Wellness",
      "Occupational Wellness",
      "Social Wellness"
    ]
  },
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
  // tables/training
  //=================================================
  "tbl_activity_groups": {
    "types": ['Events', 'Ancillary', 'Educational', 'Referral', 'Activity']
  },
  "tbl_activity": {
    "total": 20
  },
  "tbl_events": {
    "total": 0
  },
  "tbl_rec_te_activity": {
    "total": 8
  },
  "tbl_trainings_trainers": {
    "total": 5
  },
  "tbl_trainings_events_groups": {
    "types": ['Events', 'Educational', 'Ancillary', 'Referrals']
  },
  "tbl_trainings_events": {
    "total": 5
  },
  "tbl_training_event_locations": {
    "types" : [
      'Communities For Recovery',
      'Austin Recovery',
      'Trinity Center',
      'Texas Star Recovery',
      'Austin State Hospital - CAP',
      'Austin State Hospital - Adult',
      'Seton Shoal Creek',
      'Community Drug Court',
      'Travis County Drug Court - The Short Program',
      'Family Drug Court'
    ]
  },
  "tbl_rec_trainings_events": {
    "total": 10
  },
  //==================================================
  // tables/system
  //==================================================
  "tblrole": {
    "types": [
      "Admin",
      "Employee",
      "volunteer"
    ]
  },
  //==================================================
  // tables/programs
  //==================================================
  "tbl_time_intervals": {
    "total": 8
  },
  "tbl_rcc": {
    "types": ['Center1', 'Center2', 'Center3','Center4', 'Center5']
  },
  //==================================================
  // tables/clientinfo
  //==================================================
  "tbl_recoverees": {
    "total": 8,
    "id": "0ed70a4b-682d-446d-bf88-7640359b07"
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
  "tbl_rec_activities": {
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
  // tables/contacts
  //==================================================
  "tbl_checkup_referral_source": {
    "types": ["self", "Mother", "Father", "Sister", "Friend"]
  },
  "tbl_rec_recovery_checkup_services": {
    "total": 8
  },
  "tbl_call_times": {
    "types": ['AM', '8am - 10am', '10am - 12pm', 'Afternoon', 'PM']
  },
  "tbl_rec_recovery_checkup": {
    "total": 3
  },
  "tbl_cell_provider": {
    "types": [
      {
        "CELLULAR_PROVIDER": "AT&T",
        "EMAIL_TEXT_SUFFIX": "@txt.att.net"
      } ,
      {
        "CELLULAR_PROVIDER": "Verizon",
        "EMAIL_TEXT_SUFFIX": "@vtext.com"
      } ,
      {
        "CELLULAR_PROVIDER": "Sprint",
        "EMAIL_TEXT_SUFFIX": "@messaging.sprintpcs.com"
      } ,
      {
        "CELLULAR_PROVIDER": "T-Mobile",
        "EMAIL_TEXT_SUFFIX": "@tmomail.net"
      } ,
      {
        "CELLULAR_PROVIDER": "US Cellular",
        "EMAIL_TEXT_SUFFIX": "@email.uscc.net"
      } ,
      {
        "CELLULAR_PROVIDER": "Nextel",
        "EMAIL_TEXT_SUFFIX": "@messaging.nextel.com"
      } ,
      {
        "CELLULAR_PROVIDER": "Virgin Mobile",
        "EMAIL_TEXT_SUFFIX": "@vmobl.com"
      } ,
      {
        "CELLULAR_PROVIDER": "Metro PCS",
        "EMAIL_TEXT_SUFFIX": "@mymetropcs.com"
      }
    ]
  },
  "tbl_checkup_discharge_reasons": {
    "types": [
      {
        "ATTEMPTS": 10,
        "DISCHARGE_REASON": "D10"
      } ,
      {
        "ATTEMPTS": 15,
        "DISCHARGE_REASON": "LOST CONTACT"
      }
    ]
  },
  "tbl_checkup_services": {
    "types": ['Text', 'Phone']
  },
  "tbl_phone_types": {
    "types": ['Mobile', 'Home', 'Office']
  },
  "tbl_rec_calls": {
    "total": 8
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
        "DESC" : "01. <= 6 Months",
        "LOW_NBR_OFDAYS" : 0,
        "HIGH_NBR_OFDAYS": 180
      },
      {
        "DESC" : "02. >6 and <= 12 Months",
        "LOW_NBR_OFDAYS" : 181,
        "HIGH_NBR_OFDAYS": 365
      },
      {
        "DESC" : "03. >12 and <= 24 Months",
        "LOW_NBR_OFDAYS" : 366,
        "HIGH_NBR_OFDAYS": 730
      },
      {
        "DESC" : "04. >2 and  <= 3 Years",
        "LOW_NBR_OFDAYS" : 731,
        "HIGH_NBR_OFDAYS": 1095
      },
      {
        "DESC" : "05. >3 and <= 5 Years",
        "LOW_NBR_OFDAYS" : 1096,
        "HIGH_NBR_OFDAYS": 1825
      },
      {
        "DESC" : "06. >5 Years",
        "LOW_NBR_OFDAYS" : 999999999,
        "HIGH_NBR_OFDAYS": 180
      }
    ]
  },
  //==================================================
  // tables/billing
  //==================================================
  "tbl_billto": {
    "types": [
      "Medicare",
      "Medicaid"
    ]
  },
  "tbl_medical_ins": {
    "types": [
      "None",
      "Medicare",
      "Medicaid",
      "Private",
      "MAP/County Program",
      "VA",
      "Other"
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
        "DESCRIPTION" : "0 to 11 Years Old",
        "START_AGE" : 0,
        "END_AGE": 11
      },
      {
        "DESCRIPTION" : "11 to 17 Years Old",
        "START_AGE" : 11,
        "END_AGE": 17
      },
      {
        "DESCRIPTION" : "18 to 24 Years Old",
        "START_AGE" : 18,
        "END_AGE": 24
      },
      {
        "DESCRIPTION" : "25 to 35 Years Old",
        "START_AGE" : 25,
        "END_AGE": 34
      },
      {
        "DESCRIPTION" : "35 to 44 Years Old",
        "START_AGE" : 35,
        "END_AGE": 44
      },
      {
        "DESCRIPTION" : "45 to 54 Years Old",
        "START_AGE" : 45,
        "END_AGE": 54
      },
      {
        "DESCRIPTION" : "55 to 64 Years Old",
        "START_AGE" : 55,
        "END_AGE": 64
      },
      {
        "DESCRIPTION" : "65 to 74 Years Old",
        "START_AGE" : 65,
        "END_AGE": 74
      },
      {
        "DESCRIPTION" : "75 or Older",
        "START_AGE" : 75,
        "END_AGE": 100
      }
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
