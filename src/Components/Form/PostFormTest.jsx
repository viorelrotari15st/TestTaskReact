import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { createNewPost, updateDataUnicorn, } from '../../Redux/thunks';
import classes from './PostFormTest.module.css'
import { getPosts } from '../../Redux/postsReducer';

const PostFormTest = ({ value }) => {
    const dispachForPost = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: value.name,
            age: value.age,
            colour: value.colour
        }
    });

    const posts = useSelector(getPosts);
    const postExists = (name) => {
        return posts.some((el) => el.name === name)
    }

    const onSubmit = data => {
        if (data !== undefined && value._id === '' && !postExists(watch("name"))) {
            dispachForPost(createNewPost(data));
            //console.log(postExists(watch("name")))


        } else if (data !== undefined && !postExists(watch("name"))) {
            dispachForPost(updateDataUnicorn(data, value._id))
        }
        else {
            console.log("error dont set data ");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className={classes.myInput}
                placeholder="Name of unicorn"
                {...register("name",
                    { required: true, minLength: 4 })} />

            {errors.name
                ?.type === "minLength"
                && <p className={classes.warning}>min lenght is 4</p>}
            {errors.name
                ?.type === "required" &&
                <p className={classes.warning}>Name is required</p>}

            <input className={classes.myInput}
                placeholder="Aage of unicorn"
                type="age" {...register("age",
                    { required: true, min: 1, max: 25, pattern: /^[0-9]$/ })} />

            {errors.age?.type === "pattern" &&
                <p className={classes.warning}>Insert only numbers</p>}
            {errors.age
                ?.type === "required" &&
                <p className={classes.warning}>Aage is required</p>}

            <select {...register("colour", { required: true })}>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Nigga">Nigga</option>
                <option value="blue">blue</option>
            </select>
            <input className={classes.myInput}
                type="submit" />
        </form >
    );
};

export default PostFormTest;