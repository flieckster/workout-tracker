const db = require("../models");

module.exports = (app) => {


    // creation of a workout

    app.post("/api/workouts", (req, res) => {

        const data = req.body

        db.Workout.create(data)
        .then(data => 
            res.json(data))
        .catch(err => {
            console.log("error", err);
            res.json(err);
          });
    });



    // adding an exercise 

    app.put("/api/workouts/:id", (req, res) => {


        db.Workout.findByIdAndUpdate(req.params.id,

            {$push: {exercises: req.body}},
            {new: true, runValidators: true})
            
        .then(data => res.json(data))

        .catch(err => {

            console.log("error", err);

            res.json(err);

          });

    });





    app.get("/api/workouts/range", (req, res) => {


        db.Workout.find({}).limit(7).then(data => res.json(data))


        .catch(err => {

            console.log("error", err);

            res.json(err);

          });

    });   


app.get('/api/workouts/test', (req,res) => {
    res.send('<h1>Works</h1>')
})


    app.get("/api/workouts", (req, res) => {

        db.Workout.find({})
        .then(data => {
            console.log('RES WORKO?UTS FIND ALL =-->', data)
            res.json(data)
        })
        .catch(err => {
            console.log("error", err);
            res.json(err);
          });
    });


    


    app.get("*", (req, res) => {

        res.redirect("/");

    });


};