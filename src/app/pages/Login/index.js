import AppFormFeilds from "../../components/Form/AppFormFeilds";
import AppFrom from "../../components/Form/AppForm";
import { LoginSchema } from "../../validation";
import { Button } from "react-daisyui";

const Login = () => {
  const loginUser = async (values) => {
    console.log(values);
  };

  return (
    <>
      <section
        className="w-screen h-screen flex flex-col justify-center items-center
      bg-gradient-to-br from-purple-700 to-amber-700"
      >
        <div className="bg-white rounded-lg p-10 md:w-[550px] w-[350px]">
          <AppFrom
            className="flex flex-col justify-center items-center "
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => loginUser(values)}
            validationSchema={LoginSchema}
          >
            <h1 className="text-center text-3xl">Welcome Login</h1>
            <AppFormFeilds
              className="app_input"
              name="email"
              placeholder="Email"
            />
            <AppFormFeilds
              className="app_input"
              name="password"
              password={true}
              placeholder="Password"
            />

            <Button color="secondary" className="w-full mt-4">
              Login
            </Button>
          </AppFrom>
        </div>
      </section>
    </>
  );
};

export default Login;
