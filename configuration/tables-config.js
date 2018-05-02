module.exports = {
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
  // tables/billing
  //==================================================
  "tbl_billto": {
    "bill_types": ['Medicare', 'Medicaid']
  },
  "tbl_medical_ins": {
    "insurance_types": ['None', 'Medicare', 'Medicaid', 'Private', 'MAP/County Program', 'VA', 'Other']
  },
  "tbl_rec_medical_ins": { // many to a tbl_recoveree.
    "total": 8
  },
  "tbl_rec_primary_funder": {
    "total": 0
  }
}
