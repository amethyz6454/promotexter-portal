import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";
import LabelAndValue from "@/components/ui/LabelAndValue";
import DashboardStyle from "@/styles/dashboard.module.scss";
import { useState } from "react";
import { Button, Col, Form, Nav, Row, Stack } from "react-bootstrap";
import { Camera } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";

const AccountSettingsTabs = {
    TAB_PROFILE: "Profile",
    TAB_SECURITY: "Security",
};

const Dashboard = () => {
    const handleAssertEqual = (value, expected) => value === expected;
    const [selectedTab, setSelectedTab] = useState(
        AccountSettingsTabs.TAB_PROFILE
    );

    return (
        <AuthenticatedLayout title="Dashboard">
            <Stack direction="horizontal" gap={4}>
                <div className={DashboardStyle.avatar}>
                    <PersonCircle size={48} />
                    <button
                        type="button"
                        className={DashboardStyle.avatarButton}
                        title="upload avatar"
                    >
                        <Camera size={16} />
                    </button>
                </div>
                <div>
                    <h4 className="mb-0 h4">John M. Doe</h4>
                    <small>username@domain.com</small>
                </div>
                <div className="ms-auto">
                    <Button size="xs" variant="outline-primary">
                        Edit
                    </Button>
                </div>
            </Stack>

            <div className={DashboardStyle.tabs}>
                <Nav
                    variant="tabs"
                    defaultActiveKey="link-1"
                    className={DashboardStyle.tabsWrapper}
                >
                    <Nav.Item>
                        <Nav.Link
                            eventKey="link-1"
                            onClick={() =>
                                setSelectedTab(AccountSettingsTabs.TAB_PROFILE)
                            }
                        >
                            {AccountSettingsTabs.TAB_PROFILE}
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            eventKey="link-2"
                            onClick={() =>
                                setSelectedTab(AccountSettingsTabs.TAB_SECURITY)
                            }
                        >
                            {AccountSettingsTabs.TAB_SECURITY}
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <div></div>
            <Row>
                {handleAssertEqual(
                    selectedTab,
                    AccountSettingsTabs.TAB_PROFILE
                ) && (
                    <Col xs={12}>
                        <Stack direction="horizontal">
                            <h6 className="h6 mb-4">Contact Information</h6>
                        </Stack>

                        <Row>
                            <Col xs={12}>
                                <Stack direction="horizontal" gap={4}>
                                    <LabelAndValue
                                        label="Mobile Phone Number"
                                        value="+63 *** *** 3210"
                                        valueStatus="(unverified)"
                                        valueSeverity="warning"
                                    />
                                    <Button
                                        size="xs"
                                        variant="warning"
                                        className="ms-auto"
                                    >
                                        Verify
                                    </Button>
                                </Stack>
                                <hr />
                                <Stack direction="horizontal" gap={4}>
                                    <LabelAndValue
                                        label="Phone Number"
                                        value="+02 *** *** 3210"
                                    />
                                    <Button
                                        size="xs"
                                        variant="outline-primary"
                                        className="ms-auto"
                                    >
                                        Update
                                    </Button>
                                </Stack>
                                <hr />
                                <Stack direction="horizontal" gap={4}>
                                    <LabelAndValue
                                        label="Email Address"
                                        value="username@domain.com"
                                        valueStatus="(primary)"
                                        valueSeverity="primary"
                                    />
                                    <Button
                                        size="xs"
                                        variant="outline-primary"
                                        className="ms-auto"
                                    >
                                        Add
                                    </Button>
                                </Stack>
                                <hr />
                                <Stack direction="horizontal" gap={4}>
                                    <LabelAndValue
                                        label="Address"
                                        value="Juan dela Cruz, Unit 305, Green Tower, 32 Alcoy St., Bagong Pag-asa, Quezon City 1105, Metro Manila"
                                    />
                                    <Button
                                        size="xs"
                                        variant="outline-primary"
                                        className="ms-auto"
                                    >
                                        Update
                                    </Button>
                                </Stack>
                            </Col>
                        </Row>
                    </Col>
                )}

                {handleAssertEqual(
                    selectedTab,
                    AccountSettingsTabs.TAB_SECURITY
                ) && (
                    <Col xs={12}>
                        <Stack direction="horizontal">
                            <h6 className="h6 mb-4">Security</h6>
                        </Stack>
                        <Stack direction="horizontal" gap={4}>
                            <LabelAndValue label="Password" value="******" />
                            <Button
                                size="xs"
                                variant="outline-primary"
                                className="ms-auto"
                            >
                                Change
                            </Button>
                        </Stack>
                        <hr />
                        <Stack
                            as="label"
                            direction="horizontal"
                            gap={4}
                            style={{ cursor: "pointer" }}
                        >
                            <LabelAndValue
                                label="Two-Factor-Authentication"
                                valueStatus="(disabled)"
                                valueSeverity="warning"
                            />
                            <Form.Check className="ms-auto" type="switch" />
                        </Stack>
                    </Col>
                )}
            </Row>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
