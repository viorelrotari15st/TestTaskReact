import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createNewPost, updateDataUnicorn } from "../../Redux/thunks";
import classes from "./PostFormTest.module.css";

const PostFormTest = ({ value }) => {
  const dispachForPost = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: value?.name,
      age: value?.age,
      colour: value?.colour,
    },
  });

  const onSubmit = (data) => {
    if (!!data && !value) {
      dispachForPost(createNewPost(data));
      reset();
    } else if (!!data && value._id !== " ") {
      dispachForPost(updateDataUnicorn(data, value._id));
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className={classes.myInput}
        placeholder="Name of unicorn"
        {...register("name", { required: true, minLength: 4 })}
      />

      {errors.name?.type === "minLength" && (
        <span className={classes.warning}>min lenght is 4</span>
      )}
      {errors.name?.type === "required" && (
        <span className={classes.warning}>Name is required</span>
      )}

      <input
        className={classes.myInput}
        placeholder="Aage of unicorn"
        type="age"
        {...register("age", {
          required: true,
          min: 1,
          max: 25,
          pattern: /^[0-9]$/,
        })}
      />

      {errors.age?.type === "pattern" && (
        <span className={classes.warning}>Insert only numbers</span>
      )}
      {errors.age?.type === "required" && (
        <span className={classes.warning}>Aage is required</span>
      )}

      <select
        defaultValue={"DEFAULT"}
        className={classes.myInput}
        {...register("colour", { required: true })}
      >
        <option value="DEFAULT" selected disabled hidden>
          Choose here
        </option>
        <option value="White">White</option>
        <option value="Black">Black</option>
        <option value="Red">Red</option>
        <option value="Zebra">Zebra</option>
        <option value="blue">blue</option>
      </select>
      <input className={classes.myBtn} type="submit" />
    </form>
  );
};

export default PostFormTest;
