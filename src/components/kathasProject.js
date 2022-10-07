import React from 'react';
import BottomPagination from './bottomPagination';

export default function KathasProject() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="container flex flex-col items-center justify-center px-4 mx-auto mt-10">
      <h2 className="w-full text-xl font-bold">Project Overview</h2>
      <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
        <div className="order-2 col-span-12 mt-6 mb-6 lg:mt-0 lg:col-span-5 lg:order-1">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 41 41" fill="none" >
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
            Kathas Entertainment is a Hyper Casual Game Development company that makes games for publishers and general audience.
            The goal is to create best Hyper Casual Games.
          </p>
          <div className="flex items-center mt-6">
            <svg width="32" height="32" viewBox="0 0 41 40" fill="none" >
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
            Sept 2022 to Sept 2022
          </p>
          <div className="flex items-center mt-6">
            <svg width="32" height="32" viewBox="0 0 42 40" fill="none" >
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
            KathasEntertaiment website needs to showcase their games for publishers and general audience.
          </p>
          <div className="flex items-center mt-6">
            <div className="flex items-center mt-4">
              <svg width="32" height="32" viewBox="0 0 41 40" fill="none" >
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
            To create portfolio website as per the client requirement.
          </p>
          <div className="flex items-center mt-6">
            <svg width="32" height="32" viewBox="0 0 41 40" fill="none" >
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
            UI/UX designer for the Kathas Entertainment website.
          </p>

          <div className="flex items-center mt-6">
            <svg width="32" height="32" x="0px" y="0px"
              viewBox="0 0 32 32" >
              <circle cx="16" cy="16" r="16" fill="#427EEF" />
              <rect x="3.9" y="4.3" class="st1" width="24" height="24" fill="none" />
              <g>
                <path fill="#FFFFFF"
                  d="M15.9,17c1.6,0,3.1,0.4,4.2,0.9c1.1,0.5,1.8,1.6,1.8,2.7v1.6h-12v-1.6c0-1.2,0.7-2.3,1.8-2.7
                    C12.9,17.4,14.3,17,15.9,17z M7.9,17.3c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S6.8,17.3,7.9,17.3z M9.1,18.4
                    c-0.4-0.1-0.7-0.1-1.1-0.1c-1,0-1.9,0.2-2.8,0.6c-0.7,0.3-1.2,1-1.2,1.9v1.6h4.5v-1.6C8.4,19.8,8.7,19,9.1,18.4z M23.9,17.3
                    c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S22.8,17.3,23.9,17.3z M27.9,20.7c0-0.8-0.5-1.5-1.2-1.9c-0.9-0.4-1.8-0.6-2.8-0.6
                    c-0.4,0-0.8,0-1.1,0.1c0.4,0.7,0.6,1.5,0.6,2.3v1.6h4.5V20.7z M15.9,10.3c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3
                    S14.3,10.3,15.9,10.3z"
                />
              </g>
            </svg>
            <h2 className="ml-4 text-lg font-medium">My Team</h2>
          </div>
          <p className="ml-12 ">
            Shubham Mourya, Jaspreeth Singh, and Subham Pradhan.
          </p>

          <div className="flex items-center mt-6">
            <svg width="32" height="32" viewBox="0 0 42 40" fill="none" >
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
            My responsibilities is to create a website which showcase bussiness and some of client work.
            <br></br>
            <br></br>
            I have created Wireframes, Prototype, Gif, and information architecture for the website.
          </p>
          <div className='flex justify-center gap-6 mt-12 whitespace-nowrap md:ml-12 md:justify-start'>

            <a className='inline-flex items-center gap-2 px-3 py-2 text-lg font-medium transition-all border-2 rounded-lg border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white' target="_blank" href='https://kathasentertainment.com/' rel='noopener noreferrer'>View Live
              <svg fill="currentColor" strokeWidth='1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                <path stroke="currentColor" d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z" /></svg>
            </a>

            <a className='inline-flex items-center gap-2 px-3 py-2 text-lg font-medium text-gray-700 transition-all border-2 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white' target="_blank" href='https://www.figma.com/file/nsvKG6zjwdPQSNBTmfi0MZ/Kathas-Entertainments' rel='noopener noreferrer'>
              View in Figma
              <svg width="22px" height="22px" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_137)">
                  <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE" />
                  <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5H0Z" fill="#0ACF83" />
                  <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z" fill="#FF7262" />
                  <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5H0Z" fill="#F24E1E" />
                  <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5H0Z" fill="#A259FF" />
                </g>
                <defs>
                  <clipPath id="clip0_1_137">
                    <rect width="38" height="57" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div className="order-1 col-span-12 mt-6 lg:col-span-6 lg:col-start-7 lg:order-2 lg:mt-0">
          <img src={require("../assets/Kathas/webkathas1.png")} className="w-full rounded" alt="" />
          <img src={require("../assets/Kathas/webkathas2.png")} className="w-full mt-4 rounded" alt="" />
        </div>
      </div>

      <BottomPagination />
    </main>
  )
}