import DescriptionContent from "../DescriptionContent";
import ProjectType from "../ProjectType";

const Component = () => {
  const first_text =
    "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.";

  const second_text =
    "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.";
  return (
    <>
      <div>
        <DescriptionContent
          title="About this project"
          first_text={first_text}
          second_text={second_text}
        />
      </div>
      <div>
        <section>
          <ProjectType
            title="Bamboo Stand"
            subtitle="Pledge $25 or more"
            text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            numberPrice="101"
            textPrice="left"
            textButton="Select reward"
          />
        </section>
        <section className="mx-5 border-solid border-silver border-1 rounded-xl bg-white">
          <ProjectType
            title="Black Edition Stand"
            subtitle="Pledge $75 or more"
            text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            numberPrice="64"
            textPrice="left"
            textButton="Select reward"
          />
        </section>
        <section>
          <ProjectType
            title="Mahogany Special Edition"
            subtitle="Pledge $200 or more"
            text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.."
            numberPrice="0"
            textPrice="left"
            textButton="Select reward"
          />
        </section>
      </div>
    </>
  );
};

export default Component;
