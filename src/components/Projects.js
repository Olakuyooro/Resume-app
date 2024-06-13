import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import shortner from "./images/URL Shortner.png";
import tipCalculator from "./images/Tip calculator app.png";
import clipboard from "./images/Clipboard landing page.png";
import ipTracker from "./images/React App.png";
import productivePro from "./images/productive-pro.png";
import ecommerce from "./images/E-commerce.png";
import insure from "./images/Insure.png";
import calculator from "./images/Calculator app.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="text-white mt-20 pb-16">
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="px-4 md:px-8"
      >
        <h2 className="text-4xl mb-16 text-black text-center">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              href: "https://url-shortner-livid.vercel.app/",
              src: shortner,
              alt: "url-short",
              title: "URL Shortener",
              description: (
                <>
                  <p>
                    This URL shortener project is designed to demonstrate my
                    skills in full stack development. The application allows
                    users to create short, easy-to-share URLs from long URLs and
                    manage these shortened links through a user-friendly
                    interface.
                  </p>
                  <p className="font-bold mt-4">Features</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      URL Shortening: Convert long URLs into short, shareable
                      links.
                    </li>
                    <li>
                      Redirection: Redirect users to the original URL when a
                      short URL is accessed.
                    </li>
                    <li>
                      Responsive Design: Optimized for both desktop and mobile
                      devices.
                    </li>
                  </ul>
                  <p className="font-bold mt-4">Technologies Used</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Frontend: React, CSS, HTML</li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Database: MongoDB</li>
                    <li>State Management: Context API</li>
                  </ul>
                </>
              ),
            },
            {
              href: "https://productive-pro-beta.vercel.app/",
              src: productivePro,
              alt: "productive-pro",
              title: "ProductivePro",
              description: (
                <>
                  <p>
                    ProductivePro is a simple and intuitive todo application
                    that allows users to manage their tasks efficiently. With
                    user authentication, you can securely register and log in to
                    your account, add and manage tasks, and view them on a
                    calendar.
                  </p>
                  <p className="font-bold mt-4">Features</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      User Registration and Login: Securely register and log in
                      to your account.
                    </li>
                    <li>Todo List: Add, edit, and delete tasks.</li>
                    <li>
                      Calendar Integration: View tasks on a calendar to manage
                      your schedule.
                    </li>
                    <li>
                      Responsive Design: Optimized for both desktop and mobile
                      devices.
                    </li>
                  </ul>
                  <p className="font-bold mt-4">Technologies Used</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Frontend: Next.js, Tailwind CSS</li>
                    <li>State Management: React Hooks, Context API</li>
                    <li>Authentication: JWT</li>
                    <li>Backend: Node.js, Express.js</li>
                  </ul>
                </>
              ),
            },
            {
              href: "https://my-store-kappa-liard.vercel.app/",
              src: ecommerce,
              alt: "e-commerce",
              title: "E-commerce Store",
              description: (
                <>
                  <p>
                    This e-commerce app is designed to showcase my skills in
                    frontend development using React. The app displays products
                    from the FakeStore API, allowing users to browse items, view
                    detailed information, and add products to their cart.
                  </p>
                  <p className="font-bold mt-4">Features</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Product Listing: Displays a list of products fetched from
                      the FakeStore API.
                    </li>
                    <li>
                      Product Details: View detailed information about each
                      product.
                    </li>
                    <li>
                      Shopping Cart: Add and remove products from the shopping
                      cart.
                    </li>
                    <li>
                      Responsive Design: Optimized for both desktop and mobile
                      devices.
                    </li>
                  </ul>
                  <p className="font-bold mt-4">Technologies Used</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Frontend: React, Tailwind CSS, HTML</li>
                    <li>State Management: Redux</li>
                    <li>Data Fetching: Axios</li>
                    <li>API: FakeStore API</li>
                  </ul>
                </>
              ),
            },
            {
              href: "https://ip-address-tracker-zeta-kohl.vercel.app/",
              src: ipTracker,
              alt: "ipTracker",
              title: "IP Address Tracker",
              description: (
                <>
                  <p>
                    The IP Address Tracker is a tool designed to help users find
                    the geographical location of any IP address. By integrating
                    the Ipify Geolocation API, the application provides accurate
                    location data, which is then visualized on a map using
                    Leaflet.js.
                  </p>
                  <p className="font-bold mt-4">Features</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      IP Address Lookup: Enter any IP address to find its
                      geographical location.
                    </li>
                    <li>
                      Map Visualization: Display the location on an interactive
                      map.
                    </li>
                    <li>
                      Responsive Design: Optimized for both desktop and mobile
                      devices.
                    </li>
                  </ul>
                  <p className="font-bold mt-4">Technologies Used</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Frontend: React, CSS, HTML</li>
                    <li>Mapping: Leaflet.js</li>
                    <li>Geolocation API: Ipify API</li>
                    <li>State Management: React Hooks</li>
                  </ul>
                </>
              ),
            },
            {
              href: "https://tip-calculator-alpha-flax.vercel.app/",
              src: tipCalculator,
              alt: "tip-calculator",
              title: "Tip Calculator",
              description: (
                <>
                  <p>
                    The Tip Calculator project is designed to help users easily
                    calculate the tip amount for a given bill. Users can input
                    the total bill amount, select the desired tip percentage,
                    and specify the number of people sharing the bill. The
                    application then calculates the total tip amount and the
                    amount each person needs to pay.
                  </p>
                  <p className="font-bold mt-4">Features</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Tip Calculation: Enter the bill amount and tip percentage
                      to calculate the total tip.
                    </li>
                  </ul>
                  <p className="font-bold mt-4">Technologies Used</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </>
              ),
            },
            {
              href: "https://basic-calculator-app-ten.vercel.app/",
              src: calculator,
              alt: "calculator",
              title: "Basic Calculator",
              description: (
                <>
                  <p>
                    The Basic Calculator project is designed to perform basic
                    arithmetics
                  </p>
                  <p className="font-bold mt-4">Features</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Theme Toggle: It features a theme toggling functionality
                      to switch themes
                    </li>
                  </ul>
                  <p className="font-bold mt-4">Technologies Used</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </>
              ),
            },
            {
              href: "https://clipboardlandingsite.netlify.app/",
              src: clipboard,
              alt: "clipboard",
              title: "Clipboard Landing Page",
              description: (
                <>
                  <p>
                    The Clipboard Landing Page is a static webpage designed to
                    demonstrate my proficiency in HTML and CSS. It features a
                    clean and modern layout that can be used as a template for
                    various web projects. The design focuses on simplicity,
                    responsiveness, and visual appeal.
                  </p>
                  <p className="font-bold mt-4">Features</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Responsive Design</li>
                  </ul>
                  <p className="font-bold mt-4">Technologies Used</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </>
              ),
            },
            {
              href: "https://insure-landing-page-sigma-nine.vercel.app/",
              src: insure,
              alt: "insure",
              title: "Insure Landing Page",
              description: (
                <>
                  <p>
                    The Insure Landing Page is a static webpage designed to
                    demonstrate my proficiency in HTML, CSS, and JavaScript. It
                    features a clean and modern layout that can be used as a
                    template for various web projects.
                  </p>
                  <p className="font-bold mt-4">Features</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Responsive Design</li>
                  </ul>
                  <p className="font-bold mt-4">Technologies Used</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </>
              ),
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <a href={project.href} target="_blank" rel="noreferrer">
                <img
                  className="w-full h-48 object-cover"
                  src={project.src}
                  alt={project.alt}
                />
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="text-gray-400">{project.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
