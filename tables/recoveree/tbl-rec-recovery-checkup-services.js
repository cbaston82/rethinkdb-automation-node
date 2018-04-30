module.exports = {
  "seeder" : [
    {
      "Itemserviceid": 14,
      "fk_recoverycheckupid": 16,
      "fk_serviceid": 1
    },
    {
      "Itemserviceid": 13,
      "fk_recoverycheckupid": 15,
      "fk_serviceid": 1
    },
    {
      "Itemserviceid": 17,
      "fk_recoverycheckupid": 15,
      "fk_serviceid": 2
    },
    {
      "Itemserviceid": 15,
      "fk_recoverycheckupid": 16,
      "fk_serviceid": 2
    },
    {
      "Itemserviceid": 16,
      "fk_recoverycheckupid": 17,
      "fk_serviceid": 1
    }
  ],
  "indexes" : ['Itemserviceid', 'fk_recoverycheckupid', 'fk_serviceid'],
  "compoundIndexes" : [],
  "table" : "tbl_rec_recovery_checkup_services"
}
