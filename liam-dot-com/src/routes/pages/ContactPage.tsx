import { useState } from "react";
import EmailContactForm from "./tabs/contact/EmailContactForm";
import TextContactForm from "./tabs/contact/TextContactForm";
import CallContactForm from "./tabs/contact/CallContactForm";
import Tabs, { tabObject } from "../../components/Tabs";

const ContactPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const selections: tabObject[] = [
        { title: "Email", content: <EmailContactForm /> },
        { title: "Text", content: <TextContactForm /> },
        { title: "Call", content: <CallContactForm /> },
    ];

    return (
        <>
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {selectedTab === 0
                            ? "Send me an "
                            : selectedTab === 1
                            ? "Send me a "
                            : "Give me a "}
                    </h2>
                    <br />
                    <Tabs
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        tabObjects={selections}
                    />
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        I will respond promptly.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
