"use strict";

bugjModels.service('exerciseEntries', ['Backand', '$http', 'exercises', function(Backand, $http, exercises) {

  var modelName = '/1/objects/exercise_entries';

  this.save = function(exercise, weight, repetitions, sets) {
    $http({
      method: 'POST',
      url: Backand.getApiUrl() + modelName + '?returnObject=true',
      data: {
        exercise: exercise.id,
        weight: weight,
        repetitions: repetitions,
        sets: sets,
      }
    }).then(function(response) {
      exercises.updateSingleExerciseCache(response.data.exercise, response.data);
    });
  };

}]);
