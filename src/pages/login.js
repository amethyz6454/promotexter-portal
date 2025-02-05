import TextField from "@/components/form/TextField";
import UnauthenticatedLayout from "@/components/layouts/UnauthenticatedLayout";
import AccessStyles from "@/styles/access.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Lock, Person } from "react-bootstrap-icons";

export default function Login() {
    // router
    const router = useRouter();

    // handlers
    const handleSubmit = () => {
        router.push("/dashboard");
    };
    return (
        <UnauthenticatedLayout title="Login">
            <div className="d-flex flex-column gap-3">
                <TextField
                    isLabelPlaceholder={true}
                    label="Username"
                    id="username"
                    name="username"
                    adornmentEnd={<Person size={16} />}
                    FormControlProps={{ required: true }}
                />
                <TextField
                    isLabelPlaceholder={true}
                    label="Password"
                    id="password"
                    name="password"
                    adornmentEnd={<Lock size={16} />}
                    FormControlProps={{
                        type: "password",
                        required: true,
                    }}
                />
                <Row className={AccessStyles.consents}>
                    <Col>
                        <Form.Check
                            inline
                            label="Remember me"
                            name="remember"
                            type="checkbox"
                        />
                    </Col>
                    <Col xs="auto">
                        <Link href="/forgot-password">Forgot Password?</Link>
                    </Col>
                </Row>
                <Button onClick={handleSubmit}>Login</Button>
                <small className={AccessStyles.footer}>
                    Don&apos;t have an account? Register{" "}
                    <Link href="/register">Here.</Link>
                </small>
            </div>
        </UnauthenticatedLayout>
    );
}
