import TopNavLinks from "./TopNavLinks";

export default function Footer() {
  return (
    <div className="bg-palette2 text-palette6 flex flex-col gap-4">
      <div className="google-font-0 flex flex-col mx-3 items-center text-center pb-5 gap-4">
        <div className="flex flex-col">
          <h1 className="py-3">Site Links</h1>
          <div className="">
            <TopNavLinks linkTo="/gtldr_v1/support" linkName="Support" />{" "}
            {" | "}
            <TopNavLinks linkTo="/gtldr_v1/about" linkName="About" /> {" | "}
            <TopNavLinks linkTo="/gtldr_v1/faqs" linkName="FAQs" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="py-3">Other Tools (External)</h1>
          <div>
            <TopNavLinks
              linkTo="https://keqingmains.com/"
              linkName="KQM"
              target="_blank"
            />
            {" | "}
            <TopNavLinks
              linkTo="/gtldr_v1/about"
              linkName="Genshin Wiki"
              target="_blank"
            />{" "}
            {" | "}
            <TopNavLinks
              linkTo="/gtldr_v1/faqs"
              linkName="Akasha"
              target="_blank"
            />{" "}
            {" | "}
            <TopNavLinks
              linkTo="/gtldr_v1/faqs"
              linkName="Enka"
              target="_blank"
            />
          </div>
        </div>
      </div>

      <div className="text-center my-3">
        © 2023 Richard Villaseñor <br />© All rights reserved by Hoyoverse.
        Other properties belong to their respective owners.
      </div>
    </div>
  );
}
