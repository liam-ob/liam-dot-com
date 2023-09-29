import { useRef, useState, useEffect } from "react";
import { Tab } from "@headlessui/react";

export interface tabObject {
    title: string;
    content: JSX.Element;
}

interface TabProps {
    selectedTab: number;
    setSelectedTab: (selectedTab: number) => void;
    tabObjects: tabObject[];
}

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
}

const Tabs = ({ selectedTab, setSelectedTab, tabObjects }: TabProps) => {
    const tabsRef = useRef<HTMLElement[] | null[]>([]);

    const [tabHighlightLeft, setTabHighlightLeft] = useState(0);
    const [tabHighlightWidth, setTabHighlightWidth] = useState(0);
    const [tabHighlightHeight, setTabHighlightHeight] = useState(0);

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
        <>
            <Tab.Group>
                <Tab.List className="inline-flex gap-x-2.5">
                    <div className="sm:ml-6 sm:block flex space-x-4">
                        {tabObjects.map((tab, index) => (
                            <Tab
                                key={index}
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
                                <span>{tab.title}</span>
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
                    {Object.values(tabObjects).map((tab, index) => (
                        <Tab.Panel key={index}>{tab.content}</Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </>
    );
};

export default Tabs;
