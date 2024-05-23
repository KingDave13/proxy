import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
import { RiInformationFill } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { ImPlay } from "react-icons/im";
import { TiArrowSortedDown } from "react-icons/ti";
import * as Yup from 'yup';

const Search = () => {

    const formRef = useRef();
    const [Loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState('propertySearch');

    const formik = useFormik({
        initialValues: {
            product: '',
            category: '',
            price: '',
            numbermail: '',
        },

        validationSchema: Yup.object({
            product: Yup.string().required('Product is required.'),
            category: Yup.string().required('Category is required.'),
            price: Yup.string().required('Price is required.'),
            numbermail: Yup.string().required('Phone Number or Email is required.'),
        }),

        // onSubmit: (values) => {
        //     setLoading(true);

        //     emailjs.send(
        //         'service_1zam733',
        //         'template_bjv8tlu',
        //         {
        //           from_name: `${values.firstname} ${values.lastname}`,
        //           to_name: 'Elite Press Journals',
        //           from_email: values.email,
        //           to_email: 'contact@epjournals.com',
        //           subject: values.subject,
        //           message: values.message,
        //         },
        //         'UE-RzuF3c_ndNJ-Zw'
        //       )
        //       .then(
        //         () => {
        //           setLoading(false);
        //           setModalOpen(true);
        //           disableScroll();
          
        //           setTimeout(() => {
        //             setModalOpen(false);
        //             enableScroll();
        //           }, 2000);
          
        //           formik.resetForm();
        //         },
                
        //         (error) => {
        //           setLoading(false);
        //           console.log(error);
        //         }
        //     );
        // },
    });

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

  return (
    <div className='items-center w-full flex flex-col'>
        <div className='flex flex-col bg-white md:p-8 ss:p-8 p-5 
        md:rounded-[20px] rounded-[12px] md:gap-3 ss:gap-3 gap-2 
        border-[1px] border-main3'>
            <h2 className='text-primaryalt font-bold md:text-[22px]
            ss:text-[20px] text-[18px] tracking-tight  md:leading-[30px] 
            ss:leading-[25px] leading-[25px]'>
                Let us know exactly what you want
            </h2>

            <p className='text-main md:leading-[19px] ss:leading-[19px] 
            leading-[18px] md:text-[15px] ss:text-[15px] text-[13px]'>
                Is there a particular location, style or kind of property you're 
                looking for? Also find agents or brokers quickly!
            </p>

            <div className='flex flex-row w-full md:mt-3 ss:mt-3 mt-2
            justify-center items-center'>
                <h2 className={`text-main md:text-[15px] ss:text-[14px] text-[13px]
                ${selectedTab === 'propertySearch' 
                ? 'text-main font-bold border-b-main border-b-[3px]' : ''} 
                    md:pb-2 ss:pb-2 pb-1 text-center w-full cursor-pointer`} 
                    onClick={() => handleTabChange('propertySearch')}
                >
                    Property Search
                </h2>

                <h2 className={`text-main md:text-[15px] ss:text-[14px] text-[13px]
                text-center
                    w-full cursor-pointer ${selectedTab === 'messageUs' 
                    ? 'text-main font-bold border-b-main border-b-[3px]' : ''}
                    md:pb-2 ss:pb-2 pb-1`} 
                    onClick={() => handleTabChange('messageUs')}
                >
                    Agents Search
                </h2>
            </div>
            <form ref={formRef} onSubmit={formik.handleSubmit}
            className="flex flex-col md:gap-2.5 ss:gap-2.5 md:mt-4 ss:mt-4
            mt-3 gap-2">
                {selectedTab === 'propertySearch' ? (
                    <>
                    <div className="relative">
                        <input
                            type="text"
                            name="numbermail"
                            placeholder='Search for property'
                            value={formik.values.numbermail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="md:py-2.5 ss:py-2 py-1.5 md:px-3 
                            ss:px-3 px-2 border-search 
                            text-black md:rounded-lg rounded-md md:text-[14px]
                            ss:text-[14px] text-[12px]
                            bg-transparent w-full placeholder:text-main3"
                        />
                        <p className="text-mainRed md:text-[12px] 
                        ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1">
                            {formik.touched.numbermail && formik.errors.numbermail}
                        </p>
                    </div>

                    <div className="w-full mt-1">
                        <button
                        type="submit"
                        className="bg-primaryalt grow5 md:text-[15px] w-full
                        ss:text-[16px] text-[12px] md:py-3 ss:py-3 py-2.5 
                        text-white md:rounded-lg rounded-md border-none"
                        >
                            {Loading ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                    </>
                ) : (
                    <>
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            placeholder='Search for licensed brokers'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="md:py-2.5 ss:py-2 py-1.5 md:px-3 
                            ss:px-3 px-2 border-search 
                            text-black md:rounded-lg rounded-md md:text-[14px]
                            ss:text-[14px] text-[12px]
                            bg-transparent w-full placeholder:text-main3"
                        />
                        <p className="text-mainRed md:text-[12px] 
                        ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1">
                            {formik.touched.name && formik.errors.name}
                        </p>
                    </div>

                    <div className="w-full mt-1">
                        <button
                        type="submit"
                        className="bg-primaryalt grow5 md:text-[15px] w-full
                        ss:text-[16px] text-[12px] md:py-3 ss:py-3 py-2.5 
                        text-white md:rounded-lg rounded-md border-none"
                        >
                            {Loading ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                    </>
                )}

                <div className='flex w-full gap-3 md:mt-4 ss:mt-4 mt-3
                items-center'>
                    <RiInformationFill 
                        className='text-main3 ss:text-[57px]
                        text-[55px]'
                    />

                    <h3 className='text-main3 md:text-[13px] ss:text-[12px]
                    text-[11px] md:leading-[18px] ss:leading-[17px]
                    leading-[14px] tracking-tight'>
                        If you have any special requests or orders you may
                        want to place, do well to go to the "Contact
                        Us" page to send an email or WhatsApp message 
                        directly.
                    </h3>
                </div>

                <div className='flex w-full gap-3 mt-1 items-center
                cursor-pointer grow5'>
                    <ImPlay className='text-secondary ss:text-[27px] 
                        md:ml-1 text-[27px]'
                    />
                    <h3 className='text-main md:text-[13px] ss:text-[12px]
                    text-[11px] font-bold md:leading-[17px] ss:leading-[17px]
                    leading-[14px] tracking-tight'>
                        Click here to watch our help video if you want to
                        know how to use our website better.
                    </h3>
                </div>
            </form>
        </div>
    </div>
  )
};

export default Search;