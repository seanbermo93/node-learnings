//Monggose - simple api to work with mogodb database

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB..'))
    .catch(err => console.log('Could not connect to -- ' +err));


    //Create a schema - shape the document structure
    //Collection is like a table
    //rOW IS LIKE A DOCUMENt
    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {
            type: Date,
            default: Date.now
        },
        isPublished: Boolean
    });

    //Create a document
    const Course = mongoose.model('Course', courseSchema);

    async function createCourse(){
         const course = new Course({
        name: 'Angular course',
        author: 'San',
        tags: ['Front-End'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);

    }

    //Query a course
    // You can pass additional parameters into the course.find, like attributes

    async function getCourses(){
        const courses = await Course
        .find({isPublished:true})
        .limit(1)
        .sort({name: 1})
        .select({name:1, author:1});
        console.log(courses);
    }

    
    getCourses();

    //Update docs in a mongo db
    //Query first or don't query first, both work fine

    async function updateCourse(id){
        const course = await Course.findById(id);
        if(!course) return;

        course.isPublished = false;
        course.author = 'New Auth';
        const result = await course.save();
        console.log(result);
    }

    //No need to query first 

    async function updateCourseNoQuery(id, name){
        const result = await Course.update({_id:id},{author:name}, {new:true} );
        const afterUpdate = await Course.find({id:id});
        console.log(afterUpdate);
    }

    updateCourseNoQuery('5b8e8eab95340b285c717fb3', 'Sean old auth');
   