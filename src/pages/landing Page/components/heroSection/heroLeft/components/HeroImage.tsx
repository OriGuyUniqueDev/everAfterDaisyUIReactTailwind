import { FunctionComponent } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeroImageProps {}

const HeroImage: FunctionComponent<HeroImageProps> = () => {
	return (
		<div className="self-center hidden lg:col-span-5 justify-self-center lg:block ">
			<img
				src="/src/assets/hero.png"
				alt="hero photo"
			/>
		</div>
	);
};

export default HeroImage;
