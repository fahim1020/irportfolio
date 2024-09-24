import { Envelope, Lock } from "phosphor-react";
import { Button, Card, Divider, Icon, Input, Label, toast } from "keep-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, COOKIE_NAME } from "../../../config";
import Cookies from "js-cookie";

export const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/check-login`, {
          withCredentials: true,
        });
        if (res.status === 200) {
          navigate("/cpanel");
        }
      } catch (error) {
        // console.error(error);
        navigate("/cpanel/login");
      }
    };

    checkAuth();
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const res = await axios.post(
        `${API_URL}/api/authenticate`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      // console.log(res);
      if (res.status === 200) {
        // console.log(res);
        Cookies.set(res.data.name, res.data.value);
        toast.success("Login successful");
        navigate("/cpanel");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <Card className="max-w-sm mx-auto my-5 p-5">
      <Card.Content className="space-y-3">
        <Card.Header>
          <Card.Title>Login to Your Account</Card.Title>
          <Card.Description>
            If you are not an admin, please do not attempt to log in.
          </Card.Description>
        </Card.Header>
        <Divider />
        <form className="space-y-2" onSubmit={handleLogin}>
          <fieldset className="space-y-1">
            <Label htmlFor="email">Email*</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                className="ps-11"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password*</Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="Enter password"
                type="password"
                className="ps-11"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Icon>
                <Lock size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <Button
            className="!mt-3 block w-full"
            size="xs"
            color="secondary"
            variant="outline"
            type="submit"
          >
            Log In
          </Button>
        </form>
        <h1 className="text-black">
          <Link to="/">
            <b>Back to Home</b>
          </Link>
        </h1>
      </Card.Content>
    </Card>
  );
};
