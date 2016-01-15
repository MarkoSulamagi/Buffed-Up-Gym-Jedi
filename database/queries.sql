SELECT e.*, ee1.id as ee_id, ee1.weight, ee1.repetitions, ee1.sets
FROM exercises e
LEFT JOIN exercise_entries ee1 ON (e.id = ee1.exercise)

LEFT OUTER JOIN exercise_entries ee2 ON (e.id = ee2.exercise AND (ee1.id < ee2.id))
WHERE ee2.id IS NULL;
