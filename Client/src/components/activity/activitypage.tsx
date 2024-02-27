import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
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

const auth = getAuth(app);

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Check if the credential is not null before accessing its properties
      if (result.credential) {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        alert("Successfully Signed In with Google!");
      } else {
        console.error("No credential found in sign-in result");
        alert("Error signing in with Google");
      }
    } catch (error) {
      // Handle Errors here.
      console.error(error);
      alert("Error signing in with Google");
    }
  };

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("Success")
    );
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="left-page w-2/4 h-screen flex items-center justify-center bg-black font-bold">
        <a href="" className="text-white mt-8 ml-8">
          Carbaonara
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
                <Button className="bg-blue-300" onClick={signInWithGoogle}>
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
