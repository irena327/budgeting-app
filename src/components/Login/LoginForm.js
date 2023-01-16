import React, { PureComponent, useRef } from "react";
import History from "../../navigation/History";
import { Form, Input, Button } from "antd";
import "../../pages/Login/Login.css";
import firebase from "../../firebase";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// export default class AdminLoginForm extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

const layout = {
   labelCol: {
     span: 5,
   },
   wrapperCol: {
     span: 17,
   },
 };
 const midLayout = {
   wrapperCol: {
     offset: 6,
     span: 16,
   },
 };
 const tailLayout = {
   wrapperCol: {
     offset: 4,
     span: 16,
   },
 };

const LoginForm = () => {
  const [form] = Form.useForm();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = e => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then( user=>{
      console.log(user)
    }).catch(err=>{
      console.log(err)
    })
  }

  const signIn = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then( user=>{
      console.log(user)
    }).catch(err=>{
      console.log(err)
    })
  }

   const onFinish = (values) => {
      // const date = new Date().toISOString();
      // const newValues = {...values, month, year, date, key};
      // key++;
      // db.collection("purchase").add(newValues);
      // setData([...data, newValues]);
   };

   return (
      <>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} initialValues={{ remember: true }}>
         <Form.Item
            label="Email"
            name="email"
            rules={[{ message: "Please input your email!" }]}
         >
            <Input className="Form" placeholder="example@mail.com" ref={ emailRef } />
         </Form.Item>

         <Form.Item
            label="Password"
            name="password"
            rules={[{ message: "Please input your password!" }]}
            style={{ marginBottom: "1px" }}
         >
            <Input.Password className="Form" placeholder="Password" ref={ passwordRef }/>
         </Form.Item>
         
         <Form.Item {...midLayout} style={{ marginBottom: "1px" }}>
            <h3
               className="ForgotPassword"
               // onClick={() => {
               //   History.push("/retrieve_credentials");
               // }}
               onClick={ signUp }
            >
               Forgot password?
            </h3>
         </Form.Item>

         <Form.Item {...tailLayout} style={{ marginBottom: "0px" }}>
            <Button
               type="primary"
               size="medium"
               htmlType="submit"
               onClick={ signIn }
            >
            Sign In
         </Button>
         </Form.Item>
      </Form>
   </>
   );
}

export default LoginForm