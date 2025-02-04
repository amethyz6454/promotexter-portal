import UnauthenticatedLayout from "@/components/layouts/UnauthenticatedLayout";
import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Home() {
    return (
        <UnauthenticatedLayout title="Welcome">
            <div className="d-flex flex-column gap-3">
                <h6>In your own words, what makes a great UI/UX engineer?</h6>
                <p>
                    What makes a great UI/UX engineer, in my opinion, is a mix
                    of technical skills and a deep understanding of people.
                    Like, you gotta know how to code and design, but also really
                    get how users think and feel. It&apos;s not just about
                    making things look pretty, it&apos;s about making things
                    work smoothly and intuitively.
                </p>

                <p>
                    A great UI/UX engineer also listens a lot. Like, to the
                    team, to the users, to feedback. And they&apos;re always
                    learning because tech and trends change so fast. And
                    they&apos;re problem-solvers, they don&apos;t just follow
                    instructions, they figure out the best way to make things
                    better for everyone.
                </p>

                <p>
                    And honestly, patience is key. Sometimes you gotta tweak
                    stuff a hundred times before it&apos;s just right. But when
                    it all comes together, and the user has a seamless
                    experience? That&apos;s what makes it worth it.
                </p>

                <h6>See My Pre-Interview Exam Below</h6>

                <div className="d-flex justify-content-between">
                    <Link className="btn btn-primary" href="/login">
                        Login
                    </Link>
                    <Link className="btn btn-dark" href="/register">
                        Register
                    </Link>
                </div>
            </div>
        </UnauthenticatedLayout>
    );
}
