module.exports = {
  "seeder" : [
    {
      "DESC":  "Status 1: New to Peer Recovery Coaching during the reporting period",
      "DESC_SHORT":  "New to Coaching in Rpt Period.",
      "ID":  "1"
    },
    {
      "DESC":  "Status 5: Received Peer Recovery Coaching after the reporting period",
      "DESC_SHORT":  "Coached After not During Rpt Period.",
      "ID":  "6"
    },
    {
      "DESC": "Status 3: Received Peer Recovery Coaching before the reporting period but not during the reporting period",
      "DESC_SHORT":  "Coached Before, not During Rpt Period.",
      "ID":  "4"
    },
    {
      "DESC": "Status 1 & 2: New to Peer Recovery Coaching during the reporting period and Received Peer Recovery Coaching both before and during the reporting period",
      "DESC_SHORT": null,
      "ID":  "2"
    },
    {
      "DESC":  "Status 4: Never received Peer Recovery Coaching.",
      "DESC_SHORT":  "Never Coached.",
      "ID":  "5"
    },
    {
      "DESC":  "Status 2: Received Peer Recovery Coaching both before and during the reporting period",
      "DESC_SHORT":  "Coached Before and During Rpt Period.",
      "ID":  "3"
    }
  ],
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_COACHING_STATUS"
}
