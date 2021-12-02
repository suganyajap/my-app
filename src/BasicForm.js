import { useFormik } from "formik";
import * as yup from "yup";

// const validateForm=(values)=>{
//     const errors={};
//     console.log("validateForm",values);
//     //min 5 characters
//     if(values.email.length < 5){
//         errors.email="please provide a longer email";
//     }else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)){
//         errors.password="Invalid email address";
//     }

//     //min 8 characters
//     if(values.password.length < 8){
//         errors.password="please provide a longer password";
//     }else if(values.password.length > 12){
//         errors.password="please provide a longer password";
//     }
//     //max 12 characters
//     console.log(errors);
//     return errors;
// }

//export function BasicForm() {
    //     const { handleSubmit,values,handleChange,handleBlur,errors,touched } =
    //     useFormik({
    //         initialValues:{email:"",password:""},
    //         validate:validateForm,
    //         onSubmit:(values)=>{
    //             console.log("onSubmit",values);
    //         },
    //     });
    //   return (
          
    //     <form onSubmit={handleSubmit}>
    //         <input 
    //         id="email"
    //         name="email"
    //         type="email" 
    //         value={values.email}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         placeholder="enter your email"/>
    //         {errors.email && touched.email ? errors.email : ""}
    //         <input 
    //         id="password"
    //         name="password"
    //         value={values.password}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         type="password" 
    //         placeholder="enter your password"/>
    //         {/* only when the user moves away show the error */}
    //         {errors.password && touched.password ? errors.password : ""}
    //         <button type="submit">submit</button>
    //     </form>
    
    //     );
    
    // }
    
    

const formValidationSchema = yup.object({
    email: yup
    .string().min(5,"email should contain minimum 5 characters")
    .required("email field should not be empty")
    .matches(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,"pattern not matched"
    ),
    password: yup
    .string()
    .min(8,"need a longer password")
    .max(12,"Too much password")
    .required("password should not be empty")

});

export function BasicForm() {
    const { handleSubmit,values,handleChange,handleBlur,errors,touched } =
    useFormik({
        initialValues:{email:"",password:""},
       // validate:validateForm,
       validationSchema:formValidationSchema,
        onSubmit:(values)=>{
            console.log("onSubmit",values);
        },
    });
   return (
      
    <form onSubmit={handleSubmit}>
        <input 
        id="email"
        name="email"
        type="email" 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="enter your email"/>
        {  errors.email && touched.email ? errors.email : "" }
        <input 
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password" 
        placeholder="enter your password"/>
        {/* only when the user moves away show the error */}
        {errors.password && touched.password ? errors.password : ""}
        <button type="submit">submit</button>
    </form>

    );

}


