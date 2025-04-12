import React from "react";
import Profile from "@/assets/images/profile-bg.png";

const MyStory = () => {
  return (
    <div className="flex flex-col items-center space-y-l4 py-8">
      <div className="space-y-l1">
        <h1 className="heading-h1 text-center primary-text">
          My <span className="text-primary">Story</span>
        </h1>
        <p className="paragraph text-center font-bold secondary-text">
          The Journey That Shaped My Path as a Designer Today
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full px-4 space-x-l4 space-y-l4">
        <div className="flex flex-col space-y-l1 w-full lg:w-1/2">
          <h2 className="text-xl md:text-3xl font-medium secondary-text text-center lg:text-start">
            Hello, I’m Derick
          </h2>
          <p className="secondary-text paragraph text-center lg:text-start">
            {" "}
            I help restaurants get more customers by building modern,
            easy-to-use websites that look great and work perfectly on any
            device. I focus on making websites that do what matters most: bring
            people to your restaurant, make it easy for them to book a table,
            check your menu, and fall in love with your brand online. Whether
            you're running a cozy café or a fine dining spot, I’ll make sure
            your online presence is just as inviting as your food and service.
            No stress, no tech headaches — just a website that works for you.
          </p>
        </div>
        <div>
          <div className="w-full flex justify-center relative">
            <div className="w-1/3 bg-primary absolute right-0 opacity-20 rounded-full aspect-square"></div>
            <div className="w-1/3 bg-primary absolute left-0 bottom-0 opacity-20 rounded-full aspect-square"></div>
            <img
              src={Profile}
              alt="profile image"
              className="w-1/2 lg:w-full border-6 border-primary aspect-square rounded-full relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStory;
