import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { createNewPost, updateDataUnicorn, } from '../../Redux/thunks';
import classes from './PostFormTest.module.css'
import { getPosts } from '../../Redux/postsReducer';

const PostFormTest = ({ value }) => {
    const dispachForPost = useDispatch();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
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
                && <span className={classes.warning}>min lenght is 4</span>}
            {errors.name
                ?.type === "required" &&
                <span className={classes.warning}>Name is required</span>}

            <input className={classes.myInput}
                placeholder="Aage of unicorn"
                type="age" {...register("age",
                    { required: true, min: 1, max: 25, pattern: /^[0-9]$/ })} />

            {errors.age?.type === "pattern" &&
                <span className={classes.warning}>Insert only numbers</span>}
            {errors.age
                ?.type === "required" &&
                <span className={classes.warning}>Aage is required</span>}

            <select {...register("colour", { required: true })}>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Nigga">Nigga</option>
                <option value="blue">blue</option>
            </select>
            <input className={classes.myInput}
                type="submit" onSubmit={() => reset({})}
            />
            <input type="reset" />
        </form >
    );
};

export default PostFormTest;