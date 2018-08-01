const coaching = require('./coaching')

// Seed data.
const seeder = []

// create seed data.
coaching.tbl_coaching_activities.types.forEach((type, i) => {
  seeder.push({
    "COACHING_ACTIVITY": type,
    "DX_CODE": null, // Todo: remove if not needed.
    "HCPC_CODE": null, // Todo: remove if not needed.
    "ID": i + 1,
    "PROC_CODE": null, // Todo: remove if not needed.
    "RECOVERY_PLAN_GOAL": 0, // Question: how does this work?
    "TIME_ALLOWED": null // Todo: remove if not needed.
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_COACHING_ACTIVITIES"
}
