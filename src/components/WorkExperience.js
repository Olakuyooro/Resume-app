/* eslint-disable jsx-a11y/anchor-has-content */
const WorkExperience = () => {
  return (
    <div className="text-black px-12 mt-12">
      <h2 className="text-4xl mb-3">Work Experience</h2>
      <div>
        <p className="text-xl">
          Frontend Developer, Timestweb Nov 2023 - Present
        </p>
        <div>
          • Developed several web pages across the user and admin dashboards for
          a sports betting platform - Krakabet.<br></br>• Engineered a bet setup
          system, improving user experience significantly <br></br>• Developed a
          secure transaction management system integrated with Paystack.{" "}
          <br></br>
        </div>
      </div>
      <div className="text-lg mt-3">
        Link to project:
        <a
          href="https://dev.krakabet.com.ng/"
          className="hover:opacity-60 underline text-[#89eb34]"
        >
          Krakabet
        </a>
      </div>
      <div className="mt-4">
        <p className="text-xl">
          Frontend Developer(Intern), Rock and Art UK Apr 2023 - Nov 2023
        </p>
        <div>
          • Assisted in developing web pages, ensuring it met design
          specifications and provided a user-friendly experience.<br></br>•
          Participated actively in team meetings, contributing ideas and
          brainstorming about the CMS development.
        </div>
      </div>
      {/* <div className="text-lg mt-3">
        Link to project:
        <a
          href="https://dev.krakabet.com.ng/"
          className="hover:opacity-60 underline text-[#89eb34]"
        >
          Krakabet
        </a>
      </div> */}
    </div>
  );
};

export default WorkExperience;
