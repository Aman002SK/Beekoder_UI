import React from "react";
import ContactUsForm from '../ContactPage/ContactUsForm';


const ContactFormSection = () => {
  return (
    <div className="mx-auto rounded-xl p-7 lg:p-14">
      <h1 className="text-center text-4xl font-semibold text-richblack-300">Get in Touch</h1>
      <p className="text-center text-richblack-300 mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      
      <div className="mt-12 mx-auto" style={{ maxWidth: '50rem', width: '100%', '@media (max-width: 640px)': { maxWidth: '60%' } }}>
        <ContactUsForm />
      </div>
    </div>
      );
    };
    

{/* <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col" style={{ maxWidth: '50rem'}}> */}
{/* <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
  Got a Idea? We&apos;ve got the skills. Let&apos;s team up
</h1> */}
{/* <p className="">
We&apos;d love to here for you, Please fill out this form.
</p>

<div className="mt-12" >
  <ContactUsForm />
</div>
</div> */}


export default ContactFormSection;