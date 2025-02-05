import TextField from "@/components/form/TextField";
import UnauthenticatedLayout from "@/components/layouts/UnauthenticatedLayout";
import usePasswordStrength from "@/hooks/usePasswordStrength";
import AccessStyles from "@/styles/access.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { At, Eye, EyeSlash, Person } from "react-bootstrap-icons";

export default function Register() {
    // states
    const [password, setPassword] = useState("");
    const [viewPassword, setViewPassword] = useState(false);
    const [viewConfirmPassword, setViewConfirmPassword] = useState(false);

    // router
    const router = useRouter();

    // hooks
    const { progressColor, progressValue, textFeedback } =
        usePasswordStrength(password);

    // handlers
    const handleViewPassword = (setToggle) => {
        setToggle((prev) => !prev);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = () => {
        router.push("/dashboard");
    };

    // constants
    const passwordRequirements = [
        {
            text: "Minimum of 8 Characters",
            isValid: (password) => password.length >= 8,
        },
        {
            text: "1 Capital Letter",
            isValid: (password) => /[A-Z]/.test(password),
        },
        {
            text: "1 Numerical Character",
            isValid: (password) => /[0-9]/.test(password),
        },
        {
            text: "1 Special Character",
            isValid: (password) =>
                /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password),
        },
    ];

    return (
        <UnauthenticatedLayout title="Register">
            <div className="d-flex flex-column gap-3">
                <TextField
                    FormControlProps={{ required: true }}
                    id="first_name"
                    isLabelPlaceholder={true}
                    label="First Name"
                    name="first_name"
                />
                <TextField
                    FormControlProps={{ required: true }}
                    id="last_name"
                    isLabelPlaceholder={true}
                    label="Last Name"
                    name="last_name"
                />
                <TextField
                    adornmentEnd={<Person size={16} />}
                    FormControlProps={{ required: true }}
                    id="username"
                    isLabelPlaceholder={true}
                    label="Username"
                    name="username"
                />
                <TextField
                    adornmentEnd={<At size={16} />}
                    FormControlProps={{ type: "email", required: true }}
                    id="email"
                    isLabelPlaceholder={true}
                    label="Email"
                    name="email"
                />
                <div className={AccessStyles.notice}>
                    <div className={AccessStyles.noticeHeading}>
                        Password Requirements
                    </div>
                    {passwordRequirements.map((requirement, i) => (
                        <div key={requirement.text + i}>
                            {requirement.isValid(password) ? "✅" : "❌"}{" "}
                            {requirement.text}
                        </div>
                    ))}
                </div>
                <TextField
                    adornmentEndButton={true}
                    id="password"
                    isLabelPlaceholder={true}
                    label="Password"
                    name="password"
                    adornmentEnd={
                        <Button
                            variant="dark"
                            onClick={() => handleViewPassword(setViewPassword)}
                        >
                            {viewPassword ? (
                                <EyeSlash size={16} />
                            ) : (
                                <Eye size={16} />
                            )}
                        </Button>
                    }
                    FormControlProps={{
                        onChange: handlePasswordChange,
                        required: true,
                        type: viewPassword ? "text" : "password",
                        value: password,
                    }}
                />
                <ProgressBar
                    label={textFeedback}
                    now={progressValue}
                    variant={progressColor}
                />
                <TextField
                    isLabelPlaceholder={true}
                    label="Confirm Password"
                    id="confirm_password"
                    name="confirm_password"
                    adornmentEndButton={true}
                    adornmentEnd={
                        <Button
                            variant="dark"
                            onClick={() =>
                                handleViewPassword(setViewConfirmPassword)
                            }
                        >
                            {viewConfirmPassword ? (
                                <EyeSlash size={16} />
                            ) : (
                                <Eye size={16} />
                            )}
                        </Button>
                    }
                    FormControlProps={{
                        type: viewConfirmPassword ? "text" : "password",
                        required: true,
                    }}
                />
                <Button onClick={handleSubmit}>Register</Button>
                <small className={AccessStyles.footer}>
                    Already have an account? Login{" "}
                    <Link href="/login">Here.</Link>
                </small>
            </div>
        </UnauthenticatedLayout>
    );
}
