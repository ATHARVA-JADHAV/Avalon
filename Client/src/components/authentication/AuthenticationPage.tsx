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
import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from ""
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { UserAuth } from "../context/AuthContext";

const AuthenticationPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="left-page w-2/4 h-screen flex items-center justify-center font-bold">
        <a href="" className="text-white mt-8 ml-8   ">
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
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" required type="password" />
                </div>
                <Button className="w-full" type="submit">
                  Sign Up
                </Button>
                <Button className=" bg-blue-300"> Sign In with Google</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
