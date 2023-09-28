import { useState, useRef, useEffect } from "react";
import { Tab } from "@headlessui/react";
import EmailContactForm from "./tabs/EmailContactForm";
import TextContactForm from "./tabs/TextContactForm";
import CallContactForm from "./tabs/CallContactForm";

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
}

export default function Contact() {
    const [selectedTab, setSelectedTab] = useState(0);
    const selections = ["Email", "Text", "Call"];
    const [tabHighlightLeft, setTabHighlightLeft] = useState<
        number | undefined
    >(undefined);
    const [tabHighlightWidth, setTabHighlightWidth] = useState(0);
    const [tabHighlightHeight, setTabHighlightHeight] = useState(0);

    const tabsRef = useRef<HTMLElement[] | null[]>([]);

    useEffect(() => {
        function setTabPosition() {
            const tabPosition = tabsRef.current[selectedTab];
            if (tabPosition) {
                setTabHighlightLeft(tabPosition?.offsetLeft);
                setTabHighlightWidth(tabPosition?.clientWidth);
                setTabHighlightHeight(tabPosition?.clientHeight);
            }
        }
        setTabPosition();
        window.addEventListener("resize", setTabPosition);

        return () => {
            window.removeEventListener("resize", setTabPosition);
        };
    }, [selectedTab]);

    return (
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
                <Tab.Group>
                    <Tab.List className="inline-flex gap-x-2.5">
                        <div className="sm:ml-6 sm:block flex space-x-4">
                            {selections.map((tab, index) => (
                                <Tab
                                    key={tab}
                                    ref={(el) => (tabsRef.current[index] = el)}
                                    onClick={() => setSelectedTab(index)}
                                    className={({ selected }) => {
                                        return classNames(
                                            "tab-slide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
                                            selected
                                                ? "shadow bg-gray-800 tab-slide-selected tab-selected text-white"
                                                : "bg-gray-500 tab-hidden"
                                        );
                                    }}
                                >
                                    <span>{tab}</span>
                                </Tab>
                            ))}
                            <span
                                className="absolute h-1 bg-teal-400 opacity-30 transition-all duration-300 rounded-md"
                                style={{
                                    margin: "0",
                                    left: tabHighlightLeft,
                                    width: tabHighlightWidth,
                                    height: tabHighlightHeight,
                                }}
                            />
                        </div>
                    </Tab.List>
                    <br />
                    <br />
                    <Tab.Panels>
                        <Tab.Panel>
                            <EmailContactForm />
                        </Tab.Panel>
                        <Tab.Panel>
                            <TextContactForm />
                        </Tab.Panel>
                        <Tab.Panel>
                            <CallContactForm />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    I will respond promptly.
                </p>
            </div>
        </div>
    );
}
