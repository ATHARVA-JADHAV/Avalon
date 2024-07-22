import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import React from "react";
import { useState } from "react";
import "../../App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const signInWithGoogle = async () => {
  //   await handleGoogle();
  //   navigate("/productivity");
  // };

  const { handleGoogle } = UserAuth();

  // const navigate = useNavigate();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("Success")
    );
  };

  const signInWithGoogle = async () => {
    await handleGoogle();
    navigate("/dashboard");
    return alert("Successfully Signed In with Google!");
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="left-page w-2/4 h-screen flex items-center justify-center bg-black font-bold">
        <a href="" className="text-white mt-8 ml-8 text-xl ">
          Carbonara
        </a>
      </div>
      <div className="right-page w-full flex items-center justify-center">
        <div className="form">
          <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <CardDescription>
                Enter your email and password to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    value={email}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <Button className="w-full" type="submit" onClick={createUser}>
                  Sign Up
                </Button>
                <Button className=" bg-blue-300" onClick={signInWithGoogle}>
                  {" "}
                  Sign In with Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
