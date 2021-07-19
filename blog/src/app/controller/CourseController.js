const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')


class CourseController {
    //[GET] /courses/:slug
    show(req, res,next) {
        
        Course.findOne({slug:req.params.slug})
        .then(course=>
            {
                console.log(req.params.slug);
                res.render('./courses/show',{course:mongooseToObject(course)})
            })
        .catch(next)
    }

    //[Get] /courses/create
    create(req, res,next) {
        res.render('./courses/create');
    }

    //[Post] /courses/store
    store(req, res,next) {
        const formData = req.body;
        formData.image=`http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
        .then(()=>res.redirect('/'))
        .catch(error=>{
        });
    
    }

     //[Post] /courses/:id/edit
     edit(req, res,next) {
        Course.findById(req.params.id)
        .then(course=>{
            res.render('./courses/edit', {course:mongooseToObject(course)});
        })
        .catch(next)
    }

    //[Put] /course/:id
    update(req, res, next) {
        console.log(req.body.id);
        Course.updateOne({_id:req.params.id}, req.body)
        .then(
            ()=>res.redirect('/me/stored/courses')
        ) 
        .catch(next)
    }

    //[Patch] /course/:id/restore

    restore(req,res,next){
        Course.restore({ _id: req.params.id})
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(next)
    }

    //[DELETE] /course/:id/delete
    delete(req, res, next) {
        Course.delete({_id:req.params.id})
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(next)
    }

    //[DELETE] /course/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
}

module.exports = new CourseController();
