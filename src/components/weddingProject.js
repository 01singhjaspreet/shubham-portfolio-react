
import React from 'react';
import BottomPagination from './bottomPagination';
export default function WeddingProject() {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main className="container flex flex-col items-center justify-center px-4 mx-auto mt-10">
            <h2 className="w-full text-xl font-bold">Project Overview</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 mb-6 lg:col-span-5">
                    <div className="flex items-center">
                        <svg width="32" height="32" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 20.001C0 9.01087 9 0.0999756 20.2 0.0999756C31.4 0.0999756 40.4 9.01087 40.4 20.1C40.4 31.1891 31.4 40.1 20.2 40.1C9 40.1 0 31.0901 0 20.001Z"
                                fill="#4285F4" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.6 13.6643H30.9V11.5851H11.6C10.4 11.5851 9.39999 12.4762 9.39999 13.6643V25.2484H7.29999V28.4168H22.3V25.2484H11.6V13.6643ZM32 15.7435H25.5C24.9 15.7435 24.4 16.2385 24.4 16.8326V27.3277C24.4 27.9217 24.9 28.4168 25.5 28.4168H32C32.6 28.4168 33.1 27.9217 33.1 27.3277V16.8326C33 16.2385 32.6 15.7435 32 15.7435ZM30.9 25.2484H26.6V17.8227H30.9V25.2484Z"
                                fill="white" />
                        </svg>
                        <h2 className="ml-4 text-lg font-medium ">The Product</h2>
                    </div>
                    <p className="ml-12 ">
                        Virtual My Wedding which can help users in findng wedding venue at
                        their hometown and city, my app target users who has bussy schedule.
                        My wedding goal is to make Wedding venue booking fun, fast, and easy
                        for all types of users.
                    </p>
                    <div className="flex items-center mt-6">
                        <svg width="32" height="32" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.400024 20C0.400024 8.91089 9.40002 0 20.6 0C31.8 0 40.8 9.0099 40.8 20C40.8 30.9901 31.8 40 20.6 40C9.40002 40 0.400024 31.0891 0.400024 20Z"
                                fill="#4285F4" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20.5 9.901C14.8 9.901 10.2 14.4555 10.2 20.099C10.2 25.7426 14.8 30.297 20.5 30.297C26.2 30.297 30.8 25.7426 30.8 20.099C30.8 14.4555 26.2 9.901 20.5 9.901ZM20.5 28.1188C15.9 28.1188 12.3 24.4555 12.3 20C12.3 15.5446 16 11.8812 20.5 11.8812C25 11.8812 28.7 15.5446 28.7 20C28.7 24.4555 25 28.1188 20.5 28.1188ZM19.5 14.8515V20.9901L24.9 24.1584L25.7 22.8713L21.1 20.198V14.8515H19.5Z"
                                fill="white" />
                        </svg>

                        <h2 className="ml-4 text-lg font-medium">The duration</h2>
                    </div>
                    <p className="ml-12 ">
                        Jan 2022 to Feb 2022
                    </p>
                    <div className="flex items-center mt-6">
                        <svg width="32" height="32" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.700012 20C0.700012 9.0099 9.70001 0 20.9 0C32.1 0 41.1 8.91089 41.1 20C41.1 31.0891 32.1 40 20.9 40C9.70001 40 0.700012 31.0891 0.700012 20Z"
                                fill="#4285F4" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21.9 14.7524V20.99H19.8V14.7524H21.9V14.7524ZM21.9 23.1682V25.2474H19.8V23.1682H21.9ZM20.9 9.60388H20.4H19.9L19.4 9.70289L18.9 9.8019L18.4 9.90091L17.9 9.99992L17.4 10.1979L16.9 10.396L16.4 10.594L15.9 10.792L15.4 11.089L15 11.3861L14.6001 11.6831L14.2 11.9801L13.8 12.2771L13.4 12.6732L13 13.0692L12.7 13.4653L12.4 13.8613L12.1001 14.2573L11.8 14.6534L11.5 15.1484L11.3 15.6435L11.1001 16.1385L10.9 16.6336L10.7 17.1286L10.6001 17.6237L10.5 18.1187L10.4 18.6138L10.3 19.1088V19.6039V20.0989V20.594V21.089L10.4 21.5841L10.5 22.0791L10.6001 22.5742L10.7 23.0692L10.9 23.5643L11.1001 24.0593L11.3 24.5544L11.5 25.0494L11.8 25.5445L12.1001 25.9405L12.4 26.3366L12.7 26.7326L13 27.1286L13.4 27.5247L13.8 27.9207L14.2 28.2177L14.6001 28.5148L15 28.7128L15.4 29.0098L15.9 29.3069L16.4 29.5049L16.9 29.7029L17.4 29.9009L17.9 30.0989L18.4 30.1979L18.9 30.297L19.4 30.396L19.9 30.495H20.4H20.9H21.4H21.9L22.4 30.396L22.9 30.297L23.4 30.1979L23.9 30.0989L24.4 29.9009L24.9 29.7029L25.4 29.5049L25.9 29.3069L26.4 29.0098L26.8 28.7128L27.2 28.4158L27.6001 28.1187L28 27.7227L28.4 27.3267L28.8 26.9306L29.1001 26.5346L29.4 26.1385L29.7 25.7425L30 25.3465L30.3 24.8514L30.5 24.3564L30.7 23.8613L30.9 23.3663L31.1001 22.8712L31.2 22.3762L31.3 21.8811L31.4 21.3861L31.5 20.891V20.396V19.9009V19.4059V18.9108L31.4 18.4158L31.3 17.9207L31.2 17.4257L31.1001 16.9306L30.9 16.4356L30.7 15.9405L30.5 15.4455L30.3 14.9504L30 14.4554L29.7 14.0593L29.4 13.6633L29.1001 13.2672L28.8 12.8712L28.4 12.4752L28 12.0791L27.6001 11.7821L27.2 11.4851L26.8 11.188L26.4 10.891L25.9 10.594L25.4 10.396L24.9 10.1979L24.4 9.99992L23.9 9.8019L23.4 9.70289L23 9.8019L22.5 9.70289L22 9.60388H21.5H20.9Z"
                                fill="white" />
                        </svg>

                        <h2 className="ml-4 text-lg font-medium">The Problem</h2>
                    </div>
                    <p className="ml-12 ">
                        Available online wedding venue websites have cluttered designs,
                        inefficient systems for browsing through products, and confusing
                        checkout processes.
                    </p>
                    <div className="flex items-center mt-6">
                        <div className="flex items-center mt-4">
                            <svg width="32" height="32" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.300049 20C0.300049 9.0099 9.40006 0 20.5001 0C31.7001 0 40.7001 8.91089 40.7001 20C40.7001 31.0891 31.6001 40 20.5001 40C9.40006 40 0.300049 31.0891 0.300049 20Z"
                                    fill="#4285F4" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20.6001 26.5347L27.5001 30.6931L25.7001 22.7724L31.9001 17.4258L23.7001 16.8318L20.6001 9.30701L17.4001 16.8318L9.20007 17.4258L15.4001 22.7724L13.6001 30.6931L20.6001 26.5347Z"
                                    fill="white" />
                            </svg>
                            <h2 className="ml-4 text-lg font-medium">The Goal</h2>
                        </div>
                    </div>
                    <p className="ml-12 ">
                        Mywedding website to be user friendly by providing clear navigation
                        and offering a fast checkout process.
                    </p>
                    <div className="flex items-center mt-6">
                        <svg width="32" height="32" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.0999756 20C0.0999756 9.0099 9.09996 0 20.3 0C31.5 0 40.5 8.91089 40.5 20C40.5 31.0891 31.5 40 20.3 40C9.09996 40 0.0999756 31.0891 0.0999756 20Z"
                                fill="#4285F4" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20.2 20C23 20 25.3 17.7228 25.3 15.0495C25.3 12.2772 23 10.099 20.2 10.099C17.5 10.099 15.2 12.3762 15.2 15.0495C15.1 17.7228 17.4 20 20.2 20ZM20.2 22.4752C16.8 22.4752 10.1 24.1584 10.1 27.4257V30H30.4V27.4257C30.3 24.1584 23.6 22.4752 20.2 22.4752Z"
                                fill="white" />
                        </svg>
                        <h2 className="ml-4 text-lg font-medium">My Role</h2>
                    </div>
                    <p className="ml-12 ">
                        UX designer leading the mywedding website design.
                    </p>

                    <div className="flex items-center mt-6">
                        <svg width="32" height="32" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.699951 20C0.699951 9.0099 9.79993 0 20.8999 0C31.9999 0 41.0999 8.91089 41.0999 20C41.0999 31.0891 31.9999 40 20.8999 40C9.79993 40 0.699951 31.0891 0.699951 20Z"
                                fill="#4285F4" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.69995 21.2871H12.2V18.8118H9.69995V21.2871ZM9.69995 26.1386H12.2V23.7623H9.69995V26.1386ZM9.69995 16.3366H12.2V13.8613H9.69995V16.3366ZM14.7 21.2871H32.0999V18.8118H14.7V21.2871V21.2871ZM14.7 26.1386H32.0999V23.7623H14.7V26.1386V26.1386ZM14.7 13.8613V16.3366H32.0999V13.8613H14.7Z"
                                fill="white" />
                        </svg>

                        <h2 className="ml-4 text-lg font-medium">My Responsibilities</h2>
                    </div>
                    <p className="ml-12 ">
                        Conducting interviews, paper and digital wireframing, low and
                        high-fidelity prototyping, conducting usability studies, accounting
                        for accessibility, iterating on designs and responsive design.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require('../assets/wedding/1.jpg')} className="w-full rounded" alt="" />
                    <img src={require("../assets/wedding/25.jpg")} className="w-full mt-4 rounded" alt="" />
                </div>
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">UX Design Storyboard</h2>
            <h4 className="w-full mt-4 "><span className="font-medium">Scenario :</span> An app to help users to take
                mentorship from industry experts</h4>
            <div className="grid w-full grid-cols-12 gap-4 mt-6">
                <div className="flex flex-col col-span-12 rounded lg:col-span-6 xl:col-span-4">
                    <img src={require("../assets/wedding/storyBoard/1.png")} className="rounded" alt="" />
                    <h4 className="w-full mt-1 text-lg font-medium text-center">Roma wants to get a mentor for his UX projects.</h4>
                </div>
                <div className="flex flex-col col-span-12 rounded lg:col-span-6 xl:col-span-4">
                    <img src={require("../assets/wedding/storyBoard/2.png")} className="rounded" alt="" />
                    <h4 className="w-full mt-1 text-lg font-medium text-center">Roma remember an app that can help.</h4>
                </div>
                <div className="flex flex-col col-span-12 rounded lg:col-span-6 xl:col-span-4">
                    <img src={require("../assets/wedding/storyBoard/3.png")} className="rounded" alt="" />
                    <h4 className="w-full mt-1 text-lg font-medium text-center">Roma uses our app to connect with mentors.</h4>
                </div>
                <div className="flex flex-col col-span-12 rounded lg:col-span-6 xl:col-span-4">
                    <img src={require("../assets/wedding/storyBoard/4.png")} className="rounded" alt="" />
                    <h4 className="w-full mt-1 text-lg font-medium text-center">In the app Roma can pick a project and take help of
                        others.</h4>
                </div>
                <div className="flex flex-col col-span-12 rounded lg:col-span-6 xl:col-span-4">
                    <img src={require("../assets/wedding/storyBoard/5.png")} className="rounded" alt="" />
                    <h4 className="w-full mt-1 text-lg font-medium text-center">Roma can take project and submit the design and
                        review by
                        other designer</h4>
                </div>
                <div className="flex flex-col col-span-12 rounded lg:col-span-6 xl:col-span-4">
                    <img src={require("../assets/wedding/storyBoard/6.png")} className="rounded" alt="" />
                    <h4 className="w-full mt-1 text-lg font-medium text-center">Roma is happy with mentorship of industy experts</h4>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-2.5 mt-12">
                <div className="col-span-12 lg:col-span-2">
                    <h2 className="w-full text-xl font-bold whitespace-nowrap">User research: Summary</h2>
                </div>
                <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                    <p className="">
                        I conducted user interviews, which I then turned into empathy maps
                        to better understand the target user and their needs. I discovered
                        that many target users treat online wedding booking as a fun and
                        relaxing activity. However, many wedding websites are overwhelming
                        and confusing to navigate, which frustrated many target users. This
                        caused a normally enjoyable experience to become challenging for
                        them, defeating the purpose of relaxation.
                    </p>
                </div>
                <div className="col-span-12 mt-6 lg:col-span-2">
                    <h2 className="w-full text-xl font-bold whitespace-nowrap">User research: Pain points</h2>
                </div>
                <div className="col-span-12 mt-6 lg:col-span-9 lg:col-start-4">
                    <div className="flex flex-col ">
                        <div className="flex flex-col w-full my-2">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-6 h-6 text-white bg-red-500 rounded-full h-">
                                    1
                                </div>
                                <div className="ml-4 text-red-500">Navigation</div>
                            </div>
                            <p className="w-full pl-10 mt-2 text-sm ">
                                Booking website designs are often busy, which results in
                                confusing navigation
                            </p>
                        </div>

                        <div className="flex flex-col w-full my-2">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-6 h-6 text-white bg-red-500 rounded-full h-">
                                    2
                                </div>
                                <div className="ml-4 text-red-500">Interaction</div>
                            </div>
                            <p className="w-full pl-10 mt-2 text-sm ">
                                Small buttons on shopping websites make item selection
                                difficult, which sometimes leads users to make mistakes
                            </p>
                        </div>
                        <div className="flex flex-col w-full my-2">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-6 h-6 text-white bg-red-500 rounded-full h-">
                                    3
                                </div>
                                <div className="ml-4 text-red-500">Experience</div>
                            </div>
                            <p className="w-full pl-10 mt-2 text-sm ">
                                Online wedding booking websites don't provide an engaging
                                browsing experience
                            </p>
                        </div>
                        <div className="flex flex-col w-full my-2">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-6 h-6 text-white bg-red-500 rounded-full h-">
                                    4
                                </div>
                                <div className="ml-4 text-red-500">Responsive</div>
                            </div>
                            <p className="w-full pl-10 mt-2 text-sm ">
                                Created responsive design of My Wedding website
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">User Persona: Deepak Patel</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <h2 className="text-lg font-medium">The Problem Statement</h2>
                    <p className="">
                        Deepak Patel is a busy Software engineer who needs intuitive website navigation and search filters and
                        testimonial section of a website because they want online wedding venue booking to be stress-free.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/3.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>
            <h2 className="w-full mt-12 text-xl font-bold">User Persona: Roma</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <h2 className="text-lg font-medium">The Problem Statement</h2>
                    <p className="">
                        Roma is an engineer
                        who needs an app which can solve her wedding plans.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/4.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>
            <h2 className="w-full mt-12 text-xl font-bold">User journey map: Deepak Patel</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        I created a user journey map of Deepak Patel experience using the site to help identify possible pain
                        points and improvement opportunities.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/5.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>
            <h2 className="w-full mt-12 text-xl font-bold">User journey map: Roma</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        Our wedding app let the users book their customize wedding venue by letting user skip the
                        broker and saving them time.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/6.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>
            <h2 className="w-full mt-12 text-xl font-bold">Sitemap</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        Difficulty with website navigation was a primary pain point for users, so I used that
                        knowledge to create a sitemap.
                        <br />
                        My goal here was to make strategic information architecture decisions that would improve overall
                        website navigation. The structure I chose was designed to make things simple and easy.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/7.png")} className="w-full rounded" alt="" />
                </div>
            </div>
            <h2 className="w-full mt-12 text-xl font-bold">Logo Discription</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        I have designed this custom logo with services in mind. My wedding is virtual mobile app and
                        website which solves users pain points,
                        And that needed an eye-catching, memorable logo
                        that empathized both elegance and fun.
                        I decided to create a design that has a brandable icon
                        (Wedding vibes).
                        <br />
                        This brandable icon, also known as a brandmark, can be separated from the full
                        script-style layout and used in a variety of ways.
                        <br />
                        The versatility is this logo design makes it ideal for web and social media uses.
                    </p>
                    <h2 className="w-full mt-6 text-lg font-semibold">Details</h2>
                    <p className=""><span className="mt-6 font-medium">Category:</span> Tech</p>
                    <p className=""><span className="font-medium">Type:</span> Clip art logo design</p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/8.jpg")} className="w-full rounded" alt="" />
                </div>
                <div className="grid w-full grid-cols-12 col-span-12 gap-4 mt-4">
                    <img src={require("../assets/wedding/9.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
                    <img src={require("../assets/wedding/10.png")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
                </div>
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Paper Wireframe</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        Next, I sketched out paper wireframes for each screen in my app, keeping the user pain points
                        about navigation, browsing, and checkout flow in mind.
                        <br />
                        The home screen paper wireframe variations to the right focus on optimizing the browsing
                        experience for users.
                        <br />
                        Stars were used to mark the elements of each sketch
                        that would be used in
                        the initial digital wireframes.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/11.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>
            <h2 className="w-full mt-12 text-xl font-bold">Paper wireframe
                screen size variation(s)
            </h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        Because My Wedding customers access the site on a variety of different devices, I started to work
                        on designs for additional screen sizes to make sure the site would be fully responsive.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/12.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Digital wireframes
            </h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        Moving from paper to digital wireframes made it easy to understand how the redesign could help
                        address user pain points and improve the user experience.
                        <br />
                        Prioritizing useful button locations and visual element placement on the home page was a key
                        part of my strategy

                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/13.png")} className="w-full rounded" alt="" />
                </div>
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Digital wireframe
                screen size variation(s)
            </h2>
            <div className="grid w-full grid-cols-12 gap-4 mt-4">
                <img src={require("../assets/wedding/14.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
                <img src={require("../assets/wedding/15.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Low-fidelity prototype
            </h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        To create a low-fidelity prototype, I connected all of the screens involved in the primary user flow of
                        booking an item and checking out.
                        <br />
                        At this point, I had received feedback on my designs from members of my team about things like
                        placement of buttons and page organization. I made sure to listen to their feedback, and
                        I implemented several suggestions in places that addressed user pain points.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/16.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Usability study: parameters
            </h2>
            <div className="grid w-full grid-cols-12 gap-4 mt-6">
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.400024 20C0.400024 8.91089 9.49998 0 20.6 0C31.7 0 40.8 9.0099 40.8 20C40.8 30.9901 31.7 40 20.6 40C9.49998 40 0.400024 31.0891 0.400024 20Z"
                            fill="#FBBC04" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M28.5 10.9901H23.8C23.3 9.70299 22.1 8.71289 20.6 8.71289C19.1 8.71289 17.9 9.70299 17.4 10.9901H12.7C11.5 10.9901 10.4 12.0792 10.4 13.2673V29.1089C10.4 30.297 11.4 31.3862 12.7 31.3862H28.6C29.8 31.3862 30.9 30.297 30.9 29.1089V13.2673C30.8 11.8812 29.7 10.9901 28.5 10.9901ZM20.5 10.9901C21.1 10.9901 21.7 11.4852 21.7 12.1782C21.7 12.7723 21.2 13.3664 20.5 13.3664C19.8 13.3664 19.3 12.8713 19.3 12.1782C19.4 11.3862 19.9 10.9901 20.5 10.9901ZM22.8 26.8317H14.8V24.5545H22.8V26.8317ZM26.2 22.2772H14.8V20H26.2V22.2772ZM26.2 17.7228H14.8V15.4456H26.2V17.7228Z"
                            fill="white" />
                    </svg>
                    <h2 className="w-full mt-4 text-lg font-medium text-center">Study type:
                    </h2>
                    <p className="w-full mt-4 text-center ">Unmoderated usability study
                    </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.699951 20C0.699951 9.0099 9.79994 0 20.9999 0C32.1999 0 41.2 9.0099 41.2 20C41.2 30.9901 32.0999 40 20.9999 40C9.89994 40 0.699951 31.0891 0.699951 20Z"
                            fill="#FBBC04" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20.9999 7.62366C16.1999 7.62366 12.2999 11.485 12.2999 16.3365C12.2999 22.8712 20.9999 32.4751 20.9999 32.4751C20.9999 32.4751 29.7999 22.8712 29.7999 16.3365C29.6999 11.485 25.7999 7.62366 20.9999 7.62366ZM20.9999 19.4058C19.2999 19.4058 17.9 18.0197 17.9 16.3365C17.9 14.6534 19.2999 13.2672 20.9999 13.2672C22.7999 13.2672 24.0999 14.6534 24.0999 16.3365C24.0999 18.0197 22.6999 19.4058 20.9999 19.4058Z"
                            fill="white" />
                    </svg>



                    <h2 className="w-full mt-4 text-lg font-medium text-center">Location:
                    </h2>
                    <p className="w-full mt-4 text-center ">Hyderabad, India, remote
                    </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.0999756 20C0.0999756 8.91089 9.19999 0 20.3 0C31.5 0 40.5 9.0099 40.5 20C40.5 30.9901 31.4 40 20.3 40C9.09999 40 0.0999756 31.0891 0.0999756 20Z"
                            fill="#FBBC04" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.9001 18.7129C27.7001 18.7129 29.0001 17.3267 29.0001 15.6436C29.0001 13.9604 27.6001 12.5743 25.9001 12.5743C24.2001 12.5743 22.8 13.9604 22.8 15.6436C22.8 17.3267 24.3001 18.7129 25.9001 18.7129ZM16.6 17.5248C18.7 17.5248 20.3 15.8416 20.3 13.7624C20.3 11.6832 18.6 10 16.6 10C14.6 10 12.8 11.6832 12.8 13.7624C12.8 15.8416 14.5 17.5248 16.6 17.5248ZM25.9001 21.1881C23.6001 21.1881 19.0001 22.3762 19.0001 24.6535V27.5247H32.8V24.6535C32.8 22.3762 28.2001 21.1881 25.9001 21.1881ZM16.6 20C13.7 20 7.80005 21.4851 7.80005 24.3564V27.4257H16.6V24.5545C16.6 23.4653 17 21.6832 19.6 20.297C18.4 20.099 17.4 20 16.6 20Z"
                            fill="white" />
                    </svg>
                    <h2 className="w-full mt-4 text-lg font-medium text-center">Participants:
                    </h2>
                    <p className="w-full mt-4 text-center ">5 participants

                    </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.400024 20C0.400024 8.91089 9.49998 0 20.6 0C31.8 0 40.8 9.0099 40.8 20C40.8 30.9901 31.7 40 20.6 40C9.49998 40 0.400024 31.0891 0.400024 20Z"
                            fill="#FBBC04" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20.6 7.62366C13.7 7.62366 8.09998 13.1682 8.09998 19.9999C8.09998 26.8316 13.7 32.3761 20.6 32.3761C27.5 32.3761 33.1 26.8316 33.1 19.9999C33.2 13.1682 27.6 7.62366 20.6 7.62366ZM20.7 29.9009C15.1 29.9009 10.7 25.4454 10.7 19.9999C10.7 14.5544 15.2 10.0989 20.7 10.0989C26.2 10.0989 30.7 14.5544 30.7 19.9999C30.7 25.5444 26.1 29.9009 20.7 29.9009ZM19.4 13.7623V21.188L26 25.0494L26.9 23.4652L21.3 20.1979V13.6633H19.4V13.7623Z"
                            fill="white" />
                    </svg>


                    <h2 className="w-full mt-4 text-lg font-medium text-center">Length:
                    </h2>
                    <p className="w-full mt-4 text-center ">20-30 minutes
                    </p>
                </div>
            </div>


            <h2 className="w-full mt-12 text-xl font-bold">Mockups Website</h2>
            <p className="mt-4 ">
                Based on the insights from the usability study, I made changes to improve the site's checkout flow. One of the
                changes I made was adding the option to top selecting date area room for guests using
                a simple button option. This allowed users more freedom to edit their date, day, number of room for guest,
                location and more without going through a complicated process to add or remove one bye
                one from diffrent option menue.
                <br />
                To make the payment flow even easier for users, I added a different payment methods that allowed users to use
                for billing and Bookings.
            </p>
            <div className="grid w-full grid-cols-12 gap-4 mt-4">
                <img src={require("../assets/wedding/17.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
                <img src={require("../assets/wedding/18.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Mockups Mobile App</h2>
            <p className="mt-4 ">
                Early designs allowed for some customization, but after the usability studies, I added additional options to
                view venue details.Now users see all the customization options when they first
                land on the screen.
                <br />
                The second usability study revealed frustration with the payment flow. to streamline this flow, I consolidated
                the “Booking confirmation” to one “Payment option” screen.
            </p>
            <div className="grid w-full grid-cols-12 gap-4 mt-4">
                <img src={require("../assets/wedding/19.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
                <img src={require("../assets/wedding/20.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Mockups: Original screen size
            </h2>
            <div className="grid w-full grid-cols-12 gap-4 mt-4">
                <img src={require("../assets/wedding/21.jpg")}
                    className="object-cover object-center w-full h-full col-span-12 rounded lg:col-span-6" alt="" />
                <img src={require("../assets/wedding/22.png")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
            </div>
            <div className="grid w-full grid-cols-12 gap-4 mt-4">
                <img src={require("../assets/wedding/23.png")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
                <img src={require("../assets/wedding/24.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Mockups: Screen size variations</h2>
            <div className="grid w-full grid-cols-12 gap-4 mt-4">
                <img src={require("../assets/wedding/25.jpg")} className="w-full h-full col-span-12 rounded lg:col-span-6" alt="" />
                <img src={require("../assets/wedding/26.jpg")} className="w-full col-span-12 rounded lg:col-span-6" alt="" />
            </div>


            <h2 className="w-full mt-12 text-xl font-bold">High-fidelity prototype</h2>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        My hi-fi prototype followed the same user flow as the lo-fi prototype, and included the design
                        changes made after the usability study, as well as several changes suggested by
                        friends and Experts.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/27.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <p className="">
                        The final high-fidelity prototype presented cleaner user flows for building a Wedding and booking.
                        It also met user needs for a book and as well as more customization.
                        <br />
                        View the Wedding App high-fidelity prototype
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <img src={require("../assets/wedding/28.jpg")} className="w-full rounded" alt="" />
                </div>
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Accessibility considerations</h2>
            <div className="grid w-full grid-cols-12 gap-4 mt-6">
                <div className="flex flex-col items-center col-span-12 px-6 py-10 rounded shadow-lg lg:px-10 md:col-span-4">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="26" className="fill-gray-800" />
                        <path d="M27.543 16.8438V34H25.375V19.5508L21.0039 21.1445V19.1875L27.2031 16.8438H27.543Z" fill="white" />
                    </svg>
                    <p className="w-full mt-4 text-center md:text-justify">I used headings with different sized
                        text for clear visual hierarchy. </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-6 py-10 rounded shadow-lg lg:px-10 md:col-span-4">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="26" className="fill-gray-800" />
                        <path
                            d="M31.5977 32.2188V34H20.4297V32.4414L26.0195 26.2188C26.707 25.4531 27.2383 24.8047 27.6133 24.2734C27.9961 23.7344 28.2617 23.2539 28.4102 22.832C28.5664 22.4023 28.6445 21.9648 28.6445 21.5195C28.6445 20.957 28.5273 20.4492 28.293 19.9961C28.0664 19.5352 27.7305 19.168 27.2852 18.8945C26.8398 18.6211 26.3008 18.4844 25.668 18.4844C24.9102 18.4844 24.2773 18.6328 23.7695 18.9297C23.2695 19.2188 22.8945 19.625 22.6445 20.1484C22.3945 20.6719 22.2695 21.2734 22.2695 21.9531H20.1016C20.1016 20.9922 20.3125 20.1133 20.7344 19.3164C21.1562 18.5195 21.7812 17.8867 22.6094 17.418C23.4375 16.9414 24.457 16.7031 25.668 16.7031C26.7461 16.7031 27.668 16.8945 28.4336 17.2773C29.1992 17.6523 29.7852 18.1836 30.1914 18.8711C30.6055 19.5508 30.8125 20.3477 30.8125 21.2617C30.8125 21.7617 30.7266 22.2695 30.5547 22.7852C30.3906 23.293 30.1602 23.8008 29.8633 24.3086C29.5742 24.8164 29.2344 25.3164 28.8438 25.8086C28.4609 26.3008 28.0508 26.7852 27.6133 27.2617L23.043 32.2188H31.5977Z"
                            fill="white" />
                    </svg>

                    <p className="w-full mt-4 text-center md:text-justify">I used landmarks to help users navigate
                        the site, including users who rely on
                        assistive technologies. </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-6 py-10 rounded shadow-lg lg:px-10 md:col-span-4">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="26" className="fill-gray-800" />
                        <path
                            d="M23.582 24.4023H25.1289C25.8867 24.4023 26.5117 24.2773 27.0039 24.0273C27.5039 23.7695 27.875 23.4219 28.1172 22.9844C28.3672 22.5391 28.4922 22.0391 28.4922 21.4844C28.4922 20.8281 28.3828 20.2773 28.1641 19.832C27.9453 19.3867 27.6172 19.0508 27.1797 18.8242C26.7422 18.5977 26.1875 18.4844 25.5156 18.4844C24.9062 18.4844 24.3672 18.6055 23.8984 18.8477C23.4375 19.082 23.0742 19.418 22.8086 19.8555C22.5508 20.293 22.4219 20.8086 22.4219 21.4023H20.2539C20.2539 20.5352 20.4727 19.7461 20.9102 19.0352C21.3477 18.3242 21.9609 17.7578 22.75 17.3359C23.5469 16.9141 24.4688 16.7031 25.5156 16.7031C26.5469 16.7031 27.4492 16.8867 28.2227 17.2539C28.9961 17.6133 29.5977 18.1523 30.0273 18.8711C30.457 19.582 30.6719 20.4688 30.6719 21.5312C30.6719 21.9609 30.5703 22.4219 30.3672 22.9141C30.1719 23.3984 29.8633 23.8516 29.4414 24.2734C29.0273 24.6953 28.4883 25.043 27.8242 25.3164C27.1602 25.582 26.3633 25.7148 25.4336 25.7148H23.582V24.4023ZM23.582 26.1836V24.8828H25.4336C26.5195 24.8828 27.418 25.0117 28.1289 25.2695C28.8398 25.5273 29.3984 25.8711 29.8047 26.3008C30.2188 26.7305 30.5078 27.2031 30.6719 27.7188C30.8438 28.2266 30.9297 28.7344 30.9297 29.2422C30.9297 30.0391 30.793 30.7461 30.5195 31.3633C30.2539 31.9805 29.875 32.5039 29.3828 32.9336C28.8984 33.3633 28.3281 33.6875 27.6719 33.9062C27.0156 34.125 26.3008 34.2344 25.5273 34.2344C24.7852 34.2344 24.0859 34.1289 23.4297 33.918C22.7812 33.707 22.207 33.4023 21.707 33.0039C21.207 32.5977 20.8164 32.1016 20.5352 31.5156C20.2539 30.9219 20.1133 30.2461 20.1133 29.4883H22.2812C22.2812 30.082 22.4102 30.6016 22.668 31.0469C22.9336 31.4922 23.3086 31.8398 23.793 32.0898C24.2852 32.332 24.8633 32.4531 25.5273 32.4531C26.1914 32.4531 26.7617 32.3398 27.2383 32.1133C27.7227 31.8789 28.0938 31.5273 28.3516 31.0586C28.6172 30.5898 28.75 30 28.75 29.2891C28.75 28.5781 28.6016 27.9961 28.3047 27.543C28.0078 27.082 27.5859 26.7422 27.0391 26.5234C26.5 26.2969 25.8633 26.1836 25.1289 26.1836H23.582Z"
                            fill="white" />
                    </svg>

                    <p className="w-full mt-4 text-center md:text-justify">Used detailed imagery for venue booking
                        to help all users better understand
                        the designs.
                    </p>
                </div>
            </div>

            <h2 className="w-full mt-12 text-xl font-bold">Takeaways</h2>
            <div className="grid w-full grid-cols-12 gap-4 mt-6">
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.800049 20C0.800049 9.0099 9.9 0 21 0C32.2 0 41.2 8.91089 41.2 20C41.2 31.0891 32.1 40 21 40C9.8 40 0.800049 31.0891 0.800049 20Z"
                            fill="#5F6368" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M28.1 11.8812H23.9C23.5 10.6931 22.3 9.802 21 9.802C19.7 9.802 18.6 10.6931 18.1 11.8812H13.9C12.8 11.8812 11.9 12.7723 11.9 13.9604V28.2178C11.9 29.307 12.8 30.2971 13.9 30.2971H28.2C29.3 30.2971 30.2 29.406 30.2 28.2178V13.8614C30.1 12.7723 29.2 11.8812 28.1 11.8812ZM20.9 11.8812C21.4 11.8812 22 12.2772 22 12.8713C22 13.4654 21.6 13.9604 20.9 13.9604C20.3 13.9604 19.8 13.4654 19.8 12.8713C19.9 12.2772 20.4 11.8812 20.9 11.8812ZM18.9 26.1386L14.8 22.0792L16.2 20.5941L18.9 23.2673L25.6 16.5347L27 17.9208L18.9 26.1386Z"
                            fill="white" />
                    </svg>


                    <h2 className="w-full mt-4 text-lg font-medium text-center">Impact: Resposive Website </h2>
                    <p className="w-full mt-4 text-center md:text-justify">Our target users shared that the design
                        was intuitive to navigate through, more
                        engaging with the images, and
                        demonstrated a clear visual hierarchy. </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.0999756 20C0.0999756 9.0099 9.20005 0 20.3 0C31.5 0 40.5 8.91089 40.5 20C40.5 31.0891 31.4 40 20.3 40C9.20005 40 0.0999756 31.0891 0.0999756 20Z"
                            fill="#5F6368" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M26.2 13.1683H26.7H27.2H27.7L28.2 13.2673H28.4H28.6H28.8L29 13.3663L29.2 13.4653L29.4 13.5644L29.6 13.6634L29.8 13.7624V25.7426L29.6 25.6436L29.4 25.5446L29.2 25.4455L29 25.3465H28.8H28.6H28.4H28.2L27.7 25.2475H27.2H26.7H26.2H25.9H25.5H25.1L24.7 25.3465L24.3 25.4455L23.9 25.5446L23.5 25.6436L23.1 25.7426L22.7 25.8416L22.3 25.9406L21.9 26.0396L21.5 26.1386L21.2 26.2376L20.9 26.4356L20.6 26.6337L20.3 26.8317V14.7525L20.6 14.5545L20.9 14.3564L21.2 14.1584L21.5 13.9604L21.9 13.8614L22.3 13.7624L22.7 13.6634L23.1 13.5644L23.5 13.4653L23.9 13.3663L24.3 13.2673L24.7 13.1683H25.1H25.5H25.9H26.2ZM14.6 11.0891H14.2H13.8H13.4H13H12.6L12.2 11.1881L11.8 11.2871L11.4 11.3861L11 11.4852L10.6 11.5842L10.3 11.6832L10.1 11.7822L9.90002 11.8812L9.69995 11.9802L9.5 12.0792L9.30005 12.1782L9.09998 12.2772L8.90002 12.3762L8.69995 12.4753L8.5 12.5743L8.40002 12.6733V28.0198V28.1188V28.2178L8.5 28.3168L8.59998 28.4158H8.69995H8.80005H8.90002L9.19995 28.3168L9.5 28.2178L9.80005 28.1188L10.1 28.0198L10.4 27.9208L10.7 27.8218L11 27.7228L11.3 27.6238L11.6 27.5248L11.9 27.4257L12.2 27.3267H12.5H12.8H13.1H13.4H13.7H14.1H14.5H14.9H15.3H15.7L16.1 27.4257L16.5 27.5248L16.9 27.6238L17.3 27.7228L17.7 27.8218L18.1 27.9208L18.3 28.0198L18.5 28.1188L18.7 28.2178L18.9 28.3168L19.1 28.4158L19.3 28.5149L19.5 28.6139L19.7 28.7129L19.9 28.8119L20 28.9109L20.3 28.7129L20.6 28.5149L20.9 28.3168L21.2 28.2178L21.6 28.1188L22 28.0198L22.4 27.9208L22.8 27.8218L23.2 27.7228L23.6 27.6238L24 27.5248L24.4 27.4257L24.8 27.3267H25.2H25.6H25.9H26.2H26.5H26.8H27.1H27.4H27.7L28 27.4257L28.3 27.5248L28.6 27.6238L28.9 27.7228L29.2 27.8218L29.5 27.9208L29.8 28.0198L30.1 28.1188L30.4 28.2178L30.7 28.3168H30.8H30.9H31H31.1H31.2L31.3 28.2178L31.4 28.1188V28.0198V27.9208V12.6733L31.2 12.4753L30.9 12.2772L30.6 12.1782L30.3 12.0792L30 11.9802L29.7 11.8812L29.4 11.7822L29.1 11.6832L28.9 11.5842L28.7 11.4852L28.5 11.3861L28.3 11.2871H28.1H27.9L27.4 11.1881L26.9 11.0891H26.4H25.9H25.4H25H24.6H24.2H23.8H23.4L23 11.1881L22.6 11.2871L22.2 11.3861L21.8 11.4852L21.4 11.5842L21 11.6832L20.8 11.7822L20.6 11.8812L20.4 11.9802L20.2 12.0792L20 12.1782L19.8 12.2772L19.6 12.3762L19.4 12.4753L19.2 12.5743L19.1 12.6733L19 12.5743L18.8 12.4753L18.6 12.3762L18.4 12.2772L18.2 12.1782L18 12.0792L17.8 11.9802L17.6 11.8812L17.4 11.7822L17.2 11.6832L16.8 11.5842L16.4 11.4852L16 11.3861L15.6 11.2871L15.2 11.1881L14.8 11.0891H14.4H14H13.6H13.2H14.6Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.8 15.8416H25.4L25.1 15.9406H24.8H24.5H24.2L23.9 16.0396H23.6L23.3 16.1386L23 16.2376H22.7L22.4 16.3366L22.2 16.4356L21.9 16.5346L21.6 16.6336L21.4 16.7326V18.5148L21.6 18.3168L21.8 18.2178L22.1 18.1188L22.4 18.0198L22.6 17.9208L22.9 17.8218H23.2L23.5 17.7227L23.8 17.6237H24.1L24.4 17.5247H24.7L25.1 17.4257H25.4H25.7H26.4H26.8H27.1L27.4 17.5247H27.8L28.1 17.6237H28.4L28.7 17.7227V16.1386L28.4 16.0396H28.1L27.7 15.9406H27.4H27.1L26.8 15.8416H26.4H25.8Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.8 18.6139H25.4H25.1H24.8L24.5 18.7129H24.2L23.9 18.8119H23.6L23.3 18.9109H23L22.7 19.0099L22.4 19.1089L22.2 19.208L21.9 19.307L21.6 19.406L21.4 19.505V21.1881L21.6 21.0891L21.8 20.9901L22.1 20.8911L22.4 20.7921L22.6 20.6931L22.9 20.5941L23.2 20.4951L23.5 20.3961H23.8L24.1 20.2971H24.4L24.7 20.1981H25.1H25.4H25.7H26.1H26.4H26.8H27.1H27.4L27.8 20.2971H28.1L28.4 20.3961H28.7V18.8119H28.4L28.1 18.7129H27.7L27.4 18.6139H27.1H26.8H26.4H26.1H25.8Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.8 21.4851H25.4H25.1H24.8H24.5L24.2 21.5841H23.9L23.6 21.6831H23.3L23 21.7821L22.7 21.8811H22.4L22.2 21.9802L21.9 22.0792L21.6 22.1782L21.4 22.2772V23.9604L21.6 23.8613L21.8 23.7623L22.1 23.6633L22.4 23.4653H22.6L22.9 23.3663L23.2 23.2673L23.5 23.1683H23.8L24.1 23.0693H24.4L24.7 22.9703H25.1H25.4H25.7H26.1H26.4H26.8H27.1H27.4L27.8 23.0693H28.1L28.4 23.1683H28.7V21.6831L28.4 21.5841H28.1H27.7L27.4 21.4851H27.1H26.8H26.4H25.8Z"
                            fill="white" />
                    </svg>


                    <h2 className="w-full mt-4 text-lg font-medium text-center">What I learned:Resposive Website </h2>
                    <p className="w-full mt-4 text-center md:text-justify">I learned that even a small design change can
                        have a huge impact on the user experience.
                        The most important takeaway for me is to
                        always focus on the real needs of the user
                        when coming up with design ideas and solutions. </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.5 20C0.5 8.91089 9.59995 0 20.7 0C31.9 0 40.9 9.0099 40.9 20C40.9 30.9901 31.8 40 20.7 40C9.49995 40 0.5 31.0891 0.5 20Z"
                            fill="#5F6368" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M26.7 18.4158L22.3 14.1584L10.8 25.5445V29.802H15.2L26.7 18.4158ZM30.1 15.0495C30.6 14.5544 30.6 13.8614 30.1 13.4653L27.4 10.7921C26.9 10.297 26.2 10.297 25.8 10.7921L23.5 13.0693L27.9 17.3267L30.1 15.0495Z"
                            fill="white" />
                    </svg>


                    <h2 className="w-full mt-4 text-lg font-medium text-center">Impact: Mobile App </h2>
                    <p className="w-full mt-4 text-center md:text-justify">The app makes users feel like Wedding App
                        really thinks about how to meet their needs.
                    </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.0999756 20C0.0999756 9.0099 9.20005 0 20.3 0C31.5 0 40.5 8.91089 40.5 20C40.5 31.0891 31.4 40 20.3 40C9.20005 40 0.0999756 31.0891 0.0999756 20Z"
                            fill="#5F6368" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M26.2 13.1683H26.7H27.2H27.7L28.2 13.2673H28.4H28.6H28.8L29 13.3663L29.2 13.4653L29.4 13.5644L29.6 13.6634L29.8 13.7624V25.7426L29.6 25.6436L29.4 25.5446L29.2 25.4455L29 25.3465H28.8H28.6H28.4H28.2L27.7 25.2475H27.2H26.7H26.2H25.9H25.5H25.1L24.7 25.3465L24.3 25.4455L23.9 25.5446L23.5 25.6436L23.1 25.7426L22.7 25.8416L22.3 25.9406L21.9 26.0396L21.5 26.1386L21.2 26.2376L20.9 26.4356L20.6 26.6337L20.3 26.8317V14.7525L20.6 14.5545L20.9 14.3564L21.2 14.1584L21.5 13.9604L21.9 13.8614L22.3 13.7624L22.7 13.6634L23.1 13.5644L23.5 13.4653L23.9 13.3663L24.3 13.2673L24.7 13.1683H25.1H25.5H25.9H26.2ZM14.6 11.0891H14.2H13.8H13.4H13H12.6L12.2 11.1881L11.8 11.2871L11.4 11.3861L11 11.4852L10.6 11.5842L10.3 11.6832L10.1 11.7822L9.90002 11.8812L9.69995 11.9802L9.5 12.0792L9.30005 12.1782L9.09998 12.2772L8.90002 12.3762L8.69995 12.4753L8.5 12.5743L8.40002 12.6733V28.0198V28.1188V28.2178L8.5 28.3168L8.59998 28.4158H8.69995H8.80005H8.90002L9.19995 28.3168L9.5 28.2178L9.80005 28.1188L10.1 28.0198L10.4 27.9208L10.7 27.8218L11 27.7228L11.3 27.6238L11.6 27.5248L11.9 27.4257L12.2 27.3267H12.5H12.8H13.1H13.4H13.7H14.1H14.5H14.9H15.3H15.7L16.1 27.4257L16.5 27.5248L16.9 27.6238L17.3 27.7228L17.7 27.8218L18.1 27.9208L18.3 28.0198L18.5 28.1188L18.7 28.2178L18.9 28.3168L19.1 28.4158L19.3 28.5149L19.5 28.6139L19.7 28.7129L19.9 28.8119L20 28.9109L20.3 28.7129L20.6 28.5149L20.9 28.3168L21.2 28.2178L21.6 28.1188L22 28.0198L22.4 27.9208L22.8 27.8218L23.2 27.7228L23.6 27.6238L24 27.5248L24.4 27.4257L24.8 27.3267H25.2H25.6H25.9H26.2H26.5H26.8H27.1H27.4H27.7L28 27.4257L28.3 27.5248L28.6 27.6238L28.9 27.7228L29.2 27.8218L29.5 27.9208L29.8 28.0198L30.1 28.1188L30.4 28.2178L30.7 28.3168H30.8H30.9H31H31.1H31.2L31.3 28.2178L31.4 28.1188V28.0198V27.9208V12.6733L31.2 12.4753L30.9 12.2772L30.6 12.1782L30.3 12.0792L30 11.9802L29.7 11.8812L29.4 11.7822L29.1 11.6832L28.9 11.5842L28.7 11.4852L28.5 11.3861L28.3 11.2871H28.1H27.9L27.4 11.1881L26.9 11.0891H26.4H25.9H25.4H25H24.6H24.2H23.8H23.4L23 11.1881L22.6 11.2871L22.2 11.3861L21.8 11.4852L21.4 11.5842L21 11.6832L20.8 11.7822L20.6 11.8812L20.4 11.9802L20.2 12.0792L20 12.1782L19.8 12.2772L19.6 12.3762L19.4 12.4753L19.2 12.5743L19.1 12.6733L19 12.5743L18.8 12.4753L18.6 12.3762L18.4 12.2772L18.2 12.1782L18 12.0792L17.8 11.9802L17.6 11.8812L17.4 11.7822L17.2 11.6832L16.8 11.5842L16.4 11.4852L16 11.3861L15.6 11.2871L15.2 11.1881L14.8 11.0891H14.4H14H13.6H13.2H14.6Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.8 15.8416H25.4L25.1 15.9406H24.8H24.5H24.2L23.9 16.0396H23.6L23.3 16.1386L23 16.2376H22.7L22.4 16.3366L22.2 16.4356L21.9 16.5346L21.6 16.6336L21.4 16.7326V18.5148L21.6 18.3168L21.8 18.2178L22.1 18.1188L22.4 18.0198L22.6 17.9208L22.9 17.8218H23.2L23.5 17.7227L23.8 17.6237H24.1L24.4 17.5247H24.7L25.1 17.4257H25.4H25.7H26.4H26.8H27.1L27.4 17.5247H27.8L28.1 17.6237H28.4L28.7 17.7227V16.1386L28.4 16.0396H28.1L27.7 15.9406H27.4H27.1L26.8 15.8416H26.4H25.8Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.8 18.6139H25.4H25.1H24.8L24.5 18.7129H24.2L23.9 18.8119H23.6L23.3 18.9109H23L22.7 19.0099L22.4 19.1089L22.2 19.208L21.9 19.307L21.6 19.406L21.4 19.505V21.1881L21.6 21.0891L21.8 20.9901L22.1 20.8911L22.4 20.7921L22.6 20.6931L22.9 20.5941L23.2 20.4951L23.5 20.3961H23.8L24.1 20.2971H24.4L24.7 20.1981H25.1H25.4H25.7H26.1H26.4H26.8H27.1H27.4L27.8 20.2971H28.1L28.4 20.3961H28.7V18.8119H28.4L28.1 18.7129H27.7L27.4 18.6139H27.1H26.8H26.4H26.1H25.8Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.8 21.4851H25.4H25.1H24.8H24.5L24.2 21.5841H23.9L23.6 21.6831H23.3L23 21.7821L22.7 21.8811H22.4L22.2 21.9802L21.9 22.0792L21.6 22.1782L21.4 22.2772V23.9604L21.6 23.8613L21.8 23.7623L22.1 23.6633L22.4 23.4653H22.6L22.9 23.3663L23.2 23.2673L23.5 23.1683H23.8L24.1 23.0693H24.4L24.7 22.9703H25.1H25.4H25.7H26.1H26.4H26.8H27.1H27.4L27.8 23.0693H28.1L28.4 23.1683H28.7V21.6831L28.4 21.5841H28.1H27.7L27.4 21.4851H27.1H26.8H26.4H25.8Z"
                            fill="white" />
                    </svg>

                    <h2 className="w-full mt-4 text-lg font-medium text-center">What I learned:Mobile App </h2>
                    <p className="w-full mt-4 text-center md:text-justify">While designing the Wedding app, I learned that
                        the first ideas for the app are only the beginning
                        of the process. Usability studies and peer
                        feedback influenced each iteration of the
                        app's designs.
                    </p>
                </div>
            </div>


            <h2 className="w-full mt-12 text-xl font-bold">Next Steps</h2>
            <div className="grid w-full grid-cols-12 gap-4 mt-6">
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#5F6368" />
                        <path d="M17.6953 10.5625V22H16.25V12.3672L13.3359 13.4297V12.125L17.4688 10.5625H17.6953Z" fill="white" />
                    </svg>
                    <p className="w-full mt-4 text-center md:text-justify">Our target users shared that the design
                        Conduct another round of usability studies
                        to validate whether the pain points users
                        experienced have been effectively addressed. </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#5F6368" />
                        <path
                            d="M20.3984 20.8125V22H12.9531V20.9609L16.6797 16.8125C17.138 16.3021 17.4922 15.8698 17.7422 15.5156C17.9974 15.1562 18.1745 14.8359 18.2734 14.5547C18.3776 14.2682 18.4297 13.9766 18.4297 13.6797C18.4297 13.3047 18.3516 12.9661 18.1953 12.6641C18.0443 12.3568 17.8203 12.112 17.5234 11.9297C17.2266 11.7474 16.8672 11.6562 16.4453 11.6562C15.9401 11.6562 15.5182 11.7552 15.1797 11.9531C14.8464 12.1458 14.5964 12.4167 14.4297 12.7656C14.263 13.1146 14.1797 13.5156 14.1797 13.9688H12.7344C12.7344 13.3281 12.875 12.7422 13.1562 12.2109C13.4375 11.6797 13.8542 11.2578 14.4062 10.9453C14.9583 10.6276 15.638 10.4688 16.4453 10.4688C17.1641 10.4688 17.7786 10.5964 18.2891 10.8516C18.7995 11.1016 19.1901 11.4557 19.4609 11.9141C19.737 12.3672 19.875 12.8984 19.875 13.5078C19.875 13.8411 19.8177 14.1797 19.7031 14.5234C19.5938 14.862 19.4401 15.2005 19.2422 15.5391C19.0495 15.8776 18.8229 16.2109 18.5625 16.5391C18.3073 16.8672 18.0339 17.1901 17.7422 17.5078L14.6953 20.8125H20.3984Z"
                            fill="white" />
                    </svg>
                    <p className="w-full mt-4 text-center md:text-justify">Identify any additional areas of need and
                        ideate on new features
                    </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#5F6368" />
                        <path
                            d="M15.0547 15.6016H16.0859C16.5911 15.6016 17.0078 15.5182 17.3359 15.3516C17.6693 15.1797 17.9167 14.9479 18.0781 14.6562C18.2448 14.3594 18.3281 14.026 18.3281 13.6562C18.3281 13.2188 18.2552 12.8516 18.1094 12.5547C17.9635 12.2578 17.7448 12.0339 17.4531 11.8828C17.1615 11.7318 16.7917 11.6562 16.3438 11.6562C15.9375 11.6562 15.5781 11.737 15.2656 11.8984C14.9583 12.0547 14.7161 12.2786 14.5391 12.5703C14.3672 12.862 14.2812 13.2057 14.2812 13.6016H12.8359C12.8359 13.0234 12.9818 12.4974 13.2734 12.0234C13.5651 11.5495 13.974 11.1719 14.5 10.8906C15.0312 10.6094 15.6458 10.4688 16.3438 10.4688C17.0312 10.4688 17.6328 10.5911 18.1484 10.8359C18.6641 11.0755 19.0651 11.4349 19.3516 11.9141C19.638 12.388 19.7812 12.9792 19.7812 13.6875C19.7812 13.974 19.7135 14.2812 19.5781 14.6094C19.4479 14.9323 19.2422 15.2344 18.9609 15.5156C18.6849 15.7969 18.3255 16.0286 17.8828 16.2109C17.4401 16.388 16.9089 16.4766 16.2891 16.4766H15.0547V15.6016ZM15.0547 16.7891V15.9219H16.2891C17.013 15.9219 17.612 16.0078 18.0859 16.1797C18.5599 16.3516 18.9323 16.5807 19.2031 16.8672C19.4792 17.1536 19.6719 17.4688 19.7812 17.8125C19.8958 18.151 19.9531 18.4896 19.9531 18.8281C19.9531 19.3594 19.862 19.8307 19.6797 20.2422C19.5026 20.6536 19.25 21.0026 18.9219 21.2891C18.599 21.5755 18.2188 21.7917 17.7812 21.9375C17.3438 22.0833 16.8672 22.1562 16.3516 22.1562C15.8568 22.1562 15.3906 22.0859 14.9531 21.9453C14.5208 21.8047 14.138 21.6016 13.8047 21.3359C13.4714 21.0651 13.2109 20.7344 13.0234 20.3438C12.8359 19.9479 12.7422 19.4974 12.7422 18.9922H14.1875C14.1875 19.388 14.2734 19.7344 14.4453 20.0312C14.6224 20.3281 14.8724 20.5599 15.1953 20.7266C15.5234 20.888 15.9089 20.9688 16.3516 20.9688C16.7943 20.9688 17.1745 20.8932 17.4922 20.7422C17.8151 20.5859 18.0625 20.3516 18.2344 20.0391C18.4115 19.7266 18.5 19.3333 18.5 18.8594C18.5 18.3854 18.401 17.9974 18.2031 17.6953C18.0052 17.388 17.724 17.1615 17.3594 17.0156C17 16.8646 16.5755 16.7891 16.0859 16.7891H15.0547Z"
                            fill="white" />
                    </svg>
                    <p className="w-full mt-4 text-center md:text-justify">Conduct follow-up usability testing on
                        the responsive website
                    </p>
                </div>
                <div className="flex flex-col items-center col-span-12 px-4 py-10 rounded shadow-lg md:col-span-6 xl:col-span-3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#5F6368" />
                        <path
                            d="M20.6328 18.1719V19.3594H12.4141V18.5078L17.5078 10.625H18.6875L17.4219 12.9062L14.0547 18.1719H20.6328ZM19.0469 10.625V22H17.6016V10.625H19.0469Z"
                            fill="white" />
                    </svg>
                    <p className="w-full mt-4 text-center md:text-justify">In future further I will improve more
                        in my app design.

                    </p>
                </div>
            </div>

            <BottomPagination />
        </main >
    )
}